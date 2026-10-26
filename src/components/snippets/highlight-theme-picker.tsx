"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { useHighlightThemeStore } from "@/components/snippets/highlight-theme-store";
import {
  getHighlightTheme,
  HIGHLIGHT_THEME_GROUPS,
  type HighlightTheme,
  type HighlightThemeName,
} from "@/components/snippets/highlight-themes";
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

function ThemeSwatch({ theme }: { theme: HighlightTheme }) {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-8 shrink-0 items-center justify-center gap-0.5 rounded border border-white/15"
      style={{ background: theme.background }}
    >
      {theme.accents.map((color, index) => (
        <span
          key={index}
          className="size-1.5 rounded-full"
          style={{ background: color }}
        />
      ))}
    </span>
  );
}

export function HighlightThemePicker() {
  const { themeName, setThemeName } = useHighlightThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const currentTheme = getHighlightTheme(themeName);

  const selectTheme = (name: HighlightThemeName) => {
    setThemeName(name);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Syntax theme: ${currentTheme.label}`}
          className="inline-flex h-8 min-w-0 items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 text-xs font-medium text-zinc-200 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <ThemeSwatch theme={currentTheme} />
          <span className="max-w-[7.5rem] truncate sm:max-w-[9rem]">
            {currentTheme.label}
          </span>
          <ChevronsUpDown className="size-3.5 shrink-0 text-zinc-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="w-72 border-white/10 bg-[#101018] p-0 text-zinc-100 shadow-2xl shadow-black/50"
      >
        <Command
          defaultValue={currentTheme.label}
          className="bg-transparent text-zinc-100 [&_[cmdk-input-wrapper]]:border-white/10 [&_[cmdk-input-wrapper]_svg]:text-zinc-500"
        >
          <CommandInput
            placeholder="Search themes..."
            className="text-sm text-white placeholder:text-zinc-500"
          />
          <CommandList className="custom-scrollbar max-h-80">
            <CommandEmpty className="py-6 text-center text-sm text-zinc-400">
              No theme found.
            </CommandEmpty>
            {HIGHLIGHT_THEME_GROUPS.map((group) => (
              <CommandGroup
                key={group.appearance}
                heading={group.label}
                className="text-zinc-300 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-zinc-500"
              >
                {group.themes.map((theme) => (
                  <CommandItem
                    key={theme.name}
                    value={theme.label}
                    keywords={[theme.name, group.appearance]}
                    onSelect={() => selectTheme(theme.name)}
                    className="gap-3 rounded-md px-2 py-1.5 text-sm text-zinc-300 data-[selected='true']:bg-white/10 data-[selected=true]:text-white"
                  >
                    <ThemeSwatch theme={theme} />
                    <span className="flex-1 truncate">{theme.label}</span>
                    {theme.name === themeName && (
                      <Check className="text-blue-400" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <p className="border-t border-white/10 px-3 py-2 text-[11px] text-zinc-500">
            Use ↑ ↓ to browse and Enter to apply
          </p>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
