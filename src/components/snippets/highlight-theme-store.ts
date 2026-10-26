import { create } from "zustand";

import {
  DEFAULT_HIGHLIGHT_THEME,
  type HighlightThemeName,
} from "@/components/snippets/highlight-themes";

type HighlightThemeStore = {
  themeName: HighlightThemeName;
  setThemeName: (themeName: HighlightThemeName) => void;
};

export const useHighlightThemeStore = create<HighlightThemeStore>((set) => ({
  themeName: DEFAULT_HIGHLIGHT_THEME,
  setThemeName: (themeName) => set({ themeName }),
}));
