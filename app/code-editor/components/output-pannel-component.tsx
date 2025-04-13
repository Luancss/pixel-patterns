"use client";

import { PlayIcon, Terminal } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export const OutputPannelComponent = () => {
  const [code, setCode] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  return (
    <div className="bg-[#060611]/60 backdrop-blur border border-blue-800/30 rounded-xl p-4 ring-1 ring-gray-800/50">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-[#1e1e2e] ring-1 ring-gray-800/50">
            <Terminal className="w-4 h-4 text-blue-400" />
          </div>
          <span className="text-sm font-medium text-gray-300">Output</span>
        </div>
      </div>

      <div className=" rounded-xl flex items-center justify-center overflow-hidden w-full h-[90%] p-6">
        {!isPreviewVisible ? (
          <div className="text-center text-gray-500">
            <PlayIcon className="size-12 mx-auto mb-4 text-gray-600" />
            <p className="text-sm">Run your code to see the preview</p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1e1e2e] ring-1 ring-white/5">
                <Image src="/code.svg" alt="Preview" width={24} height={24} />
              </div>
              <div>
                <h2 className="text-sm font-medium text-white">Preview</h2>
                <p className="text-xs text-gray-500">
                  Visual output of your code
                </p>
              </div>
            </div>

            <div className="bg-[#1e1e2e] p-8 rounded-xl flex items-center justify-center min-h-[500px]">
              {code.includes("className") ? (
                <div
                  dangerouslySetInnerHTML={{ __html: code }}
                  className="w-full flex items-center justify-center"
                />
              ) : (
                <div
                  dangerouslySetInnerHTML={{
                    __html: code,
                  }}
                  className="w-full flex items-center justify-center"
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
