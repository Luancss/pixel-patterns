import Cubic from "@/components/cubic";
import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import React from "react";
import CardsInputs from "./(cards)/cards-inputs";
import CubicRed from "@/components/cubic-red";

const Inputs = () => {
  return (
    <>
      <Geminid />
      <CubicRed />
      <HeroSection
        title="Inputs"
        description="
        Check out our sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance, enhancing user experience effortlessly."
      />
      <CardsInputs />
    </>
  );
};

export default Inputs;
