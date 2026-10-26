import { BoxWave } from "@/components/decorations/box-wave";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { dataDisplaySnippets } from "@/data/snippets/data-display";

export default function DataDisplayPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <BoxWave />
      <PageHero
        title="Data Display"
        description="Tables, stats, charts, timelines and dashboard widgets for presenting information clearly. Lightweight, dependency free visualizations."
      />
      <SnippetGallery snippets={dataDisplaySnippets} size="wide" />
    </>
  );
}
