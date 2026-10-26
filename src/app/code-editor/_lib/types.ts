import type { Monaco, OnMount } from "@monaco-editor/react";

type LanguageRuntime = {
  language: string;
  version: string;
};

export type Language = {
  id: string;
  label: string;
  logoPath?: string;
  monacoLanguage: string;
  defaultCode: string;
  pistonRuntime: LanguageRuntime;
};

export type EditorTheme = {
  id: string;
  label: string;
  color: string;
};

export type MonacoThemeData = Parameters<Monaco["editor"]["defineTheme"]>[1];

export type CodeEditorInstance = Parameters<OnMount>[0];

type PistonStageResult = {
  code: number;
  stderr: string;
  output: string;
};

export type PistonResponse = {
  message?: string;
  compile?: PistonStageResult;
  run?: PistonStageResult;
};
