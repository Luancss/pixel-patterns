import { ContributeButton } from "@/components/layout/contribute-button";
import { GithubStarButton } from "@/components/layout/github-star-button";
import { Navbar } from "@/components/layout/navbar";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="max-w-[600px] text-center flex flex-col items-center justify-center gap-y-7">
      <ContributeButton />
      <h1 className="text-4xl font-bold text-gray-100 animate-slide-in-left lg:text-6xl text-center">
        {title}
      </h1>
      <p className="text-base text-gray-300 animate-slide-in-right sm:text-lg md:text-xl">
        {description}
      </p>
      <div className="flex items-center justify-center gap-4 animate-fade-in-slow">
        <GithubStarButton />
      </div>
      <Navbar />
    </div>
  );
}
