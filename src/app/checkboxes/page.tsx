import { MeteorShower } from "@/components/decorations/meteor-shower";
import { RingWave } from "@/components/decorations/ring-wave";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { checkboxSnippets } from "@/data/snippets/checkboxes";

export default function CheckboxesPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <RingWave />
      <PageHero
        title="Checkboxes"
        description="Check out our sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance, enhancing user experience effortlessly."
      />
      <SnippetGallery snippets={checkboxSnippets} size="compact" />
    </>
  );
}
