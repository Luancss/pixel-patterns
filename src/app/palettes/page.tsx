import type { Metadata } from "next";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { RingWave } from "@/components/decorations/ring-wave";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/config/site";
import { PaletteExplorer } from "@/features/palettes/components/palette-explorer";

const DESCRIPTION =
  "Accessible color palettes for real products, grouped by purpose and ready for dark and light themes. Copy any HEX or export the tokens as CSS variables, Tailwind or JSON.";

export const metadata: Metadata = {
  title: `Color Palettes · ${siteConfig.name}`,
  description: DESCRIPTION,
};

export default function PalettesPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <RingWave />
      <PageHero title="Color Palettes" description={DESCRIPTION} />
      <PaletteExplorer />
    </>
  );
}
