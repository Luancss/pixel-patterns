"use client";

import { Keyboard } from "lucide-react";

import { POPOVER_SURFACE_CLASS_NAME } from "@/features/code-editor/components/panel";
import { IconButton } from "@/components/ui/icon-button";
import { Kbd } from "@/components/ui/kbd";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMac } from "@/hooks/use-is-mac";
import { cn } from "@/lib/utils";

type Shortcut = {
  label: string;
  keys: (isMac: boolean) => string[];
};

const mod = (isMac: boolean) => (isMac ? "⌘" : "Ctrl");
const alt = (isMac: boolean) => (isMac ? "⌥" : "Alt");

const SHORTCUTS: Shortcut[] = [
  { label: "Run / stop code", keys: (isMac) => [mod(isMac), "Enter"] },
  { label: "Save locally", keys: (isMac) => [mod(isMac), "S"] },
  { label: "Find", keys: (isMac) => [mod(isMac), "F"] },
  {
    label: "Find and replace",
    keys: (isMac) => (isMac ? ["⌥", "⌘", "F"] : ["Ctrl", "H"]),
  },
  { label: "Toggle comment", keys: (isMac) => [mod(isMac), "/"] },
  { label: "Move line up / down", keys: (isMac) => [alt(isMac), "↑ ↓"] },
  { label: "Add cursor", keys: (isMac) => [alt(isMac), "Click"] },
  { label: "Command palette", keys: () => ["F1"] },
];

export function RunShortcutHint({ className }: { className?: string }) {
  const isMac = useIsMac();

  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      <Kbd>{mod(isMac)}</Kbd>
      <Kbd>↵</Kbd>
    </span>
  );
}

export function KeyboardShortcuts() {
  const isMac = useIsMac();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <IconButton label="Keyboard shortcuts" tooltipAlign="end">
          <Keyboard />
        </IconButton>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn(POPOVER_SURFACE_CLASS_NAME, "w-72 p-4")}
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Keyboard shortcuts
        </p>
        <ul className="space-y-2">
          {SHORTCUTS.map(({ label, keys }) => (
            <li
              key={label}
              className="flex items-center justify-between gap-4 text-sm text-zinc-300"
            >
              {label}
              <span className="flex shrink-0 items-center gap-0.5">
                {keys(isMac).map((key) => (
                  <Kbd key={key}>{key}</Kbd>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
