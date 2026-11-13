import type { HeroDecorationName } from "@/components/decorations/registry";
import type { SnippetCardSize } from "@/features/snippets/types";

export type SnippetCollection = {
  slug: string;
  label: string;
  title: string;
  description: string;
  cardSize: SnippetCardSize;
  decoration: HeroDecorationName;
};

/**
 * Single source of truth for every snippet collection: drives the routes,
 * page metadata, hero content and the site navigation.
 * Metadata only — snippet content is resolved server-side by slug.
 */
export const SNIPPET_COLLECTIONS = [
  {
    slug: "buttons",
    label: "Buttons",
    title: "Buttons",
    description:
      "Call-to-action, icon, toggle and animated buttons with clear hover, focus and pressed states. Copy them with one click.",
    cardSize: "compact",
    decoration: "box-wave",
  },
  {
    slug: "inputs",
    label: "Inputs",
    title: "Inputs",
    description:
      "Sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance.",
    cardSize: "compact",
    decoration: "ripple-wave",
  },
  {
    slug: "loaders",
    label: "Loaders",
    title: "Loaders",
    description:
      "Spinners, skeletons and progress indicators that keep people informed while content loads. Minimal, efficient and ready to copy.",
    cardSize: "compact",
    decoration: "sphere",
  },
  {
    slug: "cards",
    label: "Cards",
    title: "Cards",
    description:
      "Curated card components for portfolios, dashboards, pricing and profiles. Flexible layouts with polished details.",
    cardSize: "wide",
    decoration: "cube",
  },
  {
    slug: "checkboxes",
    label: "Checkboxes",
    title: "Checkboxes",
    description:
      "Checkboxes, radios and switches with accessible markup and expressive animations for selections of every kind.",
    cardSize: "compact",
    decoration: "ring-wave",
  },
  {
    slug: "forms",
    label: "Forms",
    title: "Forms",
    description:
      "Login, registration and data-collection forms designed for style and usability, with a modern and flexible structure.",
    cardSize: "large",
    decoration: "arc-wave",
  },
  {
    slug: "navigation",
    label: "Navigation",
    title: "Navigation",
    description:
      "Tabs, accordions, breadcrumbs, menus and steppers that guide people through your product. Pure CSS interactions where possible.",
    cardSize: "wide",
    decoration: "polyhedron",
  },
  {
    slug: "feedback",
    label: "Feedback",
    title: "Feedback",
    description:
      "Alerts, toasts, badges and status indicators that keep users informed. Clear states for success, warnings, errors and progress.",
    cardSize: "wide",
    decoration: "ring-wave",
  },
  {
    slug: "overlays",
    label: "Overlays",
    title: "Overlays",
    description:
      "Modals, drawers, popovers, tooltips, dropdowns and context menus. Layered interfaces built with semantic HTML and modern CSS.",
    cardSize: "wide",
    decoration: "cube",
  },
  {
    slug: "data-display",
    label: "Data Display",
    title: "Data Display",
    description:
      "Tables, stats, charts, timelines and dashboard widgets for presenting information clearly. Lightweight, dependency-free visualizations.",
    cardSize: "wide",
    decoration: "box-wave",
  },
  {
    slug: "code-blocks",
    label: "Code Blocks",
    title: "Code Blocks",
    description:
      "Syntax-highlighted blocks, terminals, diffs, file trees and package-manager tabs for docs, blogs and developer tools.",
    cardSize: "wide",
    decoration: "sphere",
  },
  {
    slug: "documentation",
    label: "Docs",
    title: "Documentation",
    description:
      "Callouts, API references, props tables, changelogs, diagrams and keyboard references for technical documentation.",
    cardSize: "wide",
    decoration: "polyhedron",
  },
] as const satisfies readonly SnippetCollection[];

export type SnippetCollectionSlug =
  (typeof SNIPPET_COLLECTIONS)[number]["slug"];

export function getSnippetCollection(slug: string) {
  return SNIPPET_COLLECTIONS.find((collection) => collection.slug === slug);
}
