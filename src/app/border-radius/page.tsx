import { BorderRadiusEditor } from "@/app/border-radius/_components/border-radius-editor";
import { SplineScene } from "@/app/border-radius/_components/spline-scene";
import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";

export default function BorderRadiusPage() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <SplineScene />
      <MeteorShower />
      <Starfield />
      <BorderRadiusEditor />
    </div>
  );
}
