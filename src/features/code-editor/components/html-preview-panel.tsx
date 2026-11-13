"use client";

import { Globe, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react";
import { useEffect, useState } from "react";

import {
  Panel,
  PanelBody,
  PanelHeader,
  PanelTitle,
} from "@/features/code-editor/components/panel";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import { IconButton } from "@/components/ui/icon-button";
import {
  SegmentedControl,
  type SegmentedControlOption,
} from "@/components/ui/segmented-control";
import { cn } from "@/lib/utils";

const PREVIEW_DEBOUNCE_MS = 400;

type Viewport = "desktop" | "tablet" | "mobile";

const VIEWPORT_WIDTHS: Record<Viewport, number | null> = {
  desktop: null,
  tablet: 768,
  mobile: 390,
};

const VIEWPORT_OPTIONS: SegmentedControlOption<Viewport>[] = [
  {
    value: "desktop",
    label: "Desktop",
    icon: <Monitor className="size-3.5" />,
  },
  { value: "tablet", label: "Tablet", icon: <Tablet className="size-3.5" /> },
  {
    value: "mobile",
    label: "Mobile",
    icon: <Smartphone className="size-3.5" />,
  },
];

export function HtmlPreviewPanel() {
  const code = useCodeEditorStore((state) => state.code);
  const [previewCode, setPreviewCode] = useState(code);
  const [viewport, setViewport] = useState<Viewport>("desktop");
  const [reloadKey, setReloadKey] = useState(0);
  const width = VIEWPORT_WIDTHS[viewport];

  useEffect(() => {
    const timeout = setTimeout(() => setPreviewCode(code), PREVIEW_DEBOUNCE_MS);
    return () => clearTimeout(timeout);
  }, [code]);

  return (
    <Panel aria-label="HTML preview" className="h-full">
      <PanelHeader>
        <PanelTitle icon={<Globe />}>Preview</PanelTitle>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
          <span className="size-1.5 animate-pulse rounded-full bg-emerald-400" />
          Live
        </span>
        <div className="ml-auto flex items-center gap-1">
          <SegmentedControl
            label="Preview viewport"
            options={VIEWPORT_OPTIONS}
            value={viewport}
            onValueChange={setViewport}
            iconOnly
          />
          <IconButton
            label="Reload preview"
            tooltipAlign="end"
            onClick={() => {
              setPreviewCode(useCodeEditorStore.getState().code);
              setReloadKey((key) => key + 1);
            }}
          >
            <RefreshCw />
          </IconButton>
        </div>
      </PanelHeader>
      <PanelBody className="flex flex-col bg-[#08080f] bg-[radial-gradient(#ffffff0f_1px,transparent_1px)] [background-size:16px_16px]">
        <div
          className={cn(
            "mx-auto flex h-full w-full min-h-0 flex-col transition-[max-width] duration-300 ease-out",
            width && "py-4"
          )}
          style={{ maxWidth: width ?? "100%" }}
        >
          <iframe
            key={reloadKey}
            title="HTML preview"
            srcDoc={previewCode}
            sandbox="allow-scripts allow-forms allow-modals"
            className={cn(
              "min-h-0 w-full flex-1 border-0 bg-white",
              width &&
                "rounded-lg shadow-2xl shadow-black/60 ring-1 ring-white/10"
            )}
          />
          {width && (
            <p className="pt-2 text-center text-[11px] tabular-nums text-zinc-500">
              {width}px
            </p>
          )}
        </div>
      </PanelBody>
    </Panel>
  );
}
