"use client";

import { renderToStaticMarkup } from "react-dom/server";

import { formatMarkup } from "@/components/snippets/format-markup";
import type { Snippet } from "@/types/snippet";

export function SnippetPreview({ snippet }: { snippet: Snippet }) {
  if ("html" in snippet) {
    return <div dangerouslySetInnerHTML={{ __html: snippet.html }} />;
  }

  return <>{snippet.content}</>;
}

export function getSnippetCode(snippet: Snippet) {
  const markup =
    "html" in snippet
      ? snippet.html
      : renderToStaticMarkup(<>{snippet.content}</>);

  return formatMarkup(markup);
}
