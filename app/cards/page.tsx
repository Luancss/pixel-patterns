import { HeroSection } from "@/components/layout";
import { Box, Geminid, Star } from "@/components/shapes";

import CardCards from "./(cards)/card-cards";

const Cards = () => {
  return (
    <>
      <Star />
      <Geminid />
      <Box />
      <HeroSection
        title="Cards"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <CardCards />
    </>
  );
};

export default Cards;
