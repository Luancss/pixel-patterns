import type { ComponentType } from "react";

import { ArcWave } from "@/components/decorations/arc-wave";
import { BoxWave } from "@/components/decorations/box-wave";
import { Cube } from "@/components/decorations/cube";
import { Polyhedron } from "@/components/decorations/polyhedron";
import { RingWave } from "@/components/decorations/ring-wave";
import { RippleWave } from "@/components/decorations/ripple-wave";
import { Sphere } from "@/components/decorations/sphere";

/**
 * Hero decorations that pages can reference by name from plain config
 * objects, keeping configuration free of component imports.
 */
export const HERO_DECORATIONS = {
  "arc-wave": ArcWave,
  "box-wave": BoxWave,
  cube: Cube,
  polyhedron: Polyhedron,
  "ring-wave": RingWave,
  "ripple-wave": RippleWave,
  sphere: Sphere,
} satisfies Record<string, ComponentType>;

export type HeroDecorationName = keyof typeof HERO_DECORATIONS;
