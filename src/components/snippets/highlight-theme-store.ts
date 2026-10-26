import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import {
  DEFAULT_HIGHLIGHT_THEME,
  type HighlightThemeName,
  isHighlightThemeName,
} from "@/components/snippets/highlight-themes";

type HighlightThemeStore = {
  themeName: HighlightThemeName;
  setThemeName: (themeName: HighlightThemeName) => void;
};

export const useHighlightThemeStore = create<HighlightThemeStore>()(
  persist(
    (set) => ({
      themeName: DEFAULT_HIGHLIGHT_THEME,
      setThemeName: (themeName) => set({ themeName }),
    }),
    {
      name: "pixel-patterns:highlight-theme",
      storage: createJSONStorage(() => localStorage),
      partialize: ({ themeName }) => ({ themeName }),
      merge: (persisted, current) => {
        const themeName = (persisted as Partial<HighlightThemeStore>)
          ?.themeName;
        return isHighlightThemeName(themeName)
          ? { ...current, themeName }
          : current;
      },
    }
  )
);
