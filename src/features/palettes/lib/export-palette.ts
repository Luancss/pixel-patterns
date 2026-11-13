import type { CSSProperties } from "react";

import { PALETTE_ROLES } from "@/features/palettes/config/palette-config";
import type { Palette } from "@/features/palettes/types";

export type PaletteExportFormat = "css" | "tailwind" | "json";

/** Inline CSS variables (`--palette-<role>`) to theme any subtree. */
export function toPaletteStyle(palette: Palette) {
  return Object.fromEntries(
    PALETTE_ROLES.map(({ role }) => [`--palette-${role}`, palette.colors[role]])
  ) as CSSProperties;
}

function toCssVariables(palette: Palette) {
  const lines = PALETTE_ROLES.map(
    ({ role }) => `  --color-${role}: ${palette.colors[role]};`
  );
  return `/* ${palette.name} */\n:root {\n${lines.join("\n")}\n}`;
}

function toTailwindConfig(palette: Palette) {
  const lines = PALETTE_ROLES.map(
    ({ role }) => `        ${role}: "${palette.colors[role]}",`
  );
  return `// tailwind.config.ts — ${palette.name}\nexport default {\n  theme: {\n    extend: {\n      colors: {\n${lines.join("\n")}\n      },\n    },\n  },\n};`;
}

export function exportPalette(palette: Palette, format: PaletteExportFormat) {
  switch (format) {
    case "css":
      return toCssVariables(palette);
    case "tailwind":
      return toTailwindConfig(palette);
    case "json":
      return JSON.stringify(
        {
          name: palette.name,
          appearance: palette.appearance,
          ...palette.colors,
        },
        null,
        2
      );
  }
}
