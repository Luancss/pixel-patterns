import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Sphere } from "@/components/decorations/sphere";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { SnippetGallery } from "@/components/snippets/snippet-gallery";
import { loaderSnippets } from "@/data/snippets/loaders";

export default function LoadersPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Sphere />
      <PageHero
        title="Loaders"
        description="Explore a collection of minimal and efficient loader components designed to enhance user experience in any web project. Easily copy and use with just one click."
      />
      <SnippetGallery snippets={loaderSnippets} size="compact" />
    </>
  );
}
