import { CodeEditor } from "@/features/code-editor/components/code-editor";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";

export default function CodeEditorPage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <CodeEditor />
    </>
  );
}
