import type { Resource } from "@/features/resources/types";

export const typescriptPatternsGuide: Resource = {
  slug: "typescript-patterns-for-ui",
  title: "TypeScript Patterns for UI Code",
  summary:
    "Discriminated unions, satisfies with as const, generic components and exhaustive switches — with examples from this codebase.",
  category: "typescript",
  level: "Intermediate",
  sections: [
    {
      id: "discriminated-unions",
      heading: "Discriminated unions for variant data",
      blocks: [
        {
          type: "paragraph",
          text: "When objects come in shapes, give each shape a literal tag. TypeScript narrows on the tag, so each branch only sees the fields that exist.",
        },
        {
          type: "code",
          language: "typescript",
          code: `type ResourceBlock =
  | { type: "paragraph"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "table"; columns: string[]; rows: string[][] };

function render(block: ResourceBlock) {
  if (block.type === "code") {
    return highlight(block.code, block.language); // narrowed
  }
}`,
        },
      ],
    },
    {
      id: "satisfies",
      heading: "satisfies + as const for config",
      blocks: [
        {
          type: "paragraph",
          text: "`satisfies` validates an object against a type without widening it, and `as const` keeps literal values. Together they give you both type-checking and precise inferred types — perfect for registries.",
        },
        {
          type: "code",
          language: "typescript",
          title: "collections.ts",
          code: `export const SNIPPET_COLLECTIONS = [
  { slug: "buttons", title: "Buttons", cardSize: "compact" },
  { slug: "cards", title: "Cards", cardSize: "wide" },
] as const satisfies readonly SnippetCollection[];

// "buttons" | "cards" — derived, never out of date
export type CollectionSlug = (typeof SNIPPET_COLLECTIONS)[number]["slug"];`,
        },
      ],
    },
    {
      id: "exhaustive",
      heading: "Exhaustive switches",
      blocks: [
        {
          type: "paragraph",
          text: "Return from every case and let the function's return type do the work. When a new variant is added, the compiler points at every switch that must handle it.",
        },
        {
          type: "code",
          language: "typescript",
          code: `function assertNever(value: never): never {
  throw new Error(\`Unhandled value: \${JSON.stringify(value)}\`);
}

function label(status: "success" | "error" | "cancelled") {
  switch (status) {
    case "success": return "Success";
    case "error": return "Failed";
    case "cancelled": return "Cancelled";
    default: return assertNever(status);
  }
}`,
        },
      ],
    },
    {
      id: "generic-components",
      heading: "Generic components",
      blocks: [
        {
          type: "paragraph",
          text: "A generic prop type lets one component stay strictly typed for any set of values — the caller's literal union flows into `onValueChange`.",
        },
        {
          type: "code",
          language: "tsx",
          code: `type Option<Value extends string> = { value: Value; label: string };

function SegmentedControl<Value extends string>(props: {
  options: Option<Value>[];
  value: Value;
  onValueChange: (value: Value) => void;
}) {
  /* ... */
}

<SegmentedControl
  options={[{ value: "dark", label: "Dark" }, { value: "light", label: "Light" }]}
  value={appearance}
  onValueChange={setAppearance} // (value: "dark" | "light") => void
/>`,
        },
      ],
    },
    {
      id: "strictness",
      heading: "Compiler options worth enabling",
      blocks: [
        {
          type: "table",
          columns: ["Option", "What it catches"],
          rows: [
            [
              "`strict`",
              "Implicit any, unchecked null and undefined, unsafe `this`",
            ],
            [
              "`noUncheckedIndexedAccess`",
              "`array[i]` and `record[key]` may be undefined",
            ],
            [
              "`exactOptionalPropertyTypes`",
              "Passing `undefined` where a prop must be omitted",
            ],
            [
              "`verbatimModuleSyntax`",
              "Type-only imports that would leak into runtime code",
            ],
          ],
        },
      ],
    },
  ],
};
