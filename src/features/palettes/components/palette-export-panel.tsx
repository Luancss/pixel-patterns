"use client";

import { useState } from "react";

import { CopyTextButton } from "@/components/ui/copy-text-button";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import { CodeView } from "@/features/code-highlight/components/code-view";
import { getHighlightTheme } from "@/features/code-highlight/config/highlight-themes";
import {
  exportPalette,
  type PaletteExportFormat,
} from "@/features/palettes/lib/export-palette";
import type { Palette } from "@/features/palettes/types";

const FORMAT_OPTIONS: SegmentedControlOption<PaletteExportFormat>[] = [
  { value: "css", label: "CSS" },
  { value: "tailwind", label: "Tailwind" },
  { value: "json", label: "JSON" },
];

const FORMAT_LANGUAGES = {
  css: "css",
  tailwind: "javascript",
  json: "json",
} as const;

const EXPORT_THEME = getHighlightTheme("holiTheme");

/** Loaded on demand: it pulls in the syntax highlighter. */
export function PaletteExportPanel({ palette }: { palette: Palette }) {
  const [format, setFormat] = useState<PaletteExportFormat>("css");
  const code = exportPalette(palette, format);

  return (
    <>
      <div className="flex items-center gap-2 border-b border-white/10 p-2">
        <SegmentedControl
          label="Export format"
          options={FORMAT_OPTIONS}
          value={format}
          onValueChange={setFormat}
        />
        <CopyTextButton
          text={code}
          successMessage="Palette copied!"
          className="ml-auto"
        />
      </div>
      <CodeView
        code={code}
        language={FORMAT_LANGUAGES[format]}
        theme={EXPORT_THEME}
        className="max-h-72 rounded-b-md"
      />
    </>
  );
}
