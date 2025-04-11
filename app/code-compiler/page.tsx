import { EditorPanel } from "@/components/editor-pannel";
import { OutputPanel } from "@/components/output-pannel";

export default function CodeCompiler() {
  return (
    <div className="min-w-screen">
      <div className="max-w-[1800px] mx-auto p-4">
        {/* <Header /> */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel />
        </div>
      </div>
    </div>
  );
}
