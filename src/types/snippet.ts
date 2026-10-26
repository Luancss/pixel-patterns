import type { ReactNode } from "react";

export type SnippetCategory = "css" | "tailwind";

type SnippetBase = {
  category: SnippetCategory;
  background: string;
  iconColor: string;
};

type HtmlSnippet = SnippetBase & { html: string };

type JsxSnippet = SnippetBase & { content: ReactNode };

export type Snippet = HtmlSnippet | JsxSnippet;
