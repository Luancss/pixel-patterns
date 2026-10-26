import { Cube } from "@/components/decorations/cube";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { cardSnippets } from "@/data/snippets/cards";

export default function CardsPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Cube />
      <PageHero
        title="Cards"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <SnippetGallery snippets={cardSnippets} size="wide" />
    </>
  );
}
