import type { Metadata } from "next";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você está tentando acessar não foi encontrada. Verifique o endereço e tente novamente.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4">
      <Starfield />
      <MeteorShower />
      <h1 className="text-6xl font-bold text-gray-100 animate-slide-in-left">
        404
      </h1>
      <p className="text-lg text-gray-300 animate-slide-in-right">
        Página não encontrada!
      </p>
    </div>
  );
}
