
import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import React from "react";
import Star from "@/components/star";
import WaveLittle from "@/components/wave-little";

const Inputs = () => {
  return (
    <>
    <Star/>
      <Geminid />
      <WaveLittle />
      <HeroSection
        title="Inputs"
        description="
        Check out our sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance, enhancing user experience effortlessly."
      />
    </>
  );
};

export default Inputs;