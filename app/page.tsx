import Link from "next/link";

import { ButtonGithub } from "@/components/button-github";
import { Footer, Navbar } from "@/components/layout";
import { Cubic, Geminid, Star } from "@/components/shapes";
import { Button, FlipWords } from "@/components/ui";
import { Sparkles } from "lucide-react";
import { RandomCards } from "./(random-cards)/cards";

export default function Home() {
  const words = ["enthusiast", "lovers", "fanatic", "admirer"];

  // <Spline scene="https://prod.spline.design/cAuIoDp8ZpbIsUKt/scene.splinecode" />;
  return (
    <>
      <Star />
      <Geminid />
      <Cubic />
      <div className="absolute top-5 right-5">
        <ButtonGithub href="https://github.com/Luancss/pixel-patterns" />
      </div>

      <div className="max-w-[600px] flex flex-col items-center justify-center text-center gap-y-7 md:mt-3">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="bg-yellow-950/30 hover:bg-yellow-950/10 text-yellow-500 px-4 py-2 sm:px-6 sm:py-3">
            <Link href="/contribute">Contribute to this project! 💡</Link>
          </Button>

          <Button className="bg-purple-950/30 hover:bg-purple-950/10 text-purple-500 px-4 py-2 sm:px-6 sm:py-3">
            <Link href="/code-editor" className="flex gap-2 items-center">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Code Editor
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-gray-100 slide-in-left lg:text-6xl mt-2">
          Collection of for development <FlipWords words={words} /> <br />
        </h1>
        <p className="text-base text-gray-300 slide-in-right sm:text-lg md:text-xl">
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with Tailwind CSS for easy integration.
        </p>
        <Navbar />
      </div>
      <RandomCards />
      <Footer />
    </>
  );
}
