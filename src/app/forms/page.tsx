import { ArcWave } from "@/components/decorations/arc-wave";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { formSnippets } from "@/data/snippets/forms";

export default function FormsPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <ArcWave />
      <PageHero
        title="Forms"
        description="Discover our sleek form components, designed for style and functionality. Ideal for login, registration, and data collection, they offer a modern and flexible solution for any project."
      />
      <SnippetGallery snippets={formSnippets} size="large" />
    </>
  );
}
