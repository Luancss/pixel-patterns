import { HeroSection } from "@/components/layout";
import { Circle, Geminid, Star } from "@/components/shapes";

import CardsLoaders from "./(cards)/cards-loaders";

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
