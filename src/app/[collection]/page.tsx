import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { HERO_DECORATIONS } from "@/components/decorations/registry";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/config/site";
import { SnippetGallery } from "@/features/snippets/components/snippet-gallery";
import {
  getSnippetCollection,
  SNIPPET_COLLECTIONS,
} from "@/features/snippets/config/collections";
import { COLLECTION_SNIPPETS } from "@/features/snippets/data";

type CollectionPageProps = {
  params: { collection: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return SNIPPET_COLLECTIONS.map(({ slug }) => ({ collection: slug }));
}

export function generateMetadata({ params }: CollectionPageProps): Metadata {
  const collection = getSnippetCollection(params.collection);
  if (!collection) return {};

  return {
    title: `${collection.title} · ${siteConfig.name}`,
    description: collection.description,
  };
}

export default function CollectionPage({ params }: CollectionPageProps) {
  const collection = getSnippetCollection(params.collection);
  if (!collection) notFound();

  const Decoration = HERO_DECORATIONS[collection.decoration];

  return (
    <>
      <Starfield />
      <MeteorShower />
      <Decoration />
      <PageHero title={collection.title} description={collection.description} />
      <SnippetGallery
        snippets={COLLECTION_SNIPPETS[collection.slug]}
        size={collection.cardSize}
      />
    </>
  );
}
