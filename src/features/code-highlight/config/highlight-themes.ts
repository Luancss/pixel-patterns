import * as codeBlock from "@react-email/code-block";
import type { Theme } from "@react-email/code-block";

type ThemeAppearance = "dark" | "light";

type HighlightThemeDefinition = {
  label: string;
  appearance: ThemeAppearance;
  background?: string;
  foreground?: string;
};

const HIGHLIGHT_THEME_DEFINITIONS = {
  a11yDark: { label: "A11y Dark", appearance: "dark" },
  atomDark: { label: "Atom Dark", appearance: "dark" },
  baseAteliersulphurpoolLight: {
    label: "Atelier Sulphurpool",
    appearance: "light",
  },
  coldarkCold: { label: "Coldark Cold", appearance: "light" },
  coldarkDark: { label: "Coldark Dark", appearance: "dark" },
  coyWithoutShadows: {
    label: "Coy",
    appearance: "light",
    background: "#fdfdfd",
  },
  darcula: { label: "Darcula", appearance: "dark" },
  dracula: { label: "Dracula", appearance: "dark" },
  duotoneDark: { label: "Duotone Dark", appearance: "dark" },
  duotoneEarth: { label: "Duotone Earth", appearance: "dark" },
  duotoneForest: { label: "Duotone Forest", appearance: "dark" },
  duotoneLight: { label: "Duotone Light", appearance: "light" },
  duotoneSea: { label: "Duotone Sea", appearance: "dark" },
  duotoneSpace: { label: "Duotone Space", appearance: "dark" },
  ghcolors: { label: "GitHub", appearance: "light" },
  gruvboxDark: { label: "Gruvbox Dark", appearance: "dark" },
  gruvboxLight: { label: "Gruvbox Light", appearance: "light" },
  holiTheme: {
    label: "Holi",
    appearance: "dark",
    background: "#030314",
    foreground: "#d6e7ff",
  },
  hopscotch: { label: "Hopscotch", appearance: "dark" },
  laserwave: { label: "Laserwave", appearance: "dark" },
  lucario: { label: "Lucario", appearance: "dark" },
  materialDark: { label: "Material Dark", appearance: "dark" },
  materialLight: { label: "Material Light", appearance: "light" },
  materialOceanic: { label: "Material Oceanic", appearance: "dark" },
  nightOwl: { label: "Night Owl", appearance: "dark" },
  nord: { label: "Nord", appearance: "dark" },
  oneDark: { label: "One Dark", appearance: "dark" },
  oneLight: { label: "One Light", appearance: "light" },
  pojoaque: { label: "Pojoaque", appearance: "dark", background: "#181914" },
  shadesOfPurple: {
    label: "Shades of Purple",
    appearance: "dark",
    background: "#2d2b55",
    foreground: "#9efeff",
  },
  solarizedDarkAtom: { label: "Solarized Dark", appearance: "dark" },
  synthwave84: {
    label: "Synthwave '84",
    appearance: "dark",
    background: "#2a2139",
  },
  vs: { label: "Visual Studio", appearance: "light" },
  vscDarkPlus: { label: "VS Code Dark+", appearance: "dark" },
  xonokai: { label: "Xonokai", appearance: "dark" },
  zTouch: { label: "Z-Touch", appearance: "dark" },
} satisfies Record<string, HighlightThemeDefinition>;

export type HighlightThemeName = keyof typeof HIGHLIGHT_THEME_DEFINITIONS;

export type HighlightTheme = {
  name: HighlightThemeName;
  label: string;
  appearance: ThemeAppearance;
  background: string;
  foreground: string;
  accents: string[];
  tokens: Theme;
};

export const DEFAULT_HIGHLIGHT_THEME: HighlightThemeName = "shadesOfPurple";

function getColor(style: Theme[string] | undefined) {
  return typeof style?.color === "string" ? style.color : undefined;
}

function getBackground(style: Theme[string] | undefined) {
  const value = style?.background ?? style?.backgroundColor;
  return typeof value === "string" &&
    value !== "none" &&
    !value.includes("url(")
    ? value
    : undefined;
}

function toHighlightTheme(name: HighlightThemeName): HighlightTheme {
  const definition: HighlightThemeDefinition =
    HIGHLIGHT_THEME_DEFINITIONS[name];
  const tokens: Theme = codeBlock[name];
  const fallbackForeground =
    definition.appearance === "dark" ? "#f8f8f2" : "#24292e";
  const foreground =
    definition.foreground ?? getColor(tokens.base) ?? fallbackForeground;

  return {
    name,
    label: definition.label,
    appearance: definition.appearance,
    background:
      definition.background ??
      getBackground(tokens.base) ??
      (definition.appearance === "dark" ? "#1e1e1e" : "#ffffff"),
    foreground,
    accents: [tokens.tag, tokens["attr-value"], tokens.selector].map(
      (style) => getColor(style) ?? foreground
    ),
    tokens,
  };
}

export const HIGHLIGHT_THEMES = (
  Object.keys(HIGHLIGHT_THEME_DEFINITIONS) as HighlightThemeName[]
).map(toHighlightTheme);

export const HIGHLIGHT_THEME_GROUPS: {
  appearance: ThemeAppearance;
  label: string;
  themes: HighlightTheme[];
}[] = [
  {
    appearance: "dark",
    label: "Dark themes",
    themes: HIGHLIGHT_THEMES.filter((theme) => theme.appearance === "dark"),
  },
  {
    appearance: "light",
    label: "Light themes",
    themes: HIGHLIGHT_THEMES.filter((theme) => theme.appearance === "light"),
  },
];

export function isHighlightThemeName(
  value: unknown
): value is HighlightThemeName {
  return typeof value === "string" && value in HIGHLIGHT_THEME_DEFINITIONS;
}

export function getHighlightTheme(name: HighlightThemeName): HighlightTheme {
  return (
    HIGHLIGHT_THEMES.find((theme) => theme.name === name) ??
    toHighlightTheme(DEFAULT_HIGHLIGHT_THEME)
  );
}
