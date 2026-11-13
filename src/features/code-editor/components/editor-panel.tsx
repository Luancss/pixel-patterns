"use client";

import dynamic from "next/dynamic";

import { EditorActions } from "@/features/code-editor/components/editor-actions";
import { LanguageIcon } from "@/features/code-editor/components/language-icon";
import { LanguageSelector } from "@/features/code-editor/components/language-selector";
import {
  Panel,
  PanelBody,
  PanelHeader,
  ToolbarDivider,
} from "@/features/code-editor/components/panel";
import { RunButton } from "@/features/code-editor/components/run-button";
import { EditorSurfaceSkeleton } from "@/features/code-editor/components/skeletons";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { LANGUAGES } from "@/features/code-editor/config/languages";

const EditorSurface = dynamic(
  () =>
    import("@/features/code-editor/components/editor-surface").then(
      (mod) => mod.EditorSurface
    ),
  { loading: () => <EditorSurfaceSkeleton />, ssr: false }
);

function FileTab() {
  const language = useCodeEditorStore((state) => state.language);
  const definition = LANGUAGES[language];

  return (
    <span className="inline-flex h-8 min-w-0 items-center gap-2 px-1 text-sm font-medium text-zinc-200">
      <LanguageIcon language={definition} />
      <span className="truncate">{definition.fileName}</span>
    </span>
  );
}

export function EditorPanel() {
  const language = useCodeEditorStore((state) => state.language);
  const definition = LANGUAGES[language];
  const isRunnable = definition.runtime.kind !== "preview";

  return (
    <Panel aria-label="Code editor" className="h-full">
      <PanelHeader>
        {isRunnable ? (
          <>
            <LanguageSelector />
            <span className="hidden truncate font-mono text-xs text-zinc-500 sm:inline">
              {definition.fileName}
            </span>
          </>
        ) : (
          <FileTab />
        )}

        <div className="ml-auto flex items-center gap-1">
          <EditorActions />
          {isRunnable && (
            <>
              <ToolbarDivider />
              <RunButton />
            </>
          )}
        </div>
      </PanelHeader>
      <PanelBody>
        <EditorSurface />
      </PanelBody>
    </Panel>
  );
}
