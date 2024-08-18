import Geminid from "@/components/geminid";
import Star from "@/components/star";

export const metadata = {
  title: "Página não encontrada",
  description:
    "A página que você está tentando acessar não foi encontrada. Verifique o endereço e tente novamente.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center gap-4">
      <Star/>
      <Geminid />
      <h1 className="text-6xl font-bold text-gray-100 slide-in-left">404</h1>
      <p className="text-lg text-gray-300 slide-in-right">
        Página não encontrada!
      </p>
    </div>
  );
}
