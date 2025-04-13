"use client";

import { EditorPanel } from "@/app/code-editor/components/editor-pannel";
import { Header } from "@/app/code-editor/components/header";
import { Geminid, Star } from "@/components/shapes";
import { Button } from "@/components/ui";
import { useState } from "react";
import { OutputPanel } from "./components/output-panel";
import { OutputPanelComponent } from "./components/output-panel-component";
import { useCodeEditorStore } from "@/store/useCodeEditorStore";

export default function CodeCompiler() {
  const [isCodeRunning, setIsCodeRunning] = useState(true);
  const { language, setLanguage } = useCodeEditorStore();

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
                setIsCodeRunning(true);
                setLanguage("typescript");
              }}
            >
              Code Running
            </Button>
            <Button
              className="bg-blue-600/20 text-blue-700"
              onClick={() => {
                setLanguage("html");
                setIsCodeRunning(false);
              }}
            >
              HTML Running
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <EditorPanel />
            {isCodeRunning ? <OutputPanel /> : <OutputPanelComponent />}
          </div>
        </div>
      </div>
    </>
  );
}
