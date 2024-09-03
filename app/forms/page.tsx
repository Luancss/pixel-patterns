import { HeroSection } from "@/components/layout";
import { Geminid, Star } from "@/components/shapes";
import { WaveBox } from "@/components/wave";
import React from "react";
import CardsForm from "./(cards)/cards-forms";

const Forms = () => {
  return (
    <>
      <Star />
      <Geminid />
      <WaveBox />
      <HeroSection title="Forms" description="Developing..." />
      <CardsForm />
    </>
  );
};

export default Forms;
