import { BookOpen } from "lucide-react";

import { ShowcaseCard } from "@/components/ui/showcase-card";
import { CategoryBadge } from "@/features/resources/components/resource-meta";
import { RESOURCES } from "@/features/resources/data";

const PREVIEW_COUNT = 3;

/** One guide per category, so the preview shows the breadth of topics. */
const PREVIEW_RESOURCES = RESOURCES.filter(
  (resource, index) =>
    RESOURCES.findIndex(({ category }) => category === resource.category) ===
    index
).slice(0, PREVIEW_COUNT);

export function ResourceTeaser() {
  return (
    <ShowcaseCard
      href="/resources"
      icon={BookOpen}
      title="Dev Resources"
      description={`${RESOURCES.length} practical guides and cheatsheets with copy-ready code and best practices.`}
      cta="Read the guides"
    >
      <ul className="space-y-2.5">
        {PREVIEW_RESOURCES.map((resource) => (
          <li key={resource.slug} className="flex items-center gap-2">
            <CategoryBadge category={resource.category} />
            <span className="truncate text-sm text-zinc-300">
              {resource.title}
            </span>
          </li>
        ))}
      </ul>
    </ShowcaseCard>
  );
}
