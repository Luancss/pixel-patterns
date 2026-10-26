import Prism from "prismjs";
import type { CSSProperties } from "react";

import type { HighlightTheme } from "@/components/snippets/highlight-themes";
import { cn } from "@/lib/utils";

export type CodeLanguage = "markup" | "javascript";

type Segment = {
  text: string;
  style?: CSSProperties;
};

type CodeViewProps = {
  code: string;
  language: CodeLanguage;
  theme: HighlightTheme;
  wrap?: boolean;
  className?: string;
};

function getTokenStyle(token: Prism.Token, tokens: HighlightTheme["tokens"]) {
  const aliases = Array.isArray(token.alias)
    ? token.alias
    : token.alias
      ? [token.alias]
      : [];

  return [token.type, ...aliases].reduce<CSSProperties>(
    (style, key) => ({ ...style, ...tokens[key] }),
    {}
  );
}

function collectSegments(
  stream: Prism.TokenStream,
  tokens: HighlightTheme["tokens"],
  inheritedStyle: CSSProperties | undefined,
  segments: Segment[]
) {
  if (typeof stream === "string") {
    segments.push({ text: stream, style: inheritedStyle });
  } else if (Array.isArray(stream)) {
    stream.forEach((token) =>
      collectSegments(token, tokens, inheritedStyle, segments)
    );
  } else {
    collectSegments(
      stream.content,
      tokens,
      { ...inheritedStyle, ...getTokenStyle(stream, tokens) },
      segments
    );
  }
}

function tokenizeLines(
  code: string,
  language: CodeLanguage,
  tokens: HighlightTheme["tokens"]
) {
  const grammar = Prism.languages[language];
  const segments: Segment[] = [];
  collectSegments(
    grammar ? Prism.tokenize(code, grammar) : code,
    tokens,
    undefined,
    segments
  );

  const lines: Segment[][] = [[]];
  for (const segment of segments) {
    segment.text.split("\n").forEach((text, index) => {
      if (index > 0) lines.push([]);
      if (text) lines[lines.length - 1]?.push({ ...segment, text });
    });
  }
  return lines;
}

export function CodeView({
  code,
  language,
  theme,
  wrap = false,
  className,
}: CodeViewProps) {
  const lines = tokenizeLines(code, language, theme.tokens);
  const gutterStyle: CSSProperties = {
    width: `${String(lines.length).length + 3}ch`,
    background: theme.background,
    color: `color-mix(in srgb, ${theme.foreground} 45%, transparent)`,
  };

  return (
    <div
      className={cn("custom-scrollbar overflow-auto", className)}
      style={{ background: theme.background, color: theme.foreground }}
    >
      <pre
        className={cn(
          "min-w-full py-4 font-mono text-[13px] leading-6",
          wrap ? "w-full" : "w-max"
        )}
      >
        <code className="block">
          {lines.map((line, lineIndex) => (
            <span key={lineIndex} className="flex">
              <span
                aria-hidden="true"
                className="sticky left-0 shrink-0 select-none pr-4 text-right tabular-nums"
                style={gutterStyle}
              >
                {lineIndex + 1}
              </span>
              <span
                className={cn(
                  "pr-6",
                  wrap
                    ? "min-w-0 flex-1 whitespace-pre-wrap break-words"
                    : "whitespace-pre"
                )}
              >
                {line.map((segment, segmentIndex) => (
                  <span key={segmentIndex} style={segment.style}>
                    {segment.text}
                  </span>
                ))}
              </span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
