import type { Monaco } from "@monaco-editor/react";
import { JetBrains_Mono } from "next/font/google";

import { defineMonacoThemes } from "@/features/code-editor/config/editor-themes";

export const editorFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const EDITOR_FONT_FAMILY = `${editorFont.style.fontFamily}, "Fira Code", Menlo, Consolas, monospace`;

export const EDITOR_OPTIONS = {
  automaticLayout: true,
  scrollBeyondLastLine: false,
  fixedOverflowWidgets: true,
  padding: { top: 14, bottom: 14 },
  renderWhitespace: "selection",
  fontFamily: EDITOR_FONT_FAMILY,
  fontLigatures: true,
  cursorBlinking: "smooth",
  cursorSmoothCaretAnimation: "on",
  smoothScrolling: true,
  contextmenu: true,
  renderLineHighlight: "all",
  lineHeight: 1.65,
  letterSpacing: 0.2,
  roundedSelection: true,
  stickyScroll: { enabled: true },
  bracketPairColorization: { enabled: true },
  guides: { bracketPairs: "active", indentation: true },
  "semanticHighlighting.enabled": true,
  scrollbar: {
    verticalScrollbarSize: 8,
    horizontalScrollbarSize: 8,
    useShadows: false,
  },
} as const;

export function configureMonaco(monaco: Monaco) {
  defineMonacoThemes(monaco);

  const { typescriptDefaults, ScriptTarget } = monaco.languages.typescript;
  typescriptDefaults.setCompilerOptions({
    ...typescriptDefaults.getCompilerOptions(),
    target: ScriptTarget.ES2020,
  });
}

/** Monaco measures glyphs once; re-measure after the web font arrives. */
export function remeasureWhenFontLoads(monaco: Monaco) {
  if (!("fonts" in document)) return;
  document.fonts
    .load(`14px ${editorFont.style.fontFamily}`)
    .then(() => monaco.editor.remeasureFonts())
    .catch(() => undefined);
}
