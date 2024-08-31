import { WaveBox } from "@/components/wave";
import { HeroSection } from "@/components/layout";
import { Geminid, Star } from "@/components/shapes";

import CardsButton from "./(cards)/cards-buttons";

const Buttons = () => {
  return (
    <>
      <Star />
      <Geminid />
      <WaveBox />
      <HeroSection
        title="Buttons"
        description="Discover our curated card components, designed for developers who value style and functionality. Ideal for portfolios, dashboards, and more, they offer flexibility and elegance."
      />
      <CardsButton />
    </>
  );
};

export default Buttons;
