"use client";

import { Globe, SquareTerminal } from "lucide-react";

import {
  type EditorMode,
  useCodeEditorStore,
} from "@/features/code-editor/store/code-editor-store";
import { HTML_LANGUAGE_ID } from "@/features/code-editor/config/languages";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";

const MODE_OPTIONS: SegmentedControlOption<EditorMode>[] = [
  {
    value: "code",
    label: "Code",
    icon: <SquareTerminal className="size-3.5" />,
  },
  { value: "html", label: "HTML", icon: <Globe className="size-3.5" /> },
];

export function ModeSwitch() {
  const isHtmlMode = useCodeEditorStore(
    (state) => state.language === HTML_LANGUAGE_ID
  );
  const setMode = useCodeEditorStore((state) => state.setMode);

  return (
    <SegmentedControl
      label="Editor mode"
      options={MODE_OPTIONS}
      value={isHtmlMode ? "html" : "code"}
      onValueChange={setMode}
    />
  );
}
