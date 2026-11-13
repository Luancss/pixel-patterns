import type { Resource } from "@/features/resources/types";

export const accessibilityGuide: Resource = {
  slug: "accessible-components-checklist",
  title: "Accessible Components Checklist",
  summary:
    "A practical checklist for semantics, keyboard support, names, contrast and motion before you ship a component.",
  category: "accessibility",
  level: "Beginner",
  sections: [
    {
      id: "semantics",
      heading: "Start with the right element",
      blocks: [
        {
          type: "paragraph",
          text: "Native elements come with keyboard support, focus and screen reader semantics for free. Reach for ARIA only when no element fits.",
        },
        {
          type: "table",
          columns: ["If it…", "Use", "Not"],
          rows: [
            [
              "performs an action",
              '`<button type="button">`',
              "`<div onClick>`",
            ],
            [
              "navigates somewhere",
              "`<a href>`",
              "`<button onClick={navigate}>`",
            ],
            [
              "toggles on/off",
              '`<button role="switch" aria-checked>`',
              "A styled checkbox without a label",
            ],
            [
              "groups page regions",
              "`<nav>`, `<main>`, `<aside>`",
              "Generic `<div>` wrappers",
            ],
          ],
        },
      ],
    },
    {
      id: "keyboard",
      heading: "Keyboard and focus",
      blocks: [
        {
          type: "list",
          items: [
            "Every interactive element is reachable with Tab and activates with Enter or Space.",
            "Focus is always visible: prefer `focus-visible` rings over removing outlines.",
            "Dialogs trap focus while open and return it to the trigger when closed.",
            "Escape closes popovers, menus and dialogs.",
            "Tab order follows the visual order; avoid positive `tabindex` values.",
          ],
        },
        {
          type: "code",
          language: "tsx",
          code: `<button className="rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
  Save changes
</button>`,
        },
      ],
    },
    {
      id: "names",
      heading: "Give everything an accessible name",
      blocks: [
        {
          type: "paragraph",
          text: "Icon-only buttons are the most common gap. A visible tooltip is not an accessible name — add `aria-label` or visually hidden text.",
        },
        {
          type: "code",
          language: "tsx",
          code: `<button type="button" aria-label="Copy code">
  <CopyIcon aria-hidden="true" />
</button>

<label htmlFor="email">Email</label>
<input id="email" type="email" autoComplete="email" />`,
        },
      ],
    },
    {
      id: "contrast",
      heading: "Color and contrast",
      blocks: [
        {
          type: "table",
          columns: ["Content", "Minimum ratio (WCAG AA)"],
          rows: [
            ["Body text", "4.5 : 1"],
            ["Large text (24px, or 18.66px bold)", "3 : 1"],
            ["Icons, borders and focus indicators", "3 : 1"],
          ],
        },
        {
          type: "callout",
          tone: "tip",
          text: "Every palette in the Color Palettes library shows its measured contrast, so you can pick tokens that already pass.",
        },
        {
          type: "paragraph",
          text: "Never use color alone to convey meaning: pair a red border with an error message and an icon.",
        },
      ],
    },
    {
      id: "motion",
      heading: "Respect reduced motion",
      blocks: [
        {
          type: "code",
          language: "css",
          code: `@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
        },
        {
          type: "paragraph",
          text: "In Tailwind, prefix animations with `motion-safe:` so they only run for people who have not asked to reduce motion.",
        },
      ],
    },
  ],
};
