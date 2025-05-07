import GradientPicker from "./components/gradient";
import { MonsterEletric } from "./components/monster";

function Monster() {
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <div className="w-full h-full flex justify-center items-center">
        <GradientPicker />
      </div>

      <MonsterEletric />
    </div>
  );
}

export default Monster;
