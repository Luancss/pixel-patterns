
import { RamdonCards } from "./(ramdom-cards)/cards";
import HeroSection from "@/components/hero-section";
import Geminid from "@/components/geminid";
import Cubic from "@/components/cubic";
export default function Home() {
  return (
    <>
      <Geminid />
      <Cubic/>
      <HeroSection
        title="Collection of components for development lovers"
        description="Ready-to-use, simply copy and paste into your next project. All snippets
        crafted with Tailwind CSS for easy integration."
      />
      <RamdonCards />
    </>
  );
}
