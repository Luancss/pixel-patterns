import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Polyhedron } from "@/components/decorations/polyhedron";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { navigationSnippets } from "@/data/snippets/navigation";

export default function NavigationPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Polyhedron />
      <PageHero
        title="Navigation"
        description="Tabs, accordions, breadcrumbs, menus and steppers that guide people through your product. Pure CSS interactions where possible, ready to copy."
      />
      <SnippetGallery snippets={navigationSnippets} size="wide" />
    </>
  );
}
