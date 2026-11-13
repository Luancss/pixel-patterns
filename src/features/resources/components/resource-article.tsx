import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ResourceBlock } from "@/features/resources/components/resource-block";
import { ResourceCard } from "@/features/resources/components/resource-card";
import {
  CategoryBadge,
  ResourceMeta,
} from "@/features/resources/components/resource-meta";
import { getReadingMinutes } from "@/features/resources/lib/reading-time";
import type { ResourceSummary } from "@/features/resources/lib/resource-summary";
import type { Resource } from "@/features/resources/types";

function TableOfContents({ resource }: { resource: Resource }) {
  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
        On this page
      </p>
      <ol className="space-y-1 border-l border-white/10">
        {resource.sections.map(({ id, heading }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="-ml-px block border-l border-transparent py-1 pl-4 text-zinc-400 transition-colors hover:border-zinc-400 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

type ResourceArticleProps = {
  resource: Resource;
  related: ResourceSummary[];
};

export function ResourceArticle({ resource, related }: ResourceArticleProps) {
  return (
    <div className="mb-16 w-[min(72rem,calc(100vw-2rem))]">
      <Link
        href="/resources"
        className="inline-flex items-center gap-1.5 rounded-md text-sm text-zinc-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <ArrowLeft className="size-4" />
        All resources
      </Link>

      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <CategoryBadge category={resource.category} />
          <ResourceMeta
            level={resource.level}
            readingMinutes={getReadingMinutes(resource)}
          />
        </div>
        <h1 className="mt-4 text-4xl font-bold text-gray-100 animate-slide-in-left lg:text-5xl">
          {resource.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-400">
          {resource.summary}
        </p>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
        <article className="min-w-0 space-y-14">
          {resource.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-heading`}
              className="scroll-mt-8 space-y-5"
            >
              <h2
                id={`${section.id}-heading`}
                className="text-2xl font-semibold text-white"
              >
                <a
                  href={`#${section.id}`}
                  className="group inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  {section.heading}
                  <span
                    aria-hidden="true"
                    className="text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    #
                  </span>
                </a>
              </h2>
              {section.blocks.map((block, index) => (
                <ResourceBlock key={index} block={block} />
              ))}
            </section>
          ))}
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <TableOfContents resource={resource} />
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-20">
          <h2
            id="related-heading"
            className="mb-5 text-lg font-semibold text-white"
          >
            Keep reading
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ResourceCard key={item.slug} resource={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
