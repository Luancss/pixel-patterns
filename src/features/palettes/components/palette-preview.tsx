import { toPaletteStyle } from "@/features/palettes/lib/export-palette";
import type { Palette } from "@/features/palettes/types";
import { getReadableTextColor } from "@/lib/color";

/**
 * A miniature interface themed purely through the palette CSS variables,
 * showing how the roles combine in a real layout.
 */
export function PalettePreview({ palette }: { palette: Palette }) {
  return (
    <div
      aria-hidden="true"
      style={toPaletteStyle(palette)}
      className="rounded-lg bg-[var(--palette-background)] p-3"
    >
      <div className="rounded-md border border-[var(--palette-border)] bg-[var(--palette-surface)] p-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-[var(--palette-text)]">
            Monthly revenue
          </p>
          <span
            className="rounded-full bg-[var(--palette-accent)] px-2 py-0.5 text-[10px] font-semibold"
            style={{ color: getReadableTextColor(palette.colors.accent) }}
          >
            +12.4%
          </span>
        </div>
        <p className="mt-1 text-xs text-[var(--palette-muted)]">
          Updated a few minutes ago
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--palette-border)]">
          <div className="h-full w-2/3 rounded-full bg-[var(--palette-primary)]" />
        </div>
        <div className="mt-3 flex gap-2">
          <span
            className="rounded-md bg-[var(--palette-primary)] px-2.5 py-1 text-xs font-semibold"
            style={{ color: getReadableTextColor(palette.colors.primary) }}
          >
            View report
          </span>
          <span className="rounded-md border border-[var(--palette-border)] px-2.5 py-1 text-xs font-medium text-[var(--palette-text)]">
            Export
          </span>
        </div>
      </div>
    </div>
  );
}
