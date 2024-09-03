import React from "react";
import Link from "next/link";

import { Button } from "../ui";
import { ButtonEffect } from "../button-effect";

import { Navbar } from "./navbar";

interface HeroSectionProps {
  title: string;
  description: string;
}

export const HeroSection = ({ title, description }: HeroSectionProps) => {
  return (
    <div className="max-w-[600px] text-center flex flex-col items-center justify-center gap-y-7">
      <Button className="bg-yellow-950/30 hover:bg-yellow-950/10 text-yellow-500 px-4 py-2 sm:px-6 sm:py-3">
        <Link href="/contribute">Contribute to this project! 💡</Link>
      </Button>
      <h1 className="text-4xl font-bold text-gray-100 slide-in-left lg:text-6xl text-center">
        {title}
      </h1>
      <p className="text-base text-gray-300 slide-in-right sm:text-lg md:text-xl">
        {description}
      </p>
      <div className="flex items-center justify-center gap-4 fade-in">
        <ButtonEffect href="https://github.com/Luancss/pixel-patterns" />
      </div>
      <Navbar />
    </div>
  );
};
