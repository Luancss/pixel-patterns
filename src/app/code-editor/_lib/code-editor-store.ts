import { create } from "zustand";

import { DEFAULT_EDITOR_THEME } from "@/app/code-editor/_lib/editor-themes";
import {
  DEFAULT_LANGUAGE_ID,
  isLanguageId,
  type LanguageId,
  LANGUAGES,
} from "@/app/code-editor/_lib/languages";
import type {
  CodeEditorInstance,
  Language,
  PistonResponse,
} from "@/app/code-editor/_lib/types";

const PISTON_EXECUTE_URL = "https://emkc.org/api/v2/piston/execute";
const DEFAULT_FONT_SIZE = 16;
export const MIN_FONT_SIZE = 12;
export const MAX_FONT_SIZE = 24;

const STORAGE_KEYS = {
  language: "editor-language",
  theme: "editor-theme",
  fontSize: "editor-font-size",
  code: (language: LanguageId) => `editor-code-${language}`,
};

type CodeEditorState = {
  language: LanguageId;
  theme: string;
  fontSize: number;
  output: string;
  error: string | null;
  isRunning: boolean;
  editor: CodeEditorInstance | null;
  getCode: () => string;
  getSavedCode: (language: LanguageId) => string | null;
  setEditor: (editor: CodeEditorInstance) => void;
  setLanguage: (language: LanguageId) => void;
  setTheme: (theme: string) => void;
  setFontSize: (fontSize: number) => void;
  saveCode: (code: string) => void;
  resetCode: () => void;
  runCode: () => Promise<void>;
};

function getStoredPreferences() {
  if (typeof window === "undefined") {
    return {
      language: DEFAULT_LANGUAGE_ID,
      theme: DEFAULT_EDITOR_THEME,
      fontSize: DEFAULT_FONT_SIZE,
    };
  }

  const storedLanguage = localStorage.getItem(STORAGE_KEYS.language);

  return {
    language: isLanguageId(storedLanguage)
      ? storedLanguage
      : DEFAULT_LANGUAGE_ID,
    theme: localStorage.getItem(STORAGE_KEYS.theme) || DEFAULT_EDITOR_THEME,
    fontSize: Number(
      localStorage.getItem(STORAGE_KEYS.fontSize) || DEFAULT_FONT_SIZE
    ),
  };
}

async function executeCode(language: Language, code: string) {
  const response = await fetch(PISTON_EXECUTE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      language: language.pistonRuntime.language,
      version: language.pistonRuntime.version,
      files: [{ content: code }],
    }),
  });

  return (await response.json()) as PistonResponse;
}

function getExecutionError({ message, compile, run }: PistonResponse) {
  if (message) return message;
  if (compile && compile.code !== 0) return compile.stderr || compile.output;
  if (run && run.code !== 0) return run.stderr || run.output;
  return null;
}

export const useCodeEditorStore = create<CodeEditorState>((set, get) => ({
  ...getStoredPreferences(),
  output: "",
  error: null,
  isRunning: false,
  editor: null,

  getCode: () => get().editor?.getValue() || "",

  getSavedCode: (language) => localStorage.getItem(STORAGE_KEYS.code(language)),

  setEditor: (editor) => set({ editor }),

  setLanguage: (language) => {
    const currentCode = get().editor?.getValue();
    if (currentCode) {
      localStorage.setItem(STORAGE_KEYS.code(get().language), currentCode);
    }

    localStorage.setItem(STORAGE_KEYS.language, language);
    set({ language, output: "", error: null });
  },

  setTheme: (theme) => {
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    set({ theme });
  },

  setFontSize: (fontSize) => {
    const size = Math.min(Math.max(fontSize, MIN_FONT_SIZE), MAX_FONT_SIZE);
    localStorage.setItem(STORAGE_KEYS.fontSize, size.toString());
    set({ fontSize: size });
  },

  saveCode: (code) => {
    localStorage.setItem(STORAGE_KEYS.code(get().language), code);
  },

  resetCode: () => {
    const { editor, language } = get();
    editor?.setValue(LANGUAGES[language].defaultCode);
    localStorage.removeItem(STORAGE_KEYS.code(language));
  },

  runCode: async () => {
    const { language, getCode } = get();
    const code = getCode();

    if (!code) {
      set({ error: "Please enter some code" });
      return;
    }

    set({ isRunning: true, error: null, output: "" });

    try {
      const result = await executeCode(LANGUAGES[language], code);
      const error = getExecutionError(result);

      if (error !== null) {
        set({ error });
        return;
      }

      if (!result.run) throw new Error("Missing run result");

      set({ output: result.run.output.trim(), error: null });
    } catch {
      set({ error: "Error running code" });
    } finally {
      set({ isRunning: false });
    }
  },
}));
