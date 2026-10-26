import { SnippetCard } from "@/components/snippets/snippet-card";
import type { Snippet } from "@/types/snippet";

import styles from "./snippet-marquee.module.css";

export function SnippetMarquee({ rows }: { rows: Snippet[][] }) {
  return (
    <div className="space-y-5 border-x-2">
      {rows.map((row, rowIndex) => {
        const seamlessLoop = [...row, ...row];

        return (
          <div
            key={rowIndex}
            className={styles.row}
            data-direction={rowIndex % 2 === 0 ? "left" : "right"}
          >
            <div className={styles.track}>
              {seamlessLoop.map((snippet, index) => (
                <SnippetCard key={index} snippet={snippet} size="compact" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
