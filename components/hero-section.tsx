import React from "react";
import ButtonEffect from "./button-effect";
import { Navbar } from "./navbar/page";

interface HeroSectionProps {
  title: string
  description:  string
}

const HeroSection = ({
  title,
  description
}: HeroSectionProps) => {
  return (
    <div className="max-w-[600px] flex flex-col items-center justify-center gap-y-7 mt-32">
      <h1 className="text-6xl font-bold text-gray-100">
        {title}
      </h1>
      <p className="text-lg text-gray-300">
        {description}
      </p>
      <div className="flex items-center justify-center gap-4">
        <ButtonEffect href="https://github.com/Luancss" />
      </div>
      <Navbar />
    </div>
  );
};

export default HeroSection;
