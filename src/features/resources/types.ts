import type { CodeLanguage } from "@/features/code-highlight/components/code-view";

/** Text fields support `inline code` wrapped in backticks. */
export type ResourceBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; language: CodeLanguage; code: string; title?: string }
  | { type: "terminal"; commands: string[] }
  | { type: "callout"; tone: "note" | "tip" | "warning"; text: string }
  | { type: "table"; columns: string[]; rows: string[][] };

export type ResourceSection = {
  id: string;
  heading: string;
  blocks: ResourceBlock[];
};

export type ResourceCategoryId =
  | "css"
  | "accessibility"
  | "react"
  | "typescript"
  | "performance"
  | "api"
  | "workflow";

export type ResourceLevel = "Beginner" | "Intermediate" | "Advanced";

export type Resource = {
  slug: string;
  title: string;
  summary: string;
  category: ResourceCategoryId;
  level: ResourceLevel;
  sections: ResourceSection[];
};
