"use client";

import { Check, Copy, Download, RotateCcw } from "lucide-react";
import { toast } from "sonner";

import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { downloadTextFile } from "@/lib/download-file";
import { LANGUAGES } from "@/features/code-editor/config/languages";
import { IconButton } from "@/components/ui/icon-button";
import {
  CODE_COPY_MESSAGES,
  useCopyToClipboard,
} from "@/hooks/use-copy-to-clipboard";

export function EditorActions() {
  const language = useCodeEditorStore((state) => state.language);
  const resetCode = useCodeEditorStore((state) => state.resetCode);
  const { isCopied, copy } = useCopyToClipboard(CODE_COPY_MESSAGES);
  const { fileName } = LANGUAGES[language];

  const getCode = () => useCodeEditorStore.getState().code;

  const handleReset = () => {
    if (!resetCode()) return;

    toast("Code reset to the starter template", {
      id: "editor-reset",
      action: {
        label: "Undo",
        onClick: () =>
          useCodeEditorStore.getState().editor?.trigger("toast", "undo", null),
      },
    });
  };

  return (
    <div className="flex items-center">
      <IconButton
        label={isCopied ? "Code copied" : "Copy code"}
        onClick={() => copy(getCode())}
      >
        {isCopied ? <Check className="text-emerald-400" /> : <Copy />}
      </IconButton>
      <IconButton
        label={`Download ${fileName}`}
        onClick={() => downloadTextFile(fileName, getCode())}
      >
        <Download />
      </IconButton>
      <IconButton label="Reset to starter template" onClick={handleReset}>
        <RotateCcw />
      </IconButton>
    </div>
  );
}
