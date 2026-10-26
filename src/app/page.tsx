import { Sparkles } from "lucide-react";
import Link from "next/link";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Polyhedron } from "@/components/decorations/polyhedron";
import { Starfield } from "@/components/decorations/starfield";
import { ContributeButton } from "@/components/layout/contribute-button";
import { Footer } from "@/components/layout/footer";
import { GithubStarButton } from "@/components/layout/github-star-button";
import { Navbar } from "@/components/layout/navbar";
import { SnippetMarquee } from "@/components/snippets/snippet-marquee";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { featuredSnippetRows } from "@/data/snippets/featured";

const FLIP_WORDS = ["enthusiast", "lovers", "fanatic", "admirer"];

export default function HomePage() {
  return (
    <>
      <Starfield />
      <MeteorShower />
      <Polyhedron />
      <div className="absolute top-5 right-5">
        <GithubStarButton />
      </div>

      <div className="max-w-[600px] flex flex-col items-center justify-center text-center gap-y-7 md:mt-3 z-50">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <ContributeButton />
          <Button
            asChild
            className="bg-purple-950/30 hover:bg-purple-950/10 text-purple-500 px-4 py-2 sm:px-6 sm:py-3 gap-2"
          >
            <Link href="/code-editor">
              <Sparkles className="w-4 h-4 text-purple-500" />
              Code Editor
            </Link>
          </Button>
        </div>

        <h1 className="text-4xl font-bold text-gray-100 animate-slide-in-left lg:text-6xl mt-2">
          Collection of for development <FlipWords words={FLIP_WORDS} /> <br />
        </h1>
        <p className="text-base text-gray-300 animate-slide-in-right sm:text-lg md:text-xl">
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with Tailwind CSS for easy integration.
        </p>
        <Navbar />
      </div>
      <SnippetMarquee rows={featuredSnippetRows} />
      <Footer />
    </>
  );
}
