"use client";

import { renderToStaticMarkup } from "react-dom/server";

import type { Snippet } from "@/types/snippet";

export function SnippetPreview({ snippet }: { snippet: Snippet }) {
  if ("html" in snippet) {
    return <div dangerouslySetInnerHTML={{ __html: snippet.html }} />;
  }

  return <>{snippet.content}</>;
}

export function getSnippetMarkup(snippet: Snippet) {
  return renderToStaticMarkup(<SnippetPreview snippet={snippet} />);
}
