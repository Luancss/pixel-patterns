import { HeroSection } from "@/components/layout";
import { Geminid, Star } from "@/components/shapes";
import { WaveBox } from "@/components/wave";
import React from "react";
import CardsForm from "./(cards)/cards-forms";
import WaveCircle from "@/components/wave/wave-circle";

const Forms = () => {
  return (
    <>
      <Star />
      <Geminid />
      <WaveCircle />
      <HeroSection
        title="Forms"
        description="Discover our sleek form components, designed for style and functionality. Ideal for login, registration, and data collection, they offer a modern and flexible solution for any project."
      />
      <CardsForm />
    </>
  );
};

export default Forms;
