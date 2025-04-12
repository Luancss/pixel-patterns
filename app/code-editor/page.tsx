import { EditorPanel } from "@/app/code-editor/components/editor-pannel";
import { Header } from "@/app/code-editor/components/header";
import { OutputPanel } from "@/app/code-editor/components/output-pannel";
import { Geminid, Star } from "@/components/shapes";

export default function CodeCompiler() {
  return (
    <>
      <Star />
      <Geminid />
      <div className="w-full -mt-24">
        <div className="max-w-[1800px] mx-auto p-4">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <EditorPanel />
            <OutputPanel />
          </div>
        </div>
      </div>
    </>
  );
}
