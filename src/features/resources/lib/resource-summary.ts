import { getReadingMinutes } from "@/features/resources/lib/reading-time";
import type { Resource } from "@/features/resources/types";

export type ResourceSummary = Pick<
  Resource,
  "slug" | "title" | "summary" | "category" | "level"
> & {
  readingMinutes: number;
  topics: string[];
};

/** The lightweight shape sent to client components (no article bodies). */
export function toResourceSummary(resource: Resource): ResourceSummary {
  return {
    slug: resource.slug,
    title: resource.title,
    summary: resource.summary,
    category: resource.category,
    level: resource.level,
    readingMinutes: getReadingMinutes(resource),
    topics: resource.sections.map(({ heading }) => heading),
  };
}
