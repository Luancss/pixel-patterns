"use client";

import { CodeView } from "@/components/snippets/code-view";
import { getHighlightTheme } from "@/components/snippets/highlight-themes";
import { CopyButton } from "@/components/ui/copy-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";

const TEMPLATE_THEME = getHighlightTheme("dracula");

export function TemplateCodeBlock({ code }: { code: string }) {
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);

  return (
    <div className="relative">
      <CodeView
        code={code}
        language="javascript"
        theme={TEMPLATE_THEME}
        className="my-2 rounded-md"
      />
      <CopyButton
        isCopied={isCopied}
        onCopy={() => copy(code)}
        color="#fff"
        className="absolute top-0 right-0"
      />
    </div>
  );
}
