"use client";

import Image from "next/image";
import Link from "next/link";

import { LanguageSelector } from "@/app/code-editor/_components/language-selector";
import { RunButton } from "@/app/code-editor/_components/run-button";
import { ThemeSelector } from "@/app/code-editor/_components/theme-selector";
import { useCodeEditorStore } from "@/app/code-editor/_lib/code-editor-store";
import { HTML_LANGUAGE_ID } from "@/app/code-editor/_lib/languages";
import { siteConfig } from "@/lib/site";

export function EditorHeader() {
  const language = useCodeEditorStore((state) => state.language);

  return (
    <div className="relative z-10">
      <div className="flex items-center lg:justify-between justify-center bg-[#060611]/90 backdrop-blur-xl p-6 mb-4 rounded-lg border border-blue-700/30">
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />

            <Image
              src="/logo.svg"
              width={50}
              height={50}
              alt="Logo"
              className="rounded-xl"
            />

            <div className="flex flex-col">
              <span className="block text-lg font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 text-transparent bg-clip-text">
                {siteConfig.name}
              </span>
              <span className="block text-xs text-blue-400/60 font-medium">
                Interactive Code Editor
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <RunButton />
            <ThemeSelector />
            {language !== HTML_LANGUAGE_ID && <LanguageSelector />}
          </div>
        </div>
      </div>
    </div>
  );
}
