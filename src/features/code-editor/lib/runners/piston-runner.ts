import type {
  LanguageRuntime,
  OutputLine,
  OutputStream,
  RunOutcome,
} from "@/features/code-editor/types";

const DEFAULT_PISTON_API_URL = "https://emkc.org/api/v2/piston";

export const PISTON_API_URL = (
  process.env.NEXT_PUBLIC_PISTON_URL || DEFAULT_PISTON_API_URL
).replace(/\/+$/, "");

const UNAUTHORIZED_NOTICE =
  "The public Piston API only accepts whitelisted clients. Point NEXT_PUBLIC_PISTON_URL to your own Piston instance to run this language. JavaScript and TypeScript keep working: they run directly in your browser.";

type PistonStageResult = {
  code: number | null;
  stdout: string;
  stderr: string;
  output: string;
};

type PistonResponse = {
  message?: string;
  compile?: PistonStageResult;
  run?: PistonStageResult;
};

type PistonRunRequest = {
  runtime: Extract<LanguageRuntime, { kind: "piston" }>;
  fileName: string;
  code: string;
  stdin: string;
  signal: AbortSignal;
};

export function toOutputLines(text: string, stream: OutputStream) {
  const trimmed = text.replace(/\s+$/, "");
  if (!trimmed) return [];
  return trimmed
    .split(/\r?\n/)
    .map((line): OutputLine => ({ stream, text: line }));
}

async function readResponse(response: Response): Promise<PistonResponse> {
  try {
    return (await response.json()) as PistonResponse;
  } catch {
    return {};
  }
}

export async function runOnPiston({
  runtime,
  fileName,
  code,
  stdin,
  signal,
}: PistonRunRequest): Promise<RunOutcome> {
  const response = await fetch(`${PISTON_API_URL}/execute`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: runtime.language,
      version: runtime.version,
      files: [{ name: fileName, content: code }],
      stdin,
    }),
    signal,
  });
  const result = await readResponse(response);

  if (!response.ok || result.message) {
    return {
      exitCode: null,
      lines: toOutputLines(
        result.message ??
          `Execution service responded with ${response.status}.`,
        "stderr"
      ),
      notice:
        response.status === 401 || response.status === 403
          ? UNAUTHORIZED_NOTICE
          : undefined,
    };
  }

  const { compile, run } = result;
  if (compile && compile.code !== 0) {
    return {
      exitCode: compile.code,
      lines: toOutputLines(compile.stderr || compile.output, "stderr"),
    };
  }

  if (!run) {
    return {
      exitCode: null,
      lines: toOutputLines(
        "The execution service returned no result.",
        "stderr"
      ),
    };
  }

  return {
    exitCode: run.code,
    lines: [
      ...toOutputLines(run.stdout, "stdout"),
      ...toOutputLines(run.stderr, "stderr"),
    ],
  };
}
