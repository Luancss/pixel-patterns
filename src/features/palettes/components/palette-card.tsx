import { Moon, Sun } from "lucide-react";

import { ColorSwatch } from "@/features/palettes/components/color-swatch";
import { PaletteExport } from "@/features/palettes/components/palette-export";
import { PalettePreview } from "@/features/palettes/components/palette-preview";
import { PALETTE_ROLES } from "@/features/palettes/config/palette-config";
import type { Palette } from "@/features/palettes/types";
import { contrastRatio, getContrastLevel } from "@/lib/color";
import { cn } from "@/lib/utils";

function ContrastBadge({
  label,
  foreground,
  background,
}: {
  label: string;
  foreground: string;
  background: string;
}) {
  const ratio = contrastRatio(foreground, background);
  const level = getContrastLevel(ratio);

  return (
    <span
      title={`${label} contrast ${ratio.toFixed(2)}:1`}
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium ring-1 ring-inset",
        level === "Fail"
          ? "bg-red-500/10 text-red-300 ring-red-500/20"
          : "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20"
      )}
    >
      {label} {level}
      <span className="tabular-nums opacity-70">{ratio.toFixed(1)}</span>
    </span>
  );
}

export function PaletteCard({ palette }: { palette: Palette }) {
  const { colors } = palette;
  const AppearanceIcon = palette.appearance === "dark" ? Moon : Sun;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c12]/90 shadow-2xl shadow-black/40">
      <div className="flex overflow-hidden">
        {PALETTE_ROLES.map(({ role, label }) => (
          <ColorSwatch key={role} label={label} hex={colors[role]} />
        ))}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-semibold text-white">{palette.name}</h3>
            <p className="mt-0.5 text-sm text-zinc-400">
              {palette.description}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-[11px] capitalize text-zinc-400 ring-1 ring-inset ring-white/10">
            <AppearanceIcon className="size-3" />
            {palette.appearance}
          </span>
        </header>

        <PalettePreview palette={palette} />

        <footer className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            <ContrastBadge
              label="Text"
              foreground={colors.text}
              background={colors.background}
            />
            <ContrastBadge
              label="Muted"
              foreground={colors.muted}
              background={colors.background}
            />
          </div>
          <PaletteExport palette={palette} />
        </footer>
      </div>
    </article>
  );
}
