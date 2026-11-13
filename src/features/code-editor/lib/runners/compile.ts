import type { Monaco } from "@monaco-editor/react";

import type {
  CodeEditorInstance,
  OutputLine,
} from "@/features/code-editor/types";

type TextModel = NonNullable<ReturnType<CodeEditorInstance["getModel"]>>;

type LanguageWorker = Awaited<
  ReturnType<
    Awaited<
      ReturnType<Monaco["languages"]["typescript"]["getTypeScriptWorker"]>
    >
  >
>;

type Diagnostic = Awaited<
  ReturnType<LanguageWorker["getSemanticDiagnostics"]>
>[number];

export type BrowserLanguage = "javascript" | "typescript";

type CompileResult = { code: string } | { errors: OutputLine[] };

const ERROR_CATEGORY = 1;

function flattenMessage(message: Diagnostic["messageText"]): string {
  if (typeof message === "string") return message;
  return [
    message.messageText,
    ...(message.next ?? []).map(flattenMessage),
  ].join(" ");
}

function toErrorLines(
  diagnostics: Diagnostic[],
  model: TextModel,
  fileName: string
): OutputLine[] {
  return diagnostics
    .filter((diagnostic) => diagnostic.category === ERROR_CATEGORY)
    .map((diagnostic) => {
      const { lineNumber, column } = model.getPositionAt(diagnostic.start ?? 0);
      return {
        stream: "stderr",
        text: `${fileName}(${lineNumber},${column}): error TS${diagnostic.code}: ${flattenMessage(diagnostic.messageText)}`,
      };
    });
}

async function getWorker(
  monaco: Monaco,
  model: TextModel,
  language: BrowserLanguage
) {
  const { typescript } = monaco.languages;
  const getClient =
    language === "typescript"
      ? await typescript.getTypeScriptWorker()
      : await typescript.getJavaScriptWorker();
  return getClient(model.uri);
}

/**
 * Prepares browser-run code with Monaco's bundled TypeScript service:
 * JavaScript is syntax-checked, TypeScript is type-checked and compiled.
 * Errors abort the run with `tsc`-style messages, like a real toolchain.
 */
export async function compileForBrowser(
  monaco: Monaco,
  model: TextModel,
  fileName: string,
  language: BrowserLanguage
): Promise<CompileResult> {
  const client = await getWorker(monaco, model, language);
  const uri = model.uri.toString();

  if (language === "javascript") {
    const errors = toErrorLines(
      await client.getSyntacticDiagnostics(uri),
      model,
      fileName
    );
    return errors.length ? { errors } : { code: model.getValue() };
  }

  const [syntactic, semantic] = await Promise.all([
    client.getSyntacticDiagnostics(uri),
    client.getSemanticDiagnostics(uri),
  ]);
  const errors = toErrorLines([...syntactic, ...semantic], model, fileName);
  if (errors.length) return { errors };

  const { outputFiles } = await client.getEmitOutput(uri);
  const output = outputFiles.find(({ name }) => name.endsWith(".js"));
  return { code: output?.text ?? "" };
}
