import { MeteorShower } from "@/components/decorations/meteor-shower";
import { RippleWave } from "@/components/decorations/ripple-wave";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { inputSnippets } from "@/data/snippets/inputs";

export default function InputsPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <RippleWave />
      <PageHero
        title="Inputs"
        description="Check out our sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance, enhancing user experience effortlessly."
      />
      <SnippetGallery snippets={inputSnippets} size="compact" />
    </>
  );
}
