import type { Resource } from "@/features/resources/types";

export const webPerformanceGuide: Resource = {
  slug: "web-performance-checklist",
  title: "Web Performance Checklist",
  summary:
    "Core Web Vitals targets and the Next.js techniques that move them: images, fonts, bundles and caching.",
  category: "performance",
  level: "Intermediate",
  sections: [
    {
      id: "web-vitals",
      heading: "Know the targets",
      blocks: [
        {
          type: "paragraph",
          text: "Google evaluates the 75th percentile of real user visits. Aim for the “good” column on mobile, where devices and networks are slowest.",
        },
        {
          type: "table",
          columns: ["Metric", "Measures", "Good", "Poor"],
          rows: [
            ["LCP — Largest Contentful Paint", "Loading", "≤ 2.5 s", "> 4 s"],
            [
              "INP — Interaction to Next Paint",
              "Responsiveness",
              "≤ 200 ms",
              "> 500 ms",
            ],
            [
              "CLS — Cumulative Layout Shift",
              "Visual stability",
              "≤ 0.1",
              "> 0.25",
            ],
          ],
        },
      ],
    },
    {
      id: "images",
      heading: "Images",
      blocks: [
        {
          type: "list",
          items: [
            "Use `next/image`: it serves modern formats, resizes per device and reserves space to prevent layout shift.",
            "Mark the hero image with `priority` so it is not lazy-loaded — it is usually the LCP element.",
            "Always pass `width` and `height` (or `fill` with a sized parent).",
            "Use `sizes` for responsive images so phones do not download desktop widths.",
          ],
        },
        {
          type: "code",
          language: "tsx",
          code: `<Image
  src="/hero.png"
  alt="Dashboard preview"
  width={1200}
  height={720}
  sizes="(max-width: 768px) 100vw, 1200px"
  priority
/>`,
        },
      ],
    },
    {
      id: "fonts",
      heading: "Fonts",
      blocks: [
        {
          type: "paragraph",
          text: "`next/font` self-hosts Google Fonts at build time, removes the extra connection to Google and adjusts the fallback font metrics to minimize layout shift.",
        },
        {
          type: "code",
          language: "tsx",
          title: "layout.tsx",
          code: `import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}`,
        },
      ],
    },
    {
      id: "javascript",
      heading: "Ship less JavaScript",
      blocks: [
        {
          type: "list",
          items: [
            'Keep components as Server Components by default; add `"use client"` only to interactive leaves.',
            "Pass server-rendered content to client components as props or children instead of importing large data modules in the client.",
            "Split heavy widgets with `next/dynamic` and analyze bundles with `@next/bundle-analyzer`.",
            "Break long tasks (> 50 ms) so input stays responsive — this is what INP measures.",
          ],
        },
        {
          type: "callout",
          tone: "note",
          text: "On this site the snippet catalog is resolved on the server per collection, so the browser never downloads the content of other pages.",
        },
      ],
    },
    {
      id: "caching",
      heading: "Caching",
      blocks: [
        {
          type: "table",
          columns: ["Asset", "Cache-Control"],
          rows: [
            [
              "Hashed static files (`/_next/static`)",
              "`public, max-age=31536000, immutable`",
            ],
            ["HTML of static pages", "`s-maxage` on the CDN + revalidation"],
            ["Personalized API responses", "`private, no-store`"],
          ],
        },
        {
          type: "paragraph",
          text: "For data that changes slowly, revalidate on an interval instead of fetching on every request, e.g. `fetch(url, { next: { revalidate: 3600 } })`.",
        },
      ],
    },
  ],
};
