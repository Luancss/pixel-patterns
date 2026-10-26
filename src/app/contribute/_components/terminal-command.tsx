"use client";

import { Check, CopyIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";

export function TerminalCommand({ commands }: { commands: string[] }) {
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);
  const Icon = isCopied ? Check : CopyIcon;

  return (
    <div className="flex flex-col rounded-lg overflow-hidden my-6">
      <div className="bg-gray-800 text-sm text-gray-200 px-6 py-1 flex items-center justify-between">
        <p>Bash</p>
        <Button onClick={() => copy(commands.join("\n"))} variant="link">
          <Icon size={20} color="#fff" />
          <p className="ml-2 text-gray-100 text-xs">
            {isCopied ? "Code Copied" : "Copy Code"}
          </p>
        </Button>
      </div>
      <div className="text-base bg-black px-6 py-5">
        {commands.map((command) => (
          <p key={command} className="text-gray-300 flex flex-col gap-y-2">
            {command}
          </p>
        ))}
      </div>
    </div>
  );
}
