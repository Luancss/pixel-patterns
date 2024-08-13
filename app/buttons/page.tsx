import Geminid from "@/components/geminid";
import HeroSection from "@/components/hero-section";
import CardsButton from "./(cards)/cards-button";

const Buttons = () => {
  return (
    <>
      <Geminid />
      <HeroSection
        title="Card Components for Dev Enthusiasts"
        description="Discover our curated card components, crafted for developers who love building stylish and functional interfaces. Perfect for portfolios, dashboards, and more, these components offer both flexibility and elegance."
      />
      <CardsButton/>
    </>
  );
};

export default Buttons;
