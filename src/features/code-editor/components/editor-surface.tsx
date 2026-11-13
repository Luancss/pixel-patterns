"use client";

import { Editor, type OnMount } from "@monaco-editor/react";
import { useShallow } from "zustand/react/shallow";

import { EditorSurfaceSkeleton } from "@/features/code-editor/components/skeletons";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { LANGUAGES } from "@/features/code-editor/config/languages";
import {
  configureMonaco,
  EDITOR_OPTIONS,
  remeasureWhenFontLoads,
} from "@/features/code-editor/lib/monaco-setup";

export function EditorSurface() {
  const {
    language,
    theme,
    fontSize,
    wordWrap,
    minimap,
    getInitialCode,
    setEditor,
    setCode,
    setCursor,
  } = useCodeEditorStore(
    useShallow((state) => ({
      language: state.language,
      theme: state.theme,
      fontSize: state.fontSize,
      wordWrap: state.wordWrap,
      minimap: state.minimap,
      getInitialCode: state.getInitialCode,
      setEditor: state.setEditor,
      setCode: state.setCode,
      setCursor: state.setCursor,
    }))
  );
  const definition = LANGUAGES[language];

  const handleMount: OnMount = (editor, monaco) => {
    setEditor(editor, monaco);
    remeasureWhenFontLoads(monaco);

    editor.onDidChangeCursorSelection(({ selection }) => {
      const model = editor.getModel();
      setCursor({
        line: selection.positionLineNumber,
        column: selection.positionColumn,
        selectedCharacters: model ? model.getValueInRange(selection).length : 0,
      });
    });

    // Each language has its own model (via `path`); keep the store in sync
    // when the editor swaps models after a language change.
    editor.onDidChangeModel(() => {
      setCode(editor.getValue(), { persist: false });
      setCursor({ line: 1, column: 1, selectedCharacters: 0 });
    });

    editor.focus();
  };

  return (
    <Editor
      height="100%"
      path={definition.fileName}
      language={definition.monacoLanguage}
      defaultValue={getInitialCode(language)}
      theme={theme}
      beforeMount={configureMonaco}
      onMount={handleMount}
      onChange={(value) => setCode(value ?? "")}
      loading={<EditorSurfaceSkeleton />}
      options={{
        ...EDITOR_OPTIONS,
        fontSize,
        wordWrap: wordWrap ? "on" : "off",
        minimap: { enabled: minimap, renderCharacters: false, scale: 1 },
      }}
    />
  );
}
