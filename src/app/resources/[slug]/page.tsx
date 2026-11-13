import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { siteConfig } from "@/config/site";
import { ResourceArticle } from "@/features/resources/components/resource-article";
import {
  getRelatedResources,
  getResource,
  RESOURCES,
} from "@/features/resources/data";
import { toResourceSummary } from "@/features/resources/lib/resource-summary";

type ResourcePageProps = {
  params: { slug: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return RESOURCES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: ResourcePageProps): Metadata {
  const resource = getResource(params.slug);
  if (!resource) return {};

  return {
    title: `${resource.title} · ${siteConfig.name}`,
    description: resource.summary,
  };
}

export default function ResourcePage({ params }: ResourcePageProps) {
  const resource = getResource(params.slug);
  if (!resource) notFound();

  return (
    <>
      <Starfield />
      <MeteorShower />
      <div className="h-12" />
      <ResourceArticle
        resource={resource}
        related={getRelatedResources(resource).map(toResourceSummary)}
      />
    </>
  );
}
