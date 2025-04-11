import { EditorPanel } from "@/app/code-compiler/components/editor-pannel";
import { Header } from "@/app/code-compiler/components/header";
import { OutputPanel } from "@/app/code-compiler/components/output-pannel";
import { Geminid, Star } from "@/components/shapes";

export default function CodeCompiler() {
  return (
    <>
      <Star />
      <Geminid />
      <div className=" md:w-[1400px] lg:w-[1800px] -mt-28">
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
