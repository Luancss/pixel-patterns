import type { Monaco } from "@monaco-editor/react";

import type {
  EditorTheme,
  MonacoThemeData,
  ThemeAppearance,
} from "@/features/code-editor/types";

export const DEFAULT_EDITOR_THEME = "pixel-night";

export const EDITOR_THEMES: EditorTheme[] = [
  {
    id: "pixel-night",
    label: "Pixel Night",
    appearance: "dark",
    counterpart: "github-light",
    background: "#0b0b14",
    accents: ["#c792ea", "#c3e88d", "#82aaff"],
  },
  {
    id: "vs-dark",
    label: "VS Dark",
    appearance: "dark",
    counterpart: "vs-light",
    background: "#1e1e1e",
    accents: ["#569cd6", "#ce9178", "#4ec9b0"],
  },
  {
    id: "github-dark",
    label: "GitHub Dark",
    appearance: "dark",
    counterpart: "github-light",
    background: "#0d1117",
    accents: ["#ff7b72", "#a5d6ff", "#d2a8ff"],
  },
  {
    id: "monokai",
    label: "Monokai",
    appearance: "dark",
    counterpart: "vs-light",
    background: "#272822",
    accents: ["#f92672", "#e6db74", "#a6e22e"],
  },
  {
    id: "solarized-dark",
    label: "Solarized Dark",
    appearance: "dark",
    counterpart: "solarized-light",
    background: "#002b36",
    accents: ["#859900", "#2aa198", "#268bd2"],
  },
  {
    id: "vs-light",
    label: "VS Light",
    appearance: "light",
    counterpart: "vs-dark",
    background: "#ffffff",
    accents: ["#0000ff", "#a31515", "#267f99"],
  },
  {
    id: "github-light",
    label: "GitHub Light",
    appearance: "light",
    counterpart: "github-dark",
    background: "#ffffff",
    accents: ["#cf222e", "#0a3069", "#8250df"],
  },
  {
    id: "solarized-light",
    label: "Solarized Light",
    appearance: "light",
    counterpart: "solarized-dark",
    background: "#fdf6e3",
    accents: ["#859900", "#2aa198", "#268bd2"],
  },
];

export const EDITOR_THEME_GROUPS: {
  appearance: ThemeAppearance;
  label: string;
  themes: EditorTheme[];
}[] = [
  {
    appearance: "dark",
    label: "Dark themes",
    themes: EDITOR_THEMES.filter((theme) => theme.appearance === "dark"),
  },
  {
    appearance: "light",
    label: "Light themes",
    themes: EDITOR_THEMES.filter((theme) => theme.appearance === "light"),
  },
];

export function isEditorThemeId(value: string | null): value is string {
  return EDITOR_THEMES.some((theme) => theme.id === value);
}

export function getEditorTheme(id: string) {
  return (
    EDITOR_THEMES.find((theme) => theme.id === id) ??
    (EDITOR_THEMES[0] as EditorTheme)
  );
}

