import { Code2, Sparkles } from "lucide-react";
import Link from "next/link";

import { MeteorShower } from "@/components/decorations/meteor-shower";
import { Polyhedron } from "@/components/decorations/polyhedron";
import { Starfield } from "@/components/decorations/starfield";
import { ContributeButton } from "@/components/layout/contribute-button";
import { Footer } from "@/components/layout/footer";
import { GithubStarButton } from "@/components/layout/github-star-button";
import { Navbar } from "@/components/layout/navbar";
import { TOOL_LINKS } from "@/components/layout/navigation-links";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { ShowcaseCard } from "@/components/ui/showcase-card";
import { PaletteTeaser } from "@/features/palettes/components/palette-teaser";
import { ResourceTeaser } from "@/features/resources/components/resource-teaser";
import { SnippetMarquee } from "@/features/snippets/components/snippet-marquee";
import { featuredSnippetRows } from "@/features/snippets/data/featured";

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
          Ready-to-use, simply copy and paste into your next project. Snippets
          crafted with HTML, CSS and Tailwind CSS for easy integration.
        </p>
        <Navbar />
      </div>
      <SnippetMarquee rows={featuredSnippetRows} />

      <section
        aria-labelledby="library-heading"
        className="mt-10 w-[min(72rem,calc(100vw-2rem))] text-center"
      >
        <h2
          id="library-heading"
          className="text-3xl font-bold text-gray-100 lg:text-4xl"
        >
          More than components
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">
          Palettes, references and tools to take an interface from idea to
          production.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <PaletteTeaser />
          <ResourceTeaser />
          <ShowcaseCard
            href="/code-editor"
            icon={Code2}
            title="Developer Tools"
            description="Run code in the browser, design gradients and shape border radii visually."
            cta="Open the code editor"
          >
            <ul className="space-y-2.5">
              {TOOL_LINKS.map(({ href, label, icon: Icon }) => (
                <li
                  key={href}
                  className="flex items-center gap-2 text-sm text-zinc-300"
                >
                  <Icon className="size-4 text-purple-400" />
                  {label}
                </li>
              ))}
            </ul>
          </ShowcaseCard>
        </div>
      </section>

      <Footer />
    </>
  );
}
