import type { PaletteCategoryId, PaletteRole } from "@/features/palettes/types";

export const PALETTE_ROLES: { role: PaletteRole; label: string }[] = [
  { role: "background", label: "Background" },
  { role: "surface", label: "Surface" },
  { role: "border", label: "Border" },
  { role: "text", label: "Text" },
  { role: "muted", label: "Muted" },
  { role: "primary", label: "Primary" },
  { role: "accent", label: "Accent" },
];

export const PALETTE_CATEGORIES: { id: PaletteCategoryId; label: string }[] = [
  { id: "product", label: "SaaS & Dashboards" },
  { id: "developer", label: "Developer Tools" },
  { id: "commerce", label: "Commerce & Brand" },
  { id: "creative", label: "Creative & Neon" },
  { id: "nature", label: "Nature & Earth" },
  { id: "minimal", label: "Minimal" },
];
