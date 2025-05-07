"use client";

import { Header } from "@/app/code-editor/header";
import { Geminid, Star } from "@/components/shapes";
import { Button } from "@/components/ui";
import { Suspense, useEffect, useState } from "react";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import dynamic from "next/dynamic";
import { EditorPanelSkeleton, OutputPanelSkeleton } from "./skeletons";

const Editor = dynamic(
  () => import("@/app/code-editor/editor-panel").then((mod) => mod.EditorPanel),
  {
    loading: () => <EditorPanelSkeleton />,
    ssr: false,
  }
);

const OutputPanel = dynamic(
  () => import("./output-panel-code").then((mod) => mod.OutputPanel),
  {
    loading: () => <OutputPanelSkeleton />,
    ssr: false,
  }
);

const OutputPanelComponent = dynamic(
  () => import("./output-panel-html").then((mod) => mod.OutputPanelComponent),
  {
    loading: () => <OutputPanelSkeleton />,
    ssr: false,
  }
);

export default function CodeCompiler() {
  const [isHtml, setIsHtml] = useState(false);
  const { language, setLanguage } = useCodeEditorStore();

  useEffect(() => {
    if (language === "html") {
      setIsHtml(true);
    }
  }, []);

  return (
    <>
      <Star />
      <Geminid />
      <div className="w-full -mt-24">
        <div className="max-w-[1800px] mx-auto p-4">
          <Header />
          <div className="flex items-center gap-4 my-5">
            <Button
              className="bg-blue-600/20 text-blue-700"
              onClick={() => {
                setIsHtml(false);
                setLanguage("typescript");
              }}
            >
              CODE
            </Button>
            <Button
              className="bg-blue-600/20 text-blue-700"
              onClick={() => {
                setLanguage("html");
                setIsHtml(true);
              }}
            >
              HTML
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Suspense fallback={<EditorPanelSkeleton />}>
              <Editor />
            </Suspense>
            <Suspense fallback={<OutputPanelSkeleton />}>
              {isHtml ? <OutputPanelComponent /> : <OutputPanel />}
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
