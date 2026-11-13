import type { SnippetCollectionSlug } from "@/features/snippets/config/collections";
import { buttonSnippets } from "@/features/snippets/data/buttons";
import { cardSnippets } from "@/features/snippets/data/cards";
import { checkboxSnippets } from "@/features/snippets/data/checkboxes";
import { codeBlockSnippets } from "@/features/snippets/data/code-blocks";
import { dataDisplaySnippets } from "@/features/snippets/data/data-display";
import { documentationSnippets } from "@/features/snippets/data/documentation";
import { feedbackSnippets } from "@/features/snippets/data/feedback";
import { formSnippets } from "@/features/snippets/data/forms";
import { inputSnippets } from "@/features/snippets/data/inputs";
import { loaderSnippets } from "@/features/snippets/data/loaders";
import { navigationSnippets } from "@/features/snippets/data/navigation";
import { overlaySnippets } from "@/features/snippets/data/overlays";
import type { Snippet } from "@/features/snippets/types";

/**
 * Snippet content per collection. Import it only from Server Components so
 * the (large) catalog never ships to the browser; client code should rely on
 * `SNIPPET_COLLECTIONS` metadata instead.
 */
export const COLLECTION_SNIPPETS: Record<SnippetCollectionSlug, Snippet[]> = {
  buttons: buttonSnippets,
  inputs: inputSnippets,
  loaders: loaderSnippets,
  cards: cardSnippets,
  checkboxes: checkboxSnippets,
  forms: formSnippets,
  navigation: navigationSnippets,
  feedback: feedbackSnippets,
  overlays: overlaySnippets,
  "data-display": dataDisplaySnippets,
  "code-blocks": codeBlockSnippets,
  documentation: documentationSnippets,
};
