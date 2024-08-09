import ButtonEffect from "@/components/button-effect";
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col justify-endjustify-center">
      <div className="max-w-[600px] flex flex-col gap-y-10 items-center justify-center text-center m-auto z-20">
        <h1 className="text-6xl font-bold text-gray-100">
          Collection of components for development lovers
        </h1>
        <p className="text-lg text-gray-300">
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with Tailwind CSS for easy integration.
        </p>
        <div className="flex items-center justify-center gap-4">
          <ButtonEffect />
        </div>
      </div>
    </div>
  );
}
