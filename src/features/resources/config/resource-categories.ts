import type { ResourceCategoryId } from "@/features/resources/types";

export const RESOURCE_CATEGORIES: Record<
  ResourceCategoryId,
  { label: string; badgeClassName: string }
> = {
  css: {
    label: "CSS & Tailwind",
    badgeClassName: "bg-sky-500/10 text-sky-300 ring-sky-500/20",
  },
  accessibility: {
    label: "Accessibility",
    badgeClassName: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/20",
  },
  react: {
    label: "React",
    badgeClassName: "bg-cyan-500/10 text-cyan-300 ring-cyan-500/20",
  },
  typescript: {
    label: "TypeScript",
    badgeClassName: "bg-blue-500/10 text-blue-300 ring-blue-500/20",
  },
  performance: {
    label: "Performance",
    badgeClassName: "bg-amber-500/10 text-amber-300 ring-amber-500/20",
  },
  api: {
    label: "APIs",
    badgeClassName: "bg-violet-500/10 text-violet-300 ring-violet-500/20",
  },
  workflow: {
    label: "Workflow",
    badgeClassName: "bg-rose-500/10 text-rose-300 ring-rose-500/20",
  },
};
