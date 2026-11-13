"use client";

import { Layers } from "lucide-react";
import { useMemo, useRef, useState } from "react";

import { SnippetCard } from "@/features/snippets/components/snippet-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import type {
  Snippet,
  SnippetCardSize,
  SnippetCategory,
} from "@/features/snippets/types";

type SnippetFilter = "all" | SnippetCategory;

const FILTERS: { value: SnippetFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "css", label: "CSS" },
  { value: "tailwind", label: "Tailwind" },
];

const GALLERY_LAYOUTS: Record<
  SnippetCardSize,
  { pageSize: number; grid: string }
> = {
  compact: {
    pageSize: 12,
    grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1",
  },
  wide: {
    pageSize: 9,
    grid: "grid grid-cols-1 min-[1080px]:grid-cols-2 min-[1640px]:grid-cols-3 gap-6",
  },
  large: {
    pageSize: 6,
    grid: "grid grid-cols-1 min-[1260px]:grid-cols-2 gap-x-1 gap-y-5",
  },
};

/** Always shows the first, last and neighbouring pages; gaps become "…". */
const MAX_VISIBLE_PAGES = 7;

type PageItem = number | "ellipsis-start" | "ellipsis-end";

function getPageItems(currentPage: number, totalPages: number): PageItem[] {
  if (totalPages <= MAX_VISIBLE_PAGES) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const start = Math.max(2, Math.min(currentPage - 1, totalPages - 4));
  const end = Math.min(totalPages - 1, Math.max(currentPage + 1, 5));
  const middle = Array.from(
    { length: end - start + 1 },
    (_, index) => start + index
  );

  return [
    1,
    ...(start > 2 ? (["ellipsis-start"] as const) : []),
    ...middle,
    ...(end < totalPages - 1 ? (["ellipsis-end"] as const) : []),
    totalPages,
  ];
}

type SnippetGalleryProps = {
  snippets: Snippet[];
  size: SnippetCardSize;
};

type SnippetPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function SnippetPagination({
  currentPage,
  totalPages,
  onPageChange,
}: SnippetPaginationProps) {
  return (
    <Pagination className="my-10">
      <PaginationContent className="flex-wrap justify-center">
        <PaginationItem>
          <PaginationPrevious
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          />
        </PaginationItem>
        {getPageItems(currentPage, totalPages).map((item) => (
          <PaginationItem key={item}>
            {typeof item === "number" ? (
              <PaginationLink
                isActive={item === currentPage}
                aria-label={`Page ${item}`}
                onClick={() => onPageChange(item)}
                className="tabular-nums"
              >
                {item}
              </PaginationLink>
            ) : (
              <PaginationEllipsis />
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function SnippetGallery({ snippets, size }: SnippetGalleryProps) {
  const [filter, setFilter] = useState<SnippetFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const galleryRef = useRef<HTMLElement>(null);
  const { pageSize, grid } = GALLERY_LAYOUTS[size];

  const entries = useMemo(
    () => snippets.map((snippet, index) => ({ id: index, snippet })),
    [snippets]
  );
  const filterOptions = useMemo<SegmentedControlOption<SnippetFilter>[]>(
    () =>
      FILTERS.map(({ value, label }) => ({
        value,
        label,
        count:
          value === "all"
            ? entries.length
            : entries.filter(({ snippet }) => snippet.category === value)
                .length,
      })),
    [entries]
  );

  const filteredEntries =
    filter === "all"
      ? entries
      : entries.filter(({ snippet }) => snippet.category === filter);
  const totalPages = Math.max(1, Math.ceil(filteredEntries.length / pageSize));
  const firstIndex = (currentPage - 1) * pageSize;
  const pageEntries = filteredEntries.slice(firstIndex, firstIndex + pageSize);

  const changeFilter = (value: SnippetFilter) => {
    setFilter(value);
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
    galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      ref={galleryRef}
      aria-label="Components"
      className="w-full max-w-max scroll-mt-6 px-4 sm:px-0"
    >
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <SegmentedControl
          label="Filter by technology"
          size="md"
          options={filterOptions}
          value={filter}
          onValueChange={changeFilter}
          className="self-start"
        />
        {filteredEntries.length > 0 && (
          <p className="flex items-center gap-2 text-sm text-zinc-400">
            <Layers className="size-4 text-zinc-500" />
            Showing{" "}
            <span className="font-medium tabular-nums text-zinc-200">
              {firstIndex + 1}–{firstIndex + pageEntries.length}
            </span>{" "}
            of{" "}
            <span className="font-medium tabular-nums text-zinc-200">
              {filteredEntries.length}
            </span>
          </p>
        )}
      </div>

      {pageEntries.length > 0 ? (
        <div className={grid}>
          {pageEntries.map(({ id, snippet }) => (
            <SnippetCard key={id} snippet={snippet} size={size} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-dashed border-white/10 px-6 py-16 text-center text-sm text-zinc-400">
          No components match this filter yet.
        </p>
      )}

      {totalPages > 1 ? (
        <SnippetPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={changePage}
        />
      ) : (
        <div className="h-10" />
      )}
    </section>
  );
}
