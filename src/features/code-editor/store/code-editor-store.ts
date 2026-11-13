import type { Monaco } from "@monaco-editor/react";
import { create } from "zustand";

import {
  DEFAULT_EDITOR_THEME,
  getEditorTheme,
  isEditorThemeId,
} from "@/features/code-editor/config/editor-themes";
import { executeCode } from "@/features/code-editor/lib/execute-code";
import {
  DEFAULT_LANGUAGE_ID,
  HTML_LANGUAGE_ID,
  isLanguageId,
  type LanguageId,
  LANGUAGES,
} from "@/features/code-editor/config/languages";
import type {
  CodeEditorInstance,
  ExecutionResult,
} from "@/features/code-editor/types";

export const MIN_FONT_SIZE = 12;
export const MAX_FONT_SIZE = 24;
const DEFAULT_FONT_SIZE = 14;

export type EditorMode = "code" | "html";

const STORAGE_KEYS = {
  language: "editor-language",
  lastCodeLanguage: "editor-last-code-language",
  theme: "editor-theme",
  fontSize: "editor-font-size",
  wordWrap: "editor-word-wrap",
  minimap: "editor-minimap",
  code: (language: LanguageId) => `editor-code-${language}`,
};

function readStorage(key: string) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Storage can be full or blocked; the editor keeps working in memory.
  }
}

function readBoolean(key: string, fallback: boolean) {
  const value = readStorage(key);
  return value === null ? fallback : value === "true";
}

function clampFontSize(fontSize: number) {
  if (!Number.isFinite(fontSize)) return DEFAULT_FONT_SIZE;
  return Math.min(Math.max(Math.round(fontSize), MIN_FONT_SIZE), MAX_FONT_SIZE);
}

type CursorState = {
  line: number;
  column: number;
  selectedCharacters: number;
};

type CodeEditorState = {
  isHydrated: boolean;
  language: LanguageId;
  lastCodeLanguage: LanguageId;
  theme: string;
  fontSize: number;
  wordWrap: boolean;
  minimap: boolean;
  code: string;
  stdin: string;
  cursor: CursorState;
  isRunning: boolean;
  result: ExecutionResult | null;
  editor: CodeEditorInstance | null;
  monaco: Monaco | null;

  hydrate: () => void;
  getInitialCode: (language: LanguageId) => string;
  setEditor: (editor: CodeEditorInstance, monaco: Monaco) => void;
  setMode: (mode: EditorMode) => void;
  setLanguage: (language: LanguageId) => void;
  setTheme: (theme: string) => void;
  toggleThemeAppearance: () => void;
  setFontSize: (fontSize: number) => void;
  setWordWrap: (wordWrap: boolean) => void;
  setMinimap: (minimap: boolean) => void;
  setCode: (code: string, options?: { persist?: boolean }) => void;
  setStdin: (stdin: string) => void;
  setCursor: (cursor: CursorState) => void;
  resetCode: () => boolean;
  runCode: () => Promise<void>;
  cancelRun: () => void;
  clearOutput: () => void;
};

let activeRun: AbortController | null = null;
let activeRunStartedAt = 0;

