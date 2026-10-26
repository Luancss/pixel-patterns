import { ElectricMonster } from "@/app/gradient/_components/electric-monster";
import { GradientPicker } from "@/app/gradient/_components/gradient-picker";

export default function GradientPage() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="w-full h-full flex justify-center items-center">
        <GradientPicker />
      </div>

      <ElectricMonster />
    </div>
  );
}
