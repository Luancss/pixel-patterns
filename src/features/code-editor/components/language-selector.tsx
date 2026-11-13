"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

import { LanguageIcon } from "@/features/code-editor/components/language-icon";
import {
  COMMAND_GROUP_CLASS_NAME,
  COMMAND_ITEM_CLASS_NAME,
  COMMAND_SURFACE_CLASS_NAME,
  POPOVER_SURFACE_CLASS_NAME,
  TRIGGER_CLASS_NAME,
} from "@/features/code-editor/components/panel";
import { useCodeEditorStore } from "@/features/code-editor/store/code-editor-store";
import {
  type LanguageId,
  LANGUAGES,
  SELECTABLE_LANGUAGE_IDS,
} from "@/features/code-editor/config/languages";
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

const LANGUAGE_GROUPS: { heading: string; ids: LanguageId[] }[] = [
  {
    heading: "Runs in your browser",
    ids: SELECTABLE_LANGUAGE_IDS.filter(
      (id) => LANGUAGES[id].runtime.kind === "browser"
    ),
  },
  {
    heading: "Remote runtime · Piston",
    ids: SELECTABLE_LANGUAGE_IDS.filter(
      (id) => LANGUAGES[id].runtime.kind === "piston"
    ),
  },
];

function RuntimeTag({ id }: { id: LanguageId }) {
  const { runtime } = LANGUAGES[id];
  if (runtime.kind !== "piston") return null;

  return (
    <span className="font-mono text-[10px] tabular-nums text-zinc-500">
      v{runtime.version}
    </span>
  );
}

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const language = useCodeEditorStore((state) => state.language);
  const setLanguage = useCodeEditorStore((state) => state.setLanguage);
  const current = LANGUAGES[language];

  const selectLanguage = (id: LanguageId) => {
    setLanguage(id);
    setIsOpen(false);
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          aria-label={`Language: ${current.label}. Change language`}
          className={cn(TRIGGER_CLASS_NAME, "pl-1.5 text-sm")}
        >
          <LanguageIcon language={current} />
          <span className="truncate">{current.label}</span>
          <ChevronsUpDown className="size-3.5 shrink-0 text-zinc-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className={cn(POPOVER_SURFACE_CLASS_NAME, "w-72")}
      >
        <Command
          defaultValue={current.label}
          className={COMMAND_SURFACE_CLASS_NAME}
        >
          <CommandInput
            placeholder="Search languages..."
            className="text-sm text-white placeholder:text-zinc-500"
          />
          <CommandList className="custom-scrollbar max-h-80">
            <CommandEmpty className="py-6 text-center text-sm text-zinc-400">
              No language found.
            </CommandEmpty>
            {LANGUAGE_GROUPS.map(({ heading, ids }) => (
              <CommandGroup
                key={heading}
                heading={heading}
                className={COMMAND_GROUP_CLASS_NAME}
              >
                {ids.map((id) => {
                  const option = LANGUAGES[id];
                  return (
                    <CommandItem
                      key={id}
                      value={option.label}
                      keywords={[id, option.fileName]}
                      onSelect={() => selectLanguage(id)}
                      className={COMMAND_ITEM_CLASS_NAME}
                    >
                      <LanguageIcon language={option} className="size-6" />
                      <span className="flex-1 truncate">{option.label}</span>
                      <RuntimeTag id={id} />
                      <Check
                        className={cn(
                          "text-blue-400",
                          id === language ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            ))}
          </CommandList>
          <p className="border-t border-white/10 px-3 py-2 text-[11px] text-zinc-500">
            Your code is saved separately for each language.
          </p>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
