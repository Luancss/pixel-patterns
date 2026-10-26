import { BoxWave } from "@/components/decorations/box-wave";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { buttonSnippets } from "@/data/snippets/buttons";

export default function ButtonsPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <BoxWave />
      <PageHero
        title="Buttons"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <SnippetGallery snippets={buttonSnippets} size="compact" />
    </>
  );
}
