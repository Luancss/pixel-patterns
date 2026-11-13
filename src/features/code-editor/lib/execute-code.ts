import type { Monaco } from "@monaco-editor/react";

import { runInBrowser } from "@/features/code-editor/lib/runners/browser-runner";
import {
  type BrowserLanguage,
  compileForBrowser,
} from "@/features/code-editor/lib/runners/compile";
import { runOnPiston } from "@/features/code-editor/lib/runners/piston-runner";
import type {
  CodeEditorInstance,
  Language,
  RunOutcome,
} from "@/features/code-editor/types";

type ExecuteCodeRequest = {
  language: Language;
  code: string;
  stdin: string;
  signal: AbortSignal;
  editor: CodeEditorInstance | null;
  monaco: Monaco | null;
};

async function runLocally({
  language,
  stdin,
  signal,
  editor,
  monaco,
}: ExecuteCodeRequest): Promise<RunOutcome> {
  const model = editor?.getModel();
  if (!monaco || !model) throw new Error("The editor is still loading.");

  const compiled = await compileForBrowser(
    monaco,
    model,
    language.fileName,
    language.monacoLanguage as BrowserLanguage
  );
  if ("errors" in compiled) return { exitCode: 2, lines: compiled.errors };

  return runInBrowser({
    code: compiled.code,
    // Stack traces point at the emitted JavaScript, so name it as such.
    fileName: language.fileName.replace(/\.ts$/, ".js"),
    stdin,
    signal,
  });
}

export async function executeCode(
  request: ExecuteCodeRequest
): Promise<RunOutcome> {
  const { language, code, stdin, signal } = request;
  const { runtime } = language;

  switch (runtime.kind) {
    case "browser":
      return runLocally(request);
    case "piston":
      return runOnPiston({
        runtime,
        fileName: language.fileName,
        code,
        stdin,
        signal,
      });
    case "preview":
      throw new Error(`${language.label} is rendered in the preview panel.`);
  }
}
