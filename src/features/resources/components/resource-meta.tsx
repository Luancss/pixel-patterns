import { Clock, Gauge } from "lucide-react";

import { RESOURCE_CATEGORIES } from "@/features/resources/config/resource-categories";
import type {
  ResourceCategoryId,
  ResourceLevel,
} from "@/features/resources/types";
import { cn } from "@/lib/utils";

export function CategoryBadge({ category }: { category: ResourceCategoryId }) {
  const { label, badgeClassName } = RESOURCE_CATEGORIES[category];

  return (
    <span
      className={cn(
        "shrink-0 whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset",
        badgeClassName
      )}
    >
      {label}
    </span>
  );
}

export function ResourceMeta({
  level,
  readingMinutes,
}: {
  level: ResourceLevel;
  readingMinutes: number;
}) {
  return (
    <span className="inline-flex items-center gap-3 text-xs text-zinc-500">
      <span className="inline-flex items-center gap-1">
        <Gauge className="size-3.5" />
        {level}
      </span>
      <span className="inline-flex items-center gap-1">
        <Clock className="size-3.5" />
        {readingMinutes} min read
      </span>
    </span>
  );
}
