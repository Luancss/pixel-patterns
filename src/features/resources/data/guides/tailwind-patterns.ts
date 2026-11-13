import type { Resource } from "@/features/resources/types";

export const tailwindPatternsGuide: Resource = {
  slug: "tailwind-component-patterns",
  title: "Tailwind CSS Component Patterns",
  summary:
    "Merge classes safely, model variants, style by state with group and peer, and avoid the dynamic class name trap.",
  category: "css",
  level: "Intermediate",
  sections: [
    {
      id: "merge-classes",
      heading: "Merge classes with cn()",
      blocks: [
        {
          type: "paragraph",
          text: "Components should accept a `className` prop, but naive concatenation produces conflicts like `px-4 px-2`. `clsx` handles conditionals and `tailwind-merge` resolves conflicts so the last class wins. This project exposes both as `cn()` in `src/lib/utils.ts`.",
        },
        {
          type: "code",
          language: "typescript",
          title: "src/lib/utils.ts",
          code: `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

cn("px-4 py-2", isActive && "bg-white/10", "px-2");
// → "py-2 bg-white/10 px-2"`,
        },
      ],
    },
    {
      id: "variants",
      heading: "Model variants instead of ad-hoc props",
      blocks: [
        {
          type: "paragraph",
          text: "`class-variance-authority` turns design decisions into a typed API. Each variant is a closed set of options, so invalid combinations fail at compile time.",
        },
        {
          type: "code",
          language: "typescript",
          code: `import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
  {
    variants: {
      tone: {
        neutral: "bg-white/10 text-zinc-200",
        success: "bg-emerald-500/15 text-emerald-300",
        danger: "bg-red-500/15 text-red-300",
      },
    },
    defaultVariants: { tone: "neutral" },
  }
);

export type BadgeProps = VariantProps<typeof badgeVariants>;`,
        },
      ],
    },
    {
      id: "state-styling",
      heading: "Style by state with group, peer and data attributes",
      blocks: [
        {
          type: "list",
          items: [
            "`group` on a parent + `group-hover:` on children reacts to hovering the whole card.",
            "`peer` on an input + `peer-checked:` on a sibling builds custom checkboxes without JavaScript.",
            "`data-[state=open]:` pairs perfectly with Radix primitives, which expose their state as attributes.",
            "`aria-[current=page]:` styles the active link from the same attribute screen readers use.",
          ],
        },
        {
          type: "code",
          language: "tsx",
          code: `<label className="flex items-center gap-2">
  <input type="checkbox" className="peer sr-only" />
  <span className="size-5 rounded border border-white/20 peer-checked:bg-blue-500 peer-focus-visible:ring-2" />
  Remember me
</label>`,
        },
      ],
    },
    {
      id: "dynamic-classes",
      heading: "Never build class names dynamically",
      blocks: [
        {
          type: "paragraph",
          text: "Tailwind scans source files for complete class strings. A class assembled at runtime never appears in the source, so it is missing from the generated CSS.",
        },
        {
          type: "code",
          language: "tsx",
          code: `// ✗ "bg-red-500" is never generated
<span className={\`bg-\${color}-500\`} />

// ✓ map values to complete class names
const TONES = {
  red: "bg-red-500",
  green: "bg-green-500",
} as const;

<span className={TONES[color]} />`,
        },
        {
          type: "callout",
          tone: "tip",
          text: "When a value is truly dynamic (a user-picked color), set a CSS variable with `style` and read it with an arbitrary value such as `bg-[var(--swatch)]`. The palette previews on this site work exactly like that.",
        },
      ],
    },
  ],
};
