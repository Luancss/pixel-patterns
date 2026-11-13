import { FileCode2 } from "lucide-react";

import { CopyTextButton } from "@/components/ui/copy-text-button";
import {
  type CodeLanguage,
  CodeView,
} from "@/features/code-highlight/components/code-view";
import {
  getHighlightTheme,
  type HighlightThemeName,
} from "@/features/code-highlight/config/highlight-themes";
import { cn } from "@/lib/utils";

const DEFAULT_THEME: HighlightThemeName = "holiTheme";

const LANGUAGE_LABELS: Record<CodeLanguage, string> = {
  markup: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  typescript: "TypeScript",
  jsx: "JSX",
  tsx: "TSX",
  bash: "Shell",
  json: "JSON",
};

type CodeBlockProps = {
  code: string;
  language: CodeLanguage;
  title?: string;
  theme?: HighlightThemeName;
  wrap?: boolean;
  className?: string;
};

/**
 * Highlighted code with a header and a copy action. A Server Component:
 * tokenizing happens on the server, so Prism never ships to the browser.
 */
export function CodeBlock({
  code,
  language,
  title,
  theme = DEFAULT_THEME,
  wrap = false,
  className,
}: CodeBlockProps) {
  return (
    <figure
      className={cn(
        "my-4 overflow-hidden rounded-xl border border-white/10 bg-[#0c0c12] shadow-2xl shadow-black/30",
        className
      )}
    >
      <figcaption className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-400">
        <FileCode2 className="size-3.5 shrink-0 text-zinc-500" />
        <span className="truncate font-medium">
          {title ?? LANGUAGE_LABELS[language]}
        </span>
        {title && (
          <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
            {LANGUAGE_LABELS[language]}
          </span>
        )}
        <CopyTextButton text={code} className="ml-auto" />
      </figcaption>
      <CodeView
        code={code}
        language={language}
        theme={getHighlightTheme(theme)}
        wrap={wrap}
      />
    </figure>
  );
}
