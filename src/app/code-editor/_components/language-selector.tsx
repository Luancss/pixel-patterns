"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, Sparkles } from "lucide-react";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

import { useCodeEditorStore } from "@/app/code-editor/_lib/code-editor-store";
import {
  LANGUAGES,
  type LanguageId,
  SELECTABLE_LANGUAGE_IDS,
} from "@/app/code-editor/_lib/languages";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useMounted();
  const { language, setLanguage } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLanguage = LANGUAGES[language];

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(dropdownRef, close);

  const selectLanguage = (id: LanguageId) => {
    setLanguage(id);
    close();
  };

  if (!isMounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 px-4 py-2.5 bg-[#1e1e2e]/80 rounded-lg transition-all duration-200 border border-gray-800/50 hover:border-gray-700"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        <div className="size-6 rounded-md bg-gray-800/50 p-0.5 group-hover:scale-110 transition-transform">
          <Image
            src={currentLanguage.logoPath ?? ""}
            alt="programming language logo"
            width={24}
            height={24}
            className="w-full h-full object-contain relative z-10"
          />
        </div>

        <span className="text-gray-200 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentLanguage.label}
        </span>

        <ChevronDownIcon
          className={cn(
            "size-4 text-gray-400 transition-all duration-300 group-hover:text-gray-300",
            isOpen && "rotate-180"
          )}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-[#1e1e2e]/95 backdrop-blur-xl rounded-xl border border-[#313244] shadow-2xl py-2 z-50"
          >
            <div className="px-3 pb-2 mb-2 border-b border-gray-800/50">
              <p className="text-xs font-medium text-gray-400">
                Select Language
              </p>
            </div>

            <div className="max-h-[280px] overflow-y-auto overflow-x-hidden">
              {SELECTABLE_LANGUAGE_IDS.map((id, index) => {
                const option = LANGUAGES[id];
                const isSelected = language === id;

                return (
                  <motion.div
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group px-2"
                  >
                    <button
                      className={cn(
                        "relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#262637]",
                        isSelected
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-gray-300"
                      )}
                      onClick={() => selectLanguage(id)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div
                        className={cn(
                          "relative size-8 rounded-lg p-1.5 group-hover:scale-110 transition-transform",
                          isSelected ? "bg-blue-500/10" : "bg-gray-800/50"
                        )}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Image
                          width={24}
                          height={24}
                          src={option.logoPath ?? ""}
                          alt={`${option.label} logo`}
                          className="w-full h-full object-contain relative z-10"
                        />
                      </div>

                      <span className="flex-1 text-left group-hover:text-white transition-colors">
                        {option.label}
                      </span>

                      {isSelected && (
                        <>
                          <motion.div
                            className="absolute inset-0 border-2 border-blue-500/30 rounded-lg"
                            transition={{
                              type: "spring",
                              bounce: 0.2,
                              duration: 0.6,
                            }}
                          />
                          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                        </>
                      )}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
