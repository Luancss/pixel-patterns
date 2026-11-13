"use client";

import { LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { EditorSettings } from "@/features/code-editor/components/editor-settings";
import { KeyboardShortcuts } from "@/features/code-editor/components/keyboard-shortcuts";
import { ModeSwitch } from "@/features/code-editor/components/mode-switch";
import { ToolbarDivider } from "@/features/code-editor/components/panel";
import {
  ThemeAppearanceSwitch,
  ThemeSelector,
} from "@/features/code-editor/components/theme-selector";
import { siteConfig } from "@/config/site";

export function EditorHeader() {
  return (
    <header className="relative z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0c12]/80 px-2 py-2 backdrop-blur-xl sm:gap-3 sm:px-3">
      <Link
        href="/"
        className="group flex shrink-0 items-center gap-2.5 rounded-lg pr-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <Image
          src="/logo.svg"
          width={32}
          height={32}
          alt={siteConfig.name}
          className="rounded-lg transition-transform group-hover:scale-105"
        />
        <span className="hidden flex-col leading-tight sm:flex">
          <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-sm font-semibold text-transparent">
            {siteConfig.name}
          </span>
          <span className="text-[11px] text-zinc-500">Code Playground</span>
        </span>
      </Link>

      <ToolbarDivider className="hidden sm:block" />
      <ModeSwitch />

      <div className="ml-auto flex items-center gap-1 sm:gap-1.5">
        <ThemeSelector />
        <ThemeAppearanceSwitch />
        <ToolbarDivider className="hidden sm:block" />
        <EditorSettings />
        <div className="hidden sm:contents">
          <KeyboardShortcuts />
        </div>
        <Link
          href="/"
          className="hidden h-8 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium text-zinc-400 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:inline-flex"
        >
          <LayoutGrid className="size-4" />
          Components
        </Link>
      </div>
    </header>
  );
}
