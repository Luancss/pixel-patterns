import { CodeEditor } from "@/app/code-editor/_components/code-editor";
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
