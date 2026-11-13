import type { Metadata } from "next";

import { ArcWave } from "@/components/decorations/arc-wave";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { PageHero } from "@/components/layout/page-hero";
import { siteConfig } from "@/config/site";
import { ResourceLibrary } from "@/features/resources/components/resource-library";
import { RESOURCES } from "@/features/resources/data";
import { toResourceSummary } from "@/features/resources/lib/resource-summary";

const DESCRIPTION =
  "Practical guides, cheatsheets and best practices for building real interfaces — with copy-ready code for CSS, React, TypeScript, APIs and more.";

export const metadata: Metadata = {
  title: `Dev Resources · ${siteConfig.name}`,
  description: DESCRIPTION,
};

export default function ResourcesPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <ArcWave />
      <PageHero title="Dev Resources" description={DESCRIPTION} />
      <ResourceLibrary resources={RESOURCES.map(toResourceSummary)} />
    </>
  );
}