const CUSTOM_THEME_DEFINITIONS: Record<string, MonacoThemeData> = {
  "pixel-night": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "5c6370", fontStyle: "italic" },
      { token: "string", foreground: "c3e88d" },
      { token: "keyword", foreground: "c792ea" },
      { token: "number", foreground: "f78c6c" },
      { token: "type", foreground: "ffcb6b" },
      { token: "class", foreground: "ffcb6b" },
      { token: "function", foreground: "82aaff" },
      { token: "variable", foreground: "eeffff" },
      { token: "operator", foreground: "89ddff" },
      { token: "delimiter", foreground: "89ddff" },
      { token: "tag", foreground: "f07178" },
      { token: "attribute.name", foreground: "c792ea" },
      { token: "attribute.value", foreground: "c3e88d" },
    ],
    colors: {
      "editor.background": "#0b0b14",
      "editor.foreground": "#d6deeb",
      "editor.lineHighlightBackground": "#14142a",
      "editor.lineHighlightBorder": "#00000000",
      "editorLineNumber.foreground": "#3b3f5c",
      "editorLineNumber.activeForeground": "#a5b4fc",
      "editorCursor.foreground": "#818cf8",
      "editor.selectionBackground": "#3b4a8a80",
      "editor.inactiveSelectionBackground": "#3b4a8a40",
      "editorIndentGuide.background1": "#1c1c33",
      "editorIndentGuide.activeBackground1": "#3b3f5c",
      "editorGutter.background": "#0b0b14",
      "editorWidget.background": "#101018",
      "editorWidget.border": "#ffffff1a",
      "editorSuggestWidget.background": "#101018",
      "editorSuggestWidget.border": "#ffffff1a",
      "editorSuggestWidget.selectedBackground": "#1e1e3a",
      "minimap.background": "#0b0b14",
      "scrollbarSlider.background": "#ffffff14",
      "scrollbarSlider.hoverBackground": "#ffffff24",
    },
  },
  "vs-light": {
    base: "vs",
    inherit: true,
    rules: [],
    colors: {},
  },
  "github-light": {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7781" },
      { token: "string", foreground: "0a3069" },
      { token: "keyword", foreground: "cf222e" },
      { token: "number", foreground: "0550ae" },
      { token: "type", foreground: "953800" },
      { token: "class", foreground: "953800" },
      { token: "function", foreground: "8250df" },
      { token: "variable", foreground: "953800" },
      { token: "operator", foreground: "cf222e" },
    ],
    colors: {
      "editor.background": "#ffffff",
      "editor.foreground": "#1f2328",
      "editor.lineHighlightBackground": "#f6f8fa",
      "editorLineNumber.foreground": "#8c959f",
      "editorLineNumber.activeForeground": "#1f2328",
      "editor.selectionBackground": "#0969da33",
      "editorIndentGuide.background1": "#eaeef2",
    },
  },
  "solarized-light": {
    base: "vs",
    inherit: true,
    rules: [
      { token: "comment", foreground: "93a1a1", fontStyle: "italic" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#fdf6e3",
      "editor.foreground": "#657b83",
      "editor.lineHighlightBackground": "#eee8d5",
      "editorLineNumber.foreground": "#93a1a1",
      "editor.selectionBackground": "#eee8d5",
      "editorCursor.foreground": "#657b83",
    },
  },
  "github-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "6e7681" },
      { token: "string", foreground: "a5d6ff" },
      { token: "keyword", foreground: "ff7b72" },
      { token: "number", foreground: "79c0ff" },
      { token: "type", foreground: "ffa657" },
      { token: "class", foreground: "ffa657" },
      { token: "function", foreground: "d2a8ff" },
      { token: "variable", foreground: "ffa657" },
      { token: "operator", foreground: "ff7b72" },
    ],
    colors: {
      "editor.background": "#0d1117",
      "editor.foreground": "#c9d1d9",
      "editor.lineHighlightBackground": "#161b22",
      "editorLineNumber.foreground": "#6e7681",
      "editorIndentGuide.background": "#21262d",
      "editor.selectionBackground": "#264f78",
      "editor.inactiveSelectionBackground": "#264f7855",
    },
  },
  monokai: {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "75715E" },
      { token: "string", foreground: "E6DB74" },
      { token: "keyword", foreground: "F92672" },
      { token: "number", foreground: "AE81FF" },
      { token: "type", foreground: "66D9EF" },
      { token: "class", foreground: "A6E22E" },
      { token: "function", foreground: "A6E22E" },
      { token: "variable", foreground: "F8F8F2" },
      { token: "operator", foreground: "F92672" },
    ],
    colors: {
      "editor.background": "#272822",
      "editor.foreground": "#F8F8F2",
      "editorLineNumber.foreground": "#75715E",
      "editor.selectionBackground": "#49483E",
      "editor.lineHighlightBackground": "#3E3D32",
      "editorCursor.foreground": "#F8F8F2",
      "editor.selectionHighlightBackground": "#49483E",
    },
  },
  "solarized-dark": {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "comment", foreground: "586e75" },
      { token: "string", foreground: "2aa198" },
      { token: "keyword", foreground: "859900" },
      { token: "number", foreground: "d33682" },
      { token: "type", foreground: "b58900" },
      { token: "class", foreground: "b58900" },
      { token: "function", foreground: "268bd2" },
      { token: "variable", foreground: "b58900" },
      { token: "operator", foreground: "859900" },
    ],
    colors: {
      "editor.background": "#002b36",
      "editor.foreground": "#839496",
      "editorLineNumber.foreground": "#586e75",
      "editor.selectionBackground": "#073642",
      "editor.lineHighlightBackground": "#073642",
      "editorCursor.foreground": "#839496",
      "editor.selectionHighlightBackground": "#073642",
    },
  },
};

export function defineMonacoThemes(monaco: Monaco) {
  Object.entries(CUSTOM_THEME_DEFINITIONS).forEach(([name, theme]) =>
    monaco.editor.defineTheme(name, theme)
  );
}
