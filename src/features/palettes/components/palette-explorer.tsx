"use client";

import { Moon, Sun } from "lucide-react";
import { useMemo, useState } from "react";

import {
  type FilterChipOption,
  FilterChips,
} from "@/components/ui/filter-chips";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import { PaletteCard } from "@/features/palettes/components/palette-card";
import { PALETTE_CATEGORIES } from "@/features/palettes/config/palette-config";
import { PALETTES } from "@/features/palettes/data/palettes";
import type {
  PaletteAppearance,
  PaletteCategoryId,
} from "@/features/palettes/types";

type CategoryFilter = "all" | PaletteCategoryId;

type AppearanceFilter = "all" | PaletteAppearance;

const APPEARANCE_OPTIONS: SegmentedControlOption<AppearanceFilter>[] = [
  { value: "all", label: "All" },
  { value: "dark", label: "Dark", icon: <Moon className="size-3.5" /> },
  { value: "light", label: "Light", icon: <Sun className="size-3.5" /> },
];

export function PaletteExplorer() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [appearance, setAppearance] = useState<AppearanceFilter>("all");

  const byAppearance = useMemo(
    () =>
      appearance === "all"
        ? PALETTES
        : PALETTES.filter((palette) => palette.appearance === appearance),
    [appearance]
  );

  const categoryOptions = useMemo<FilterChipOption<CategoryFilter>[]>(
    () => [
      { value: "all", label: "All palettes", count: byAppearance.length },
      ...PALETTE_CATEGORIES.map(({ id, label }) => ({
        value: id,
        label,
        count: byAppearance.filter((palette) => palette.category === id).length,
      })),
    ],
    [byAppearance]
  );

  const visiblePalettes =
    category === "all"
      ? byAppearance
      : byAppearance.filter((palette) => palette.category === category);

  return (
    <section
      aria-label="Color palettes"
      className="mb-16 w-[min(80rem,calc(100vw-2rem))]"
    >
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <FilterChips
          label="Filter by purpose"
          options={categoryOptions}
          value={category}
          onValueChange={setCategory}
        />
        <SegmentedControl
          label="Filter by appearance"
          size="md"
          options={APPEARANCE_OPTIONS}
          value={appearance}
          onValueChange={setAppearance}
          className="self-start lg:self-auto"
        />
      </div>

      {visiblePalettes.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {visiblePalettes.map((palette) => (
            <PaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-white/10 px-6 py-16 text-center text-sm text-zinc-400">
          No palettes match these filters yet.
        </p>
      )}

      <p className="mt-8 text-center text-xs text-zinc-500">
        Click any color to copy its HEX. Every palette passes WCAG AA for body
        text, and its tokens export as CSS variables, Tailwind or JSON.
      </p>
    </section>
  );
}
