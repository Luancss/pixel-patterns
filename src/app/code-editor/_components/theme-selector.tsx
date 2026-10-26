"use client";

import { motion } from "framer-motion";
import {
  CircleOff,
  Cloud,
  Github,
  Laptop,
  Moon,
  Palette,
  Sun,
} from "lucide-react";
import { type ReactNode, useCallback, useRef, useState } from "react";

import { useCodeEditorStore } from "@/app/code-editor/_lib/code-editor-store";
import { EDITOR_THEMES } from "@/app/code-editor/_lib/editor-themes";
import { useClickOutside } from "@/hooks/use-click-outside";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const THEME_ICONS: Record<string, ReactNode> = {
  "vs-dark": <Moon className="size-4" />,
  "vs-light": <Sun className="size-4" />,
  "github-dark": <Github className="size-4" />,
  monokai: <Laptop className="size-4" />,
  "solarized-dark": <Cloud className="size-4" />,
};

export function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const isMounted = useMounted();
  const { theme, setTheme } = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentTheme = EDITOR_THEMES.find(({ id }) => id === theme);

  const close = useCallback(() => setIsOpen(false), []);
  useClickOutside(dropdownRef, close);

  if (!isMounted) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-48 group relative flex items-center gap-2 px-4 py-2.5 bg-[#1e1e2e]/80 hover:bg-[#262637] rounded-lg transition-all duration-200 border border-gray-800/50 hover:border-gray-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />

        <Palette className="w-4 h-4 text-gray-400 group-hover:text-gray-300 transition-colors" />

        <span className="text-gray-300 min-w-[80px] text-left group-hover:text-white transition-colors">
          {currentTheme?.label}
        </span>
        <div
          className="relative w-4 h-4 rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors"
          style={{ background: currentTheme?.color }}
        />
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 mt-2 w-full min-w-[240px] bg-[#1e1e2e]/95 backdrop-blur-xl rounded-xl border border-[#313244] shadow-2xl py-2 z-50"
        >
          <div className="px-2 pb-2 mb-2 border-b border-gray-800/50">
            <p className="text-xs font-medium text-gray-400 px-2">
              Select Theme
            </p>
          </div>

          {EDITOR_THEMES.map((option, index) => {
            const isSelected = theme === option.id;

            return (
              <motion.button
                key={option.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative group w-full flex items-center gap-3 px-3 py-2.5 hover:bg-[#262637] transition-all duration-200",
                  isSelected ? "bg-blue-500/10 text-blue-400" : "text-gray-300"
                )}
                onClick={() => setTheme(option.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div
                  className={cn(
                    "flex items-center justify-center size-8 rounded-lg group-hover:scale-110 transition-all duration-200",
                    isSelected
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-gray-800/50 text-gray-400"
                  )}
                >
                  {THEME_ICONS[option.id] ?? <CircleOff className="w-4 h-4" />}
                </div>
                <span className="flex-1 text-left group-hover:text-white transition-colors">
                  {option.label}
                </span>

                <div
                  className="relative size-4 rounded-full border border-gray-600 group-hover:border-gray-500 transition-colors"
                  style={{ background: option.color }}
                />

                {isSelected && (
                  <motion.div
                    className="absolute inset-0 border-2 border-blue-500/30 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}
