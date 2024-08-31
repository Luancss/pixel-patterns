import { Wave } from "@/components/wave";
import { HeroSection } from "@/components/layout";
import { Geminid, Star } from "@/components/shapes";

import CardsInputs from "./(cards)/cards-inputs";

const Inputs = () => {
  return (
    <>
      <Star />
      <Geminid />
      <Wave />
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
