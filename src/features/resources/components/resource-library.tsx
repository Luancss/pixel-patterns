"use client";

import { useMemo, useState } from "react";

import {
  type FilterChipOption,
  FilterChips,
} from "@/components/ui/filter-chips";
import { ResourceCard } from "@/features/resources/components/resource-card";
import { RESOURCE_CATEGORIES } from "@/features/resources/config/resource-categories";
import type { ResourceSummary } from "@/features/resources/lib/resource-summary";
import type { ResourceCategoryId } from "@/features/resources/types";

type CategoryFilter = "all" | ResourceCategoryId;

export function ResourceLibrary({
  resources,
}: {
  resources: ResourceSummary[];
}) {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const options = useMemo<FilterChipOption<CategoryFilter>[]>(() => {
    const usedCategories = (
      Object.keys(RESOURCE_CATEGORIES) as ResourceCategoryId[]
    ).filter((id) => resources.some((resource) => resource.category === id));

    return [
      { value: "all", label: "All guides", count: resources.length },
      ...usedCategories.map((id) => ({
        value: id,
        label: RESOURCE_CATEGORIES[id].label,
        count: resources.filter((resource) => resource.category === id).length,
      })),
    ];
  }, [resources]);

  const visible =
    category === "all"
      ? resources
      : resources.filter((resource) => resource.category === category);

  return (
    <section
      aria-label="Developer guides"
      className="mb-16 w-[min(72rem,calc(100vw-2rem))]"
    >
      <FilterChips
        label="Filter by topic"
        options={options}
        value={category}
        onValueChange={setCategory}
        className="mb-6"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((resource) => (
          <ResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>
    </section>
  );
}
