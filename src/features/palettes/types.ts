export type PaletteAppearance = "dark" | "light";

export type PaletteRole =
  "background" | "surface" | "border" | "text" | "muted" | "primary" | "accent";

export type PaletteCategoryId =
  "product" | "developer" | "commerce" | "creative" | "nature" | "minimal";

export type Palette = {
  id: string;
  name: string;
  description: string;
  category: PaletteCategoryId;
  appearance: PaletteAppearance;
  colors: Record<PaletteRole, string>;
};
