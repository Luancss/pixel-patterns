import { accessibilityGuide } from "@/features/resources/data/guides/accessibility";
import { apiDesignGuide } from "@/features/resources/data/guides/api-design";
import { cssLayoutGuide } from "@/features/resources/data/guides/css-layout";
import { gitWorkflowGuide } from "@/features/resources/data/guides/git-workflow";
import { reactPerformanceGuide } from "@/features/resources/data/guides/react-performance";
import { tailwindPatternsGuide } from "@/features/resources/data/guides/tailwind-patterns";
import { typescriptPatternsGuide } from "@/features/resources/data/guides/typescript-patterns";
import { webPerformanceGuide } from "@/features/resources/data/guides/web-performance";
import type { Resource } from "@/features/resources/types";

export const RESOURCES: Resource[] = [
  cssLayoutGuide,
  tailwindPatternsGuide,
  accessibilityGuide,
  reactPerformanceGuide,
  typescriptPatternsGuide,
  webPerformanceGuide,
  apiDesignGuide,
  gitWorkflowGuide,
];

export function getResource(slug: string) {
  return RESOURCES.find((resource) => resource.slug === slug);
}

/** Same-category guides first, then the rest, excluding the current one. */
export function getRelatedResources(resource: Resource, limit = 3) {
  const others = RESOURCES.filter(({ slug }) => slug !== resource.slug);
  return [
    ...others.filter(({ category }) => category === resource.category),
    ...others.filter(({ category }) => category !== resource.category),
  ].slice(0, limit);
}
