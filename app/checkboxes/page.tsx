import { WaveLittle } from "@/components/wave";
import { HeroSection } from "@/components/layout";
import { Geminid, Star } from "@/components/shapes";

import CardsCheckboxes from "./(cards)/cards-checkboxes";

const Inputs = () => {
  return (
    <>
      <Star />
      <Geminid />
      <WaveLittle />
      <HeroSection
        title="Checkboxes"
        description="
        Check out our sleek and functional input components, crafted for modern forms and interfaces. They blend flexibility with elegance, enhancing user experience effortlessly."
      />
      <CardsCheckboxes />
    </>
  );
};

export default Inputs;
