import type { ReactNode } from "react";

/** Technology a snippet is written with (the `category` field of a snippet). */
export type SnippetCategory = "css" | "tailwind";

/** Card footprint used by the gallery grid of a collection. */
export type SnippetCardSize = "compact" | "wide" | "large";

type SnippetBase = {
  category: SnippetCategory;
  background: string;
  iconColor: string;
};

type HtmlSnippet = SnippetBase & { html: string };

type JsxSnippet = SnippetBase & { content: ReactNode };

export type Snippet = HtmlSnippet | JsxSnippet;
