"use client";

import { Minus, Plus, Settings2 } from "lucide-react";
import { type ReactNode, useId } from "react";
import { useShallow } from "zustand/react/shallow";

import { POPOVER_SURFACE_CLASS_NAME } from "@/features/code-editor/components/panel";
import {
  MAX_FONT_SIZE,
  MIN_FONT_SIZE,
  useCodeEditorStore,
} from "@/features/code-editor/store/code-editor-store";
import { IconButton } from "@/components/ui/icon-button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

function SettingRow({
  label,
  description,
  htmlFor,
  children,
}: {
  label: string;
  description: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <label htmlFor={htmlFor} className="min-w-0 cursor-pointer">
        <span className="block text-sm text-zinc-200">{label}</span>
        <span className="block text-xs text-zinc-500">{description}</span>
      </label>
      {children}
    </div>
  );
}

function StepButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex size-7 items-center justify-center rounded-md text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-30"
    >
      {children}
    </button>
  );
}

export function EditorSettings() {
  const id = useId();
  const { fontSize, wordWrap, minimap, setFontSize, setWordWrap, setMinimap } =
    useCodeEditorStore(
      useShallow((state) => ({
        fontSize: state.fontSize,
        wordWrap: state.wordWrap,
        minimap: state.minimap,
        setFontSize: state.setFontSize,
        setWordWrap: state.setWordWrap,
        setMinimap: state.setMinimap,
      }))
    );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton label="Editor settings" tooltipAlign="end">
          <Settings2 />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn(POPOVER_SURFACE_CLASS_NAME, "w-72 space-y-4 p-4")}
      >
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Editor settings
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span id={`${id}-font`} className="text-sm text-zinc-200">
              Font size
            </span>
            <div className="flex items-center gap-1 rounded-lg bg-white/5 p-0.5 ring-1 ring-inset ring-white/10">
              <StepButton
                label="Decrease font size"
                disabled={fontSize <= MIN_FONT_SIZE}
                onClick={() => setFontSize(fontSize - 1)}
              >
                <Minus className="size-3.5" />
              </StepButton>
              <span className="w-10 text-center text-xs font-medium tabular-nums text-zinc-200">
                {fontSize}px
              </span>
              <StepButton
                label="Increase font size"
                disabled={fontSize >= MAX_FONT_SIZE}
                onClick={() => setFontSize(fontSize + 1)}
              >
                <Plus className="size-3.5" />
              </StepButton>
            </div>
          </div>
          <Slider
            aria-labelledby={`${id}-font`}
            min={MIN_FONT_SIZE}
            max={MAX_FONT_SIZE}
            step={1}
            value={[fontSize]}
            onValueChange={([value]) => value && setFontSize(value)}
            className="[&>span:first-child]:h-1.5 [&>span:first-child]:bg-white/10 [&>span:first-child>span]:bg-blue-500 [&_[role=slider]]:size-4 [&_[role=slider]]:border-blue-500 [&_[role=slider]]:bg-white"
          />
        </div>

        <div className="h-px bg-white/10" />

        <SettingRow
          label="Word wrap"
          description="Wrap long lines to the viewport"
          htmlFor={`${id}-wrap`}
        >
          <Switch
            id={`${id}-wrap`}
            size="sm"
            checked={wordWrap}
            onCheckedChange={setWordWrap}
          />
        </SettingRow>
        <SettingRow
          label="Minimap"
          description="Show the code overview on the right"
          htmlFor={`${id}-minimap`}
        >
          <Switch
            id={`${id}-minimap`}
            size="sm"
            checked={minimap}
            onCheckedChange={setMinimap}
          />
        </SettingRow>
      </PopoverContent>
    </Popover>
  );
}
