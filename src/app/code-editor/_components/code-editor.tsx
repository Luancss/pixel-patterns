"use client";

import dynamic from "next/dynamic";

import { EditorHeader } from "@/app/code-editor/_components/editor-header";
import {
  EditorPanelSkeleton,
  OutputPanelSkeleton,
} from "@/app/code-editor/_components/skeletons";
import { useCodeEditorStore } from "@/app/code-editor/_lib/code-editor-store";
import { HTML_LANGUAGE_ID } from "@/app/code-editor/_lib/languages";
import { Button } from "@/components/ui/button";

const EditorPanel = dynamic(
  () =>
    import("@/app/code-editor/_components/editor-panel").then(
      (mod) => mod.EditorPanel
    ),
  { loading: () => <EditorPanelSkeleton />, ssr: false }
);

const CodeOutputPanel = dynamic(
  () =>
    import("@/app/code-editor/_components/code-output-panel").then(
      (mod) => mod.CodeOutputPanel
    ),
  { loading: () => <OutputPanelSkeleton />, ssr: false }
);

const HtmlPreviewPanel = dynamic(
  () =>
    import("@/app/code-editor/_components/html-preview-panel").then(
      (mod) => mod.HtmlPreviewPanel
    ),
  { loading: () => <OutputPanelSkeleton />, ssr: false }
);

const CODE_MODE_LANGUAGE_ID = "typescript";

export function CodeEditor() {
  const language = useCodeEditorStore((state) => state.language);
  const setLanguage = useCodeEditorStore((state) => state.setLanguage);
  const isHtmlMode = language === HTML_LANGUAGE_ID;

  return (
    <div className="w-full -mt-24">
      <div className="max-w-[1800px] mx-auto p-4">
        <EditorHeader />
        <div className="flex items-center gap-4 my-5">
          <Button
            className="bg-blue-600/20 text-blue-700"
            onClick={() => setLanguage(CODE_MODE_LANGUAGE_ID)}
          >
            CODE
          </Button>
          <Button
            className="bg-blue-600/20 text-blue-700"
            onClick={() => setLanguage(HTML_LANGUAGE_ID)}
          >
            HTML
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          {isHtmlMode ? <HtmlPreviewPanel /> : <CodeOutputPanel />}
        </div>
      </div>
    </div>
  );
}
