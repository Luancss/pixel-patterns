import Meteor from "@/components/meteor";
import { RamdonCards } from "./(ramdom-cards)/cards";
import HeroSection from "@/components/hero-section";


export default function Home() {
  return (
    <>
      <Meteor />
      <HeroSection
        title="Collection of components for development lovers"
        description="Ready-to-use, simply copy and paste into your next project. All snippets
        crafted with Tailwind CSS for easy integration."
      />
      <RamdonCards />
    </>
  );
}
