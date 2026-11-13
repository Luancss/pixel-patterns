import { renderToStaticMarkup } from "react-dom/server";

import { formatMarkup } from "@/features/snippets/lib/format-markup";
import type { Snippet } from "@/features/snippets/types";

/** Returns the formatted, copy-ready markup of a snippet. */
export function getSnippetCode(snippet: Snippet) {
  const markup =
    "html" in snippet
      ? snippet.html
      : renderToStaticMarkup(<>{snippet.content}</>);

  return formatMarkup(markup);
}
