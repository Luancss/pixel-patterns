"use client";

import { CodeBlock, dracula } from "@react-email/code-block";

import { CopyButton } from "@/components/ui/copy-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";

export function TemplateCodeBlock({ code }: { code: string }) {
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);

  return (
    <div className="relative">
      <CodeBlock
        code={code}
        lineNumbers
        theme={dracula}
        language="javascript"
      />
      <div>
        <CopyButton
          isCopied={isCopied}
          onCopy={() => copy(code)}
          color="#fff"
          className="absolute top-0 right-0"
        />
      </div>
    </div>
  );
}
