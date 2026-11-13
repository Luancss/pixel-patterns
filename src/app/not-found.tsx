import { ArrowLeft, LayoutGrid } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Starfield } from "@/components/decorations/starfield";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "A página que você está tentando acessar não foi encontrada. Verifique o endereço e tente novamente.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4 px-4 text-center">
      <Starfield />
      <MeteorShower />
      <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400">
        Erro 404
      </span>
      <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-500 bg-clip-text text-7xl font-bold text-transparent animate-slide-in-left sm:text-8xl">
        404
      </h1>
      <p className="max-w-md text-lg text-gray-300 animate-slide-in-right">
        Página não encontrada! Verifique o endereço ou volte para a coleção de
        componentes.
      </p>
      <div className="mt-4 flex flex-col gap-3 animate-fade-in-slow sm:flex-row">
        <Button
          asChild
          className="gap-2 bg-white text-zinc-900 hover:bg-zinc-200"
        >
          <Link href="/">
            <ArrowLeft className="size-4" />
            Voltar para o início
          </Link>
        </Button>
        <Button
          asChild
          className="gap-2 border border-white/10 bg-white/5 text-zinc-200 hover:bg-white/10"
        >
          <Link href="/buttons">
            <LayoutGrid className="size-4" />
            Ver componentes
          </Link>
        </Button>
      </div>
    </div>
  );
}
