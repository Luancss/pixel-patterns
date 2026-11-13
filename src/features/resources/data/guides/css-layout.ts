import type { Resource } from "@/features/resources/types";

export const cssLayoutGuide: Resource = {
  slug: "modern-css-layout",
  title: "Modern CSS Layout Cheatsheet",
  summary:
    "Flexbox, Grid, fluid sizing and container queries: the handful of patterns that solve most real-world layouts.",
  category: "css",
  level: "Beginner",
  sections: [
    {
      id: "flex-or-grid",
      heading: "Flexbox or Grid?",
      blocks: [
        {
          type: "paragraph",
          text: "Use Flexbox when content decides the size of items along one axis (toolbars, nav bars, button groups). Use Grid when the layout decides the size of items in two dimensions (cards, dashboards, page shells).",
        },
        {
          type: "table",
          columns: ["Need", "Reach for", "Key properties"],
          rows: [
            ["Items in a row that wrap", "Flexbox", "`flex-wrap: wrap`, `gap`"],
            ["Push one item to the end", "Flexbox", "`margin-left: auto`"],
            [
              "Equal columns that reflow",
              "Grid",
              "`repeat(auto-fit, minmax())`",
            ],
            ["Header / sidebar / main shell", "Grid", "`grid-template-areas`"],
            ["Overlap elements", "Grid", "Same `grid-area` on both"],
          ],
        },
      ],
    },
    {
      id: "responsive-grid",
      heading: "Responsive grids without media queries",
      blocks: [
        {
          type: "paragraph",
          text: "`auto-fit` with `minmax()` creates as many columns as fit, each at least the minimum width. Wrapping the minimum in `min()` keeps a single column from overflowing on narrow screens.",
        },
        {
          type: "code",
          language: "css",
          title: "cards.css",
          code: `.cards {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(min(18rem, 100%), 1fr));
}`,
        },
        {
          type: "callout",
          tone: "tip",
          text: "Use `auto-fill` instead of `auto-fit` when you want empty tracks to keep their space, so a single card does not stretch across the full row.",
        },
      ],
    },
    {
      id: "centering",
      heading: "Centering, the reliable way",
      blocks: [
        {
          type: "code",
          language: "css",
          code: `/* Both axes, any content */
.center {
  display: grid;
  place-items: center;
}

/* Constrained, centered page content */
.container {
  width: min(72rem, 100% - 2rem);
  margin-inline: auto;
}`,
        },
      ],
    },
    {
      id: "fluid-sizing",
      heading: "Fluid type and spacing with clamp()",
      blocks: [
        {
          type: "paragraph",
          text: "`clamp(min, preferred, max)` scales a value with the viewport while respecting limits. Mixing `rem` into the preferred value keeps text zoomable for accessibility.",
        },
        {
          type: "code",
          language: "css",
          code: `h1 {
  font-size: clamp(2rem, 1.2rem + 3vw, 4rem);
}

.section {
  padding-block: clamp(3rem, 8vw, 7rem);
}`,
        },
      ],
    },
    {
      id: "container-queries",
      heading: "Container queries for reusable components",
      blocks: [
        {
          type: "paragraph",
          text: "Media queries react to the viewport; container queries react to the space a component actually has. That makes the same card work in a sidebar and in the main column.",
        },
        {
          type: "code",
          language: "css",
          code: `.card-wrapper {
  container-type: inline-size;
}

@container (min-width: 32rem) {
  .card {
    display: grid;
    grid-template-columns: 12rem 1fr;
  }
}`,
        },
        {
          type: "callout",
          tone: "note",
          text: "In Tailwind CSS 3.4 container queries need the official `@tailwindcss/container-queries` plugin; they are built in from Tailwind 4.",
        },
      ],
    },
  ],
};
