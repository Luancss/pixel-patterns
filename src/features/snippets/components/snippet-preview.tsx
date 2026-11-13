"use client";

import type { Snippet } from "@/features/snippets/types";

export function SnippetPreview({ snippet }: { snippet: Snippet }) {
  if ("html" in snippet) {
    return <div dangerouslySetInnerHTML={{ __html: snippet.html }} />;
  }

  return <>{snippet.content}</>;
}
