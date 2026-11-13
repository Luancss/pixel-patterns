"use client";

import { useEffect } from "react";

import { CodeOutputPanel } from "@/features/code-editor/components/code-output-panel";
import { EditorHeader } from "@/features/code-editor/components/editor-header";
import { EditorPanel } from "@/features/code-editor/components/editor-panel";
import { HtmlPreviewPanel } from "@/features/code-editor/components/html-preview-panel";
import { ResizableSplit } from "@/features/code-editor/components/resizable-split";
import { CodeEditorSkeleton } from "@/features/code-editor/components/skeletons";
import { StatusBar } from "@/features/code-editor/components/status-bar";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import {
  EDITOR_AREA_CLASS_NAME,
  OUTPUT_AREA_CLASS_NAME,
  WORKSPACE_CLASS_NAME,
} from "@/features/code-editor/config/layout";
import { HTML_LANGUAGE_ID } from "@/features/code-editor/config/languages";
import { useEditorShortcuts } from "@/features/code-editor/hooks/use-editor-shortcuts";

function Workspace() {
  const isHtmlMode = useCodeEditorStore(
    (state) => state.language === HTML_LANGUAGE_ID
  );
  useEditorShortcuts();

  return (
    <>
      <EditorHeader />
      <ResizableSplit
        storageKey="editor-split-ratio"
        className={WORKSPACE_CLASS_NAME}
        start={
          <div className={EDITOR_AREA_CLASS_NAME}>
            <EditorPanel />
          </div>
        }
        end={
          <div className={OUTPUT_AREA_CLASS_NAME}>
            {isHtmlMode ? <HtmlPreviewPanel /> : <CodeOutputPanel />}
          </div>
        }
      />
      <StatusBar />
    </>
  );
}

export function CodeEditor() {
  const isHydrated = useCodeEditorStore((state) => state.isHydrated);
  const hydrate = useCodeEditorStore((state) => state.hydrate);

  // Preferences live in localStorage, so they are applied after mount to keep
  // the server render and the first client render identical.
  useEffect(hydrate, [hydrate]);

  return (
    <div className="-mt-24 w-full">
      <div className="mx-auto flex max-w-[1800px] flex-col gap-3 p-3 sm:p-4">
        {isHydrated ? <Workspace /> : <CodeEditorSkeleton />}
      </div>
    </div>
  );
}