export const useCodeEditorStore = create<CodeEditorState>((set, get) => ({
  isHydrated: false,
  language: DEFAULT_LANGUAGE_ID,
  lastCodeLanguage: DEFAULT_LANGUAGE_ID,
  theme: DEFAULT_EDITOR_THEME,
  fontSize: DEFAULT_FONT_SIZE,
  wordWrap: false,
  minimap: true,
  code: "",
  stdin: "",
  cursor: { line: 1, column: 1, selectedCharacters: 0 },
  isRunning: false,
  result: null,
  editor: null,
  monaco: null,

  hydrate: () => {
    if (get().isHydrated) return;

    const language = readStorage(STORAGE_KEYS.language);
    const lastCodeLanguage = readStorage(STORAGE_KEYS.lastCodeLanguage);
    const theme = readStorage(STORAGE_KEYS.theme);
    const fontSize = readStorage(STORAGE_KEYS.fontSize);

    const resolvedLanguage = isLanguageId(language)
      ? language
      : DEFAULT_LANGUAGE_ID;

    set({
      isHydrated: true,
      language: resolvedLanguage,
      lastCodeLanguage:
        isLanguageId(lastCodeLanguage) && lastCodeLanguage !== HTML_LANGUAGE_ID
          ? lastCodeLanguage
          : resolvedLanguage !== HTML_LANGUAGE_ID
            ? resolvedLanguage
            : DEFAULT_LANGUAGE_ID,
      theme: isEditorThemeId(theme) ? theme : DEFAULT_EDITOR_THEME,
      fontSize: fontSize ? clampFontSize(Number(fontSize)) : DEFAULT_FONT_SIZE,
      wordWrap: readBoolean(STORAGE_KEYS.wordWrap, false),
      minimap: readBoolean(STORAGE_KEYS.minimap, true),
    });
  },

  getInitialCode: (language) =>
    readStorage(STORAGE_KEYS.code(language)) ?? LANGUAGES[language].defaultCode,

  setEditor: (editor, monaco) =>
    set({ editor, monaco, code: editor.getValue() }),

  setMode: (mode) => {
    get().setLanguage(
      mode === "html" ? HTML_LANGUAGE_ID : get().lastCodeLanguage
    );
  },

  setLanguage: (language) => {
    if (language === get().language) return;

    get().cancelRun();
    writeStorage(STORAGE_KEYS.language, language);

    if (language !== HTML_LANGUAGE_ID) {
      writeStorage(STORAGE_KEYS.lastCodeLanguage, language);
      set({ lastCodeLanguage: language });
    }

    set({ language, code: get().getInitialCode(language), result: null });
  },

  setTheme: (theme) => {
    writeStorage(STORAGE_KEYS.theme, theme);
    set({ theme });
  },

  toggleThemeAppearance: () => {
    get().setTheme(getEditorTheme(get().theme).counterpart);
  },

  setFontSize: (fontSize) => {
    const size = clampFontSize(fontSize);
    writeStorage(STORAGE_KEYS.fontSize, String(size));
    set({ fontSize: size });
  },

  setWordWrap: (wordWrap) => {
    writeStorage(STORAGE_KEYS.wordWrap, String(wordWrap));
    set({ wordWrap });
  },

  setMinimap: (minimap) => {
    writeStorage(STORAGE_KEYS.minimap, String(minimap));
    set({ minimap });
  },

  setCode: (code, { persist = true } = {}) => {
    if (persist) writeStorage(STORAGE_KEYS.code(get().language), code);
    set({ code });
  },

  setStdin: (stdin) => set({ stdin }),

  setCursor: (cursor) => set({ cursor }),

  resetCode: () => {
    const { editor, language } = get();
    const model = editor?.getModel();
    if (!editor || !model) return false;

    // Applied as an edit (not setValue) so Ctrl+Z restores the previous code.
    editor.pushUndoStop();
    editor.executeEdits("reset-code", [
      {
        range: model.getFullModelRange(),
        text: LANGUAGES[language].defaultCode,
      },
    ]);
    editor.pushUndoStop();
    return true;
  },

  runCode: async () => {
    const { language, code, stdin, isRunning, editor, monaco } = get();
    const definition = LANGUAGES[language];
    if (isRunning || definition.runtime.kind === "preview") return;

    if (!code.trim()) {
      set({
        result: {
          status: "error",
          exitCode: null,
          durationMs: 0,
          lines: [
            {
              stream: "system",
              text: "Nothing to run yet. Write some code first.",
            },
          ],
        },
      });
      return;
    }

    const controller = new AbortController();
    activeRun = controller;
    activeRunStartedAt = performance.now();
    set({ isRunning: true, result: null });
    const elapsed = () => Math.round(performance.now() - activeRunStartedAt);

    try {
      const outcome = await executeCode({
        language: definition,
        code,
        stdin,
        signal: controller.signal,
        editor,
        monaco,
      });
      if (activeRun !== controller) return;

      set({
        result: {
          ...outcome,
          status: outcome.exitCode === 0 ? "success" : "error",
          durationMs: elapsed(),
        },
      });
    } catch (error) {
      // Cancelled runs are reported synchronously by `cancelRun`.
      if (activeRun !== controller) return;

      set({
        result: {
          status: "error",
          exitCode: null,
          durationMs: elapsed(),
          lines: [
            {
              stream: "stderr",
              text:
                error instanceof Error && error.message !== "Failed to fetch"
                  ? error.message
                  : "Could not reach the execution service. Check your connection and try again.",
            },
          ],
        },
      });
    } finally {
      if (activeRun === controller) {
        activeRun = null;
        set({ isRunning: false });
      }
    }
  },

  cancelRun: () => {
    const controller = activeRun;
    if (!controller) return;

    activeRun = null;
    controller.abort();
    set({
      isRunning: false,
      result: {
        status: "cancelled",
        exitCode: null,
        durationMs: Math.round(performance.now() - activeRunStartedAt),
        lines: [{ stream: "system", text: "Execution cancelled." }],
      },
    });
  },

  clearOutput: () => set({ result: null }),
}));
