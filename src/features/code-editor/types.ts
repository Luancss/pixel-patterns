import type { Monaco, OnMount } from "@monaco-editor/react";

export type LanguageRuntime =
  /** Executed locally in a sandboxed Web Worker. */
  | { kind: "browser" }
  /** Executed remotely by a Piston instance. */
  | { kind: "piston"; language: string; version: string }
  /** Rendered live in the preview panel instead of being executed. */
  | { kind: "preview" };

export type Language = {
  id: string;
  label: string;
  logoPath?: string;
  fileName: string;
  monacoLanguage: string;
  defaultCode: string;
  runtime: LanguageRuntime;
};

export type ThemeAppearance = "dark" | "light";

export type EditorTheme = {
  id: string;
  label: string;
  appearance: ThemeAppearance;
  /** Theme the light/dark switch jumps to. */
  counterpart: string;
  background: string;
  accents: [string, string, string];
};

export type MonacoThemeData = Parameters<Monaco["editor"]["defineTheme"]>[1];

export type CodeEditorInstance = Parameters<OnMount>[0];

export type OutputStream = "stdout" | "stderr" | "system";

export type OutputLine = {
  stream: OutputStream;
  text: string;
};

export type RunOutcome = {
  exitCode: number | null;
  lines: OutputLine[];
  /** Extra guidance shown next to the output, e.g. how to fix a setup issue. */
  notice?: string;
};

export type ExecutionStatus = "success" | "error" | "cancelled";

export type ExecutionResult = RunOutcome & {
  status: ExecutionStatus;
  durationMs: number;
};
