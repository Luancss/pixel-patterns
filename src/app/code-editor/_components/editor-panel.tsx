"use client";

import { Editor } from "@monaco-editor/react";
import { motion } from "framer-motion";
import { RotateCcwIcon, TypeIcon } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

import {
  MAX_FONT_SIZE,
  MIN_FONT_SIZE,
  useCodeEditorStore,
} from "@/app/code-editor/_lib/code-editor-store";
import { defineMonacoThemes } from "@/app/code-editor/_lib/editor-themes";
import { LANGUAGES } from "@/app/code-editor/_lib/languages";

const EDITOR_OPTIONS = {
  minimap: { enabled: true },
  automaticLayout: true,
  scrollBeyondLastLine: false,
  padding: { top: 16, bottom: 16 },
  renderWhitespace: "selection",
  fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
  fontLigatures: true,
  cursorBlinking: "smooth",
  smoothScrolling: true,
  contextmenu: true,
  renderLineHighlight: "all",
  lineHeight: 1.6,
  letterSpacing: 0.5,
  roundedSelection: true,
  "semanticHighlighting.enabled": true,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
  },
} as const;

export function EditorPanel() {
  const {
    language,
    theme,
    fontSize,
    editor,
    getSavedCode,
    setEditor,
    setFontSize,
    saveCode,
    resetCode,
  } = useCodeEditorStore();

  useEffect(() => {
    editor?.setValue(getSavedCode(language) || LANGUAGES[language].defaultCode);
  }, [language, editor, getSavedCode]);

  return (
    <div className="relative">
      <div className="relative bg-[#060611]/90 backdrop-blur rounded-xl border border-blue-800/30 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
              <Image src="/code.svg" alt="Code" width={24} height={24} />
            </div>
            <div>
              <h2 className="text-sm font-medium text-white">Code Editor</h2>
              <p className="text-xs text-gray-500">
                Write and execute your code
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 px-3 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-white/5">
              <TypeIcon className="size-4 text-gray-400" />
              <div className="flex items-center gap-3">
                <input
                  title="Font Size"
                  type="range"
                  min={MIN_FONT_SIZE}
                  max={MAX_FONT_SIZE}
                  value={fontSize}
                  onChange={(event) =>
                    setFontSize(parseInt(event.target.value))
                  }
                  className="w-20 h-1 bg-gray-600 rounded-lg cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-400 min-w-[2rem] text-center">
                  {fontSize}
                </span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={resetCode}
              className="p-2 bg-[#1e1e2e] hover:bg-[#2a2a3a] rounded-lg ring-1 ring-white/5 transition-colors"
              aria-label="Reset to default code"
            >
              <RotateCcwIcon className="size-4 text-gray-400" />
            </motion.button>
          </div>
        </div>

        <div className="relative group rounded-xl overflow-hidden ring-1 ring-white/[0.05]">
          <Editor
            height="600px"
            language={LANGUAGES[language].monacoLanguage}
            onChange={(value) => value && saveCode(value)}
            theme={theme}
            beforeMount={defineMonacoThemes}
            onMount={setEditor}
            options={{ ...EDITOR_OPTIONS, fontSize }}
          />
        </div>
      </div>
    </div>
  );
}
