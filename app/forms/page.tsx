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
      <HeroSection title="Forms" description="Developing..." />
      <CardsForm />
    </>
  );
};

export default Forms;
