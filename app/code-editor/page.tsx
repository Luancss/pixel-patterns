import { EditorPanel } from "@/app/code-editor/components/editor-pannel";
import { Header } from "@/app/code-editor/components/header";
import { OutputPanel } from "@/app/code-editor/components/output-pannel";
import { Geminid, Star } from "@/components/shapes";
import { OutputPannelComponent } from "./components/output-pannel-component";

export default function CodeCompiler() {
  return (
    <>
      <Star />
      <Geminid />
      <div className="w-full -mt-24">
        <div className="max-w-[1800px] mx-auto p-4">
          <Header />
          <div className=" flex items-center justify-center w-full">
            <button className="bg-white">Code Running</button>
            <button className="bg-white">HTML Running</button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <EditorPanel />

            {/* <OutputPanel /> */}
            <OutputPannelComponent />
          </div>
        </div>
      </div>
    </>
  );
}
