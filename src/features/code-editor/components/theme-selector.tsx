"use client";

import { Check, ChevronsUpDown, Moon, Sun } from "lucide-react";
import { useState } from "react";

import {
  COMMAND_GROUP_CLASS_NAME,
  COMMAND_ITEM_CLASS_NAME,
  COMMAND_SURFACE_CLASS_NAME,
  POPOVER_SURFACE_CLASS_NAME,
  TRIGGER_CLASS_NAME,
} from "@/features/code-editor/components/panel";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import {
  EDITOR_THEME_GROUPS,
  getEditorTheme,
} from "@/features/code-editor/config/editor-themes";
import type { EditorTheme } from "@/features/code-editor/types";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

function ThemeSwatch({ theme }: { theme: EditorTheme }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-8 shrink-0 items-center justify-center gap-0.5 rounded border border-white/15"
      style={{ background: theme.background }}
    >
      {theme.accents.map((color) => (
        <span
          key={color}
          className="size-1.5 rounded-full"
          style={{ background: color }}
        />
      ))}
    </span>
  );
}

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const themeId = useCodeEditorStore((state) => state.theme);
  const setTheme = useCodeEditorStore((state) => state.setTheme);
  const current = getEditorTheme(themeId);

  const selectTheme = (id: string) => {
    setTheme(id);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Editor theme: ${current.label}. Change theme`}
          className={TRIGGER_CLASS_NAME}
        >
          <ThemeSwatch theme={current} />
          <span className="hidden max-w-[7.5rem] truncate md:inline">
            {current.label}
          </span>
          <ChevronsUpDown className="size-3.5 shrink-0 text-zinc-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className={cn(POPOVER_SURFACE_CLASS_NAME, "w-64")}
      >
        <Command
          defaultValue={current.label}
          className={COMMAND_SURFACE_CLASS_NAME}
        >
          <CommandInput
            placeholder="Search themes..."
            className="text-sm text-white placeholder:text-zinc-500"
          />
          <CommandList className="custom-scrollbar max-h-80">
            <CommandEmpty className="py-6 text-center text-sm text-zinc-400">
              No theme found.
            </CommandEmpty>
            {EDITOR_THEME_GROUPS.map((group) => (
              <CommandGroup
                key={group.appearance}
                heading={group.label}
                className={COMMAND_GROUP_CLASS_NAME}
              >
                {group.themes.map((theme) => (
                  <CommandItem
                    key={theme.id}
                    value={theme.label}
                    keywords={[theme.id, group.appearance]}
                    onSelect={() => selectTheme(theme.id)}
                    className={COMMAND_ITEM_CLASS_NAME}
                  >
                    <ThemeSwatch theme={theme} />
                    <span className="flex-1 truncate">{theme.label}</span>
                    <Check
                      className={cn(
                        "text-blue-400",
                        theme.id === themeId ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export function ThemeAppearanceSwitch() {
  const themeId = useCodeEditorStore((state) => state.theme);
  const toggle = useCodeEditorStore((state) => state.toggleThemeAppearance);
  const current = getEditorTheme(themeId);
  const counterpart = getEditorTheme(current.counterpart);
  const isDark = current.appearance === "dark";

  return (
    <Tooltip content={`Switch to ${counterpart.label}`} align="end">
      <Switch
        size="sm"
        checked={isDark}
        onCheckedChange={toggle}
        aria-label="Dark editor theme"
        checkedTrackClassName="bg-indigo-600"
        className={cn(!isDark && "bg-amber-300/30")}
        thumbIcon={
          isDark ? (
            <Moon className="text-indigo-600" />
          ) : (
            <Sun className="text-amber-500" />
          )
        }
      />
    </Tooltip>
  );
}
