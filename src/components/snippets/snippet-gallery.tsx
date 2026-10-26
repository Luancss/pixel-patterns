"use client";

import { useMemo, useState } from "react";

import {
  SnippetCard,
  type SnippetCardSize,
} from "@/components/snippets/snippet-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { Snippet, SnippetCategory } from "@/types/snippet";

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
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={() => onPageChange(page)}
                className={cn(
                  "text-white",
                  currentPage === page && "bg-blue-700/30"
                )}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export function SnippetGallery({ snippets, size }: SnippetGalleryProps) {
  const [filter, setFilter] = useState<SnippetFilter>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const { pageSize, grid } = GALLERY_LAYOUTS[size];

  const entries = useMemo(
    () => snippets.map((snippet, index) => ({ id: index, snippet })),
    [snippets]
  );
  const filteredEntries =
    filter === "all"
      ? entries
      : entries.filter(({ snippet }) => snippet.category === filter);
  const totalPages = Math.ceil(filteredEntries.length / pageSize);
  const pageEntries = filteredEntries.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const changeFilter = (value: SnippetFilter) => {
    setFilter(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="mb-4 space-x-2 flex items-center">
        <p className="text-slate-50">Filter by:</p>
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => changeFilter(value)}
            className={cn(
              "text-slate-50 px-2 py-1 text-sm rounded",
              filter === value && "bg-blue-700/30"
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={grid}>
        {pageEntries.map(({ id, snippet }) => (
          <SnippetCard key={id} snippet={snippet} size={size} />
        ))}
      </div>
      <SnippetPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
