import * as codeBlock from "@react-email/code-block";
import type { Theme } from "@react-email/code-block";

export const HIGHLIGHT_THEME_NAMES = [
  "a11yDark",
  "atomDark",
  "baseAteliersulphurpoolLight",
  "coldarkCold",
  "coldarkDark",
  "coyWithoutShadows",
  "darcula",
  "dracula",
  "duotoneDark",
  "duotoneEarth",
  "duotoneForest",
  "duotoneLight",
  "duotoneSea",
  "duotoneSpace",
  "ghcolors",
  "gruvboxDark",
  "gruvboxLight",
  "holiTheme",
  "hopscotch",
  "laserwave",
  "lucario",
  "materialDark",
  "materialLight",
  "materialOceanic",
  "nightOwl",
  "nord",
  "oneDark",
  "oneLight",
  "pojoaque",
  "shadesOfPurple",
  "solarizedDarkAtom",
  "synthwave84",
  "vs",
  "vscDarkPlus",
  "xonokai",
  "zTouch",
] as const;

export type HighlightThemeName = (typeof HIGHLIGHT_THEME_NAMES)[number];

export const DEFAULT_HIGHLIGHT_THEME: HighlightThemeName = "shadesOfPurple";

export function getHighlightTheme(name: HighlightThemeName): Theme {
  return codeBlock[name];
}
