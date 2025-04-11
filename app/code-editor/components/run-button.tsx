"use client";

import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export const RunButton = () => {
  const { runCode, language, isRunning } = useCodeEditorStore();

  const handleRun = async () => {
    await runCode();
  };

  return (
    <motion.button
      onClick={handleRun}
      disabled={isRunning}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        group relative inline-flex items-center gap-2.5 px-5 py-2.5
        disabled:cursor-not-allowed
        focus:outline-none
      `}
    >
      {/* bg wit gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl opacity-100 transition-opacity group-hover:opacity-90" />

      <div className="relative flex items-center gap-2.5">
        {isRunning ? (
          <button
            className="inline-flex h-12 items-center rounded-lg bg-blue-500 px-6 text-neutral-50 disabled:pointer-events-none disabled:opacity-50 "
            disabled={isRunning}
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-solid border-white border-t-transparent"></div>
            <span className="ml-2">Loading... </span>
          </button>
        ) : (
          <>
            <div className="relative flex items-center justify-center w-4 h-4">
              <Play className="w-4 h-4 text-white/90 transition-transform group-hover:scale-110 group-hover:text-white" />
            </div>
            <span className="text-sm font-medium text-white/90 group-hover:text-white">
              Run Code
            </span>
          </>
        )}
      </div>
    </motion.button>
  );
};
