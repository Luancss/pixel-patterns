import { Fragment } from "react";

/** Renders text, turning `backtick` spans into inline code. */
export function InlineText({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/).map((part, index) =>
        part.startsWith("`") && part.endsWith("`") && part.length > 1 ? (
          <code
            key={index}
            className="rounded-md bg-white/[0.08] px-1.5 py-0.5 font-mono text-[0.85em] text-zinc-100 ring-1 ring-inset ring-white/10"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        )
      )}
    </>
  );
}
