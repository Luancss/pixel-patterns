import type { Resource, ResourceBlock } from "@/features/resources/types";

const WORDS_PER_MINUTE = 220;
/** Code is skimmed slower than prose, so it counts double. */
const CODE_WEIGHT = 2;

function countWords(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}

function blockWords(block: ResourceBlock) {
  switch (block.type) {
    case "paragraph":
    case "callout":
      return countWords(block.text);
    case "list":
      return countWords(block.items.join(" "));
    case "code":
      return countWords(block.code) * CODE_WEIGHT;
    case "terminal":
      return countWords(block.commands.join(" ")) * CODE_WEIGHT;
    case "table":
      return countWords([...block.columns, ...block.rows.flat()].join(" "));
  }
}

export function getReadingMinutes(resource: Resource) {
  const words = resource.sections
    .flatMap((section) => section.blocks)
    .reduce((total, block) => total + blockWords(block), 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
