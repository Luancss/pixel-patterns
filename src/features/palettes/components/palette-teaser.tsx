import { Palette as PaletteIcon } from "lucide-react";

import { ShowcaseCard } from "@/components/ui/showcase-card";
import { PALETTE_ROLES } from "@/features/palettes/config/palette-config";
import { getPalette, PALETTES } from "@/features/palettes/data/palettes";
import type { Palette } from "@/features/palettes/types";

const FEATURED_PALETTE_IDS = ["midnight-saas", "synthwave", "desert-sand"];

const FEATURED_PALETTES = FEATURED_PALETTE_IDS.map(getPalette).filter(
  (palette): palette is Palette => palette !== undefined
);

export function PaletteTeaser() {
  return (
    <ShowcaseCard
      href="/palettes"
      icon={PaletteIcon}
      title="Color Palettes"
      description={`${PALETTES.length} accessible palettes for dark and light themes, exportable as CSS, Tailwind or JSON.`}
      cta="Browse palettes"
    >
      <ul className="space-y-2">
        {FEATURED_PALETTES.map((palette) => (
          <li key={palette.id} className="flex items-center gap-3">
            <span className="flex h-6 flex-1 overflow-hidden rounded-md ring-1 ring-white/10">
              {PALETTE_ROLES.map(({ role }) => (
                <span
                  key={role}
                  className="flex-1"
                  style={{ background: palette.colors[role] }}
                />
              ))}
            </span>
            <span className="w-24 truncate text-xs text-zinc-500">
              {palette.name}
            </span>
          </li>
        ))}
      </ul>
    </ShowcaseCard>
  );
}
