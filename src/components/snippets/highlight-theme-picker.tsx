"use client";

import { Check, PaintBucketIcon } from "lucide-react";
import { useState } from "react";

import { useHighlightThemeStore } from "@/components/snippets/highlight-theme-store";
import {
  HIGHLIGHT_THEME_NAMES,
  type HighlightThemeName,
} from "@/components/snippets/highlight-themes";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";

export function HighlightThemePicker() {
  const { themeName, setThemeName } = useHighlightThemeStore();
  const [isOpen, setIsOpen] = useState(false);

  const selectTheme = (name: HighlightThemeName) => {
    setThemeName(name);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="ml-auto bg-gradient-to-r from-blue-900 to-blue-700 text-white border-0 hover:opacity-80 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-900/50 flex items-center gap-2 px-4 py-2 capitalize"
        >
          {themeName}
          <PaintBucketIcon size={18} className="animate-bounce" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-[#0A1929] border border-blue-900/50 shadow-lg shadow-blue-900/20">
        <Command className="bg-transparent">
          <CommandInput
            placeholder="Search theme..."
            className="text-white placeholder:text-blue-400/50 [&_svg]:text-white"
          />
          <CommandList className="bg-[#0A1929] text-white custom-scrollbar max-h-[300px] overflow-y-auto">
            <CommandEmpty className="text-white p-2 text-sm">
              No theme found.
            </CommandEmpty>
            <CommandGroup>
              {HIGHLIGHT_THEME_NAMES.map((name) => (
                <CommandItem
                  key={name}
                  value={name}
                  onSelect={() => selectTheme(name)}
                  className={cn(
                    "w-full text-left px-4 py-2 hover:bg-[#051018] hover:text-blue-200 transition-colors truncate text-blue-100 custom-scrollbar capitalize",
                    themeName === name && "bg-blue-800/40"
                  )}
                >
                  {name}
                  <Check
                    className={cn(
                      "ml-auto text-blue-400",
                      themeName === name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
