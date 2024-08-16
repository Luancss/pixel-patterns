import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import React from "react";
import Circle from "@/components/circle";
import CardsLoaders from "./(cards)/cards-loaders";
import Star from "@/components/star";

const Cards = () => {
  return (
    <>
      <Star />
      <Geminid />
      <Circle />
      <HeroSection
        title="Loaders"
        description="Explore a collection of minimal and efficient loader components designed to enhance user experience in any web project. Easily copy and use with just one click."
      />
      <CardsLoaders />
    </>
  );
};

export default Cards;
