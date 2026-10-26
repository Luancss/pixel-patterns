"use client";

import { PlayIcon, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

import { useCodeEditorStore } from "@/app/code-editor/_lib/code-editor-store";

const PREVIEW_REFRESH_INTERVAL_MS = 500;

export function HtmlPreviewPanel() {
  const getCode = useCodeEditorStore((state) => state.getCode);
  const [previewCode, setPreviewCode] = useState("");

  useEffect(() => {
    setPreviewCode(getCode());

    const interval = setInterval(
      () => setPreviewCode(getCode()),
      PREVIEW_REFRESH_INTERVAL_MS
    );
    return () => clearInterval(interval);
  }, [getCode]);

  return (
    <div className="bg-[#060611]/60 backdrop-blur border border-blue-800/30 rounded-xl p-4 ring-1 ring-gray-800/50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Output</span>
        </div>
      </div>

      <div className="rounded-xl flex items-center justify-center overflow-hidden w-full h-[90%] p-6">
        {previewCode ? (
          <div className="bg-[#1e1e2e] rounded-xl flex items-center justify-center min-h-[500px] w-full">
            <iframe
              title="Preview"
              srcDoc={previewCode}
              className="w-full min-h-[inherit] h-[100%] border-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              sandbox="allow-scripts"
            />
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <PlayIcon className="size-12 mx-auto mb-4 text-gray-600" />
            <p className="text-sm">No code found</p>
          </div>
        )}
      </div>
    </div>
  );
}
