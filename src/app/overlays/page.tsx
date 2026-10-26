import { Cube } from "@/components/decorations/cube";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { overlaySnippets } from "@/data/snippets/overlays";

export default function OverlaysPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Cube />
      <PageHero
        title="Overlays"
        description="Modals, popovers, tooltips, dropdowns and context menus. Layered interfaces built with semantic HTML and modern CSS."
      />
      <SnippetGallery snippets={overlaySnippets} size="wide" />
    </>
  );
}
