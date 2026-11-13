import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import {
  CategoryBadge,
  ResourceMeta,
} from "@/features/resources/components/resource-meta";
import type { ResourceSummary } from "@/features/resources/lib/resource-summary";

const VISIBLE_TOPICS = 3;

export function ResourceCard({ resource }: { resource: ResourceSummary }) {
  const hiddenTopics = resource.topics.length - VISIBLE_TOPICS;

  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="group flex flex-col rounded-2xl border border-white/10 bg-[#0c0c12]/90 p-5 shadow-2xl shadow-black/30 transition-colors hover:border-white/20 hover:bg-[#10101a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
    >
      <div className="flex items-center justify-between gap-3">
        <CategoryBadge category={resource.category} />
        <ArrowUpRight className="size-4 text-zinc-600 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">
        {resource.title}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-6 text-zinc-400">
        {resource.summary}
      </p>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {resource.topics.slice(0, VISIBLE_TOPICS).map((topic) => (
          <li
            key={topic}
            className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-zinc-400"
          >
            {topic}
          </li>
        ))}
        {hiddenTopics > 0 && (
          <li className="px-1 py-0.5 text-[11px] text-zinc-500">
            +{hiddenTopics} more
          </li>
        )}
      </ul>
      <div className="mt-4 border-t border-white/5 pt-4">
        <ResourceMeta
          level={resource.level}
          readingMinutes={resource.readingMinutes}
        />
      </div>
    </Link>
  );
}
