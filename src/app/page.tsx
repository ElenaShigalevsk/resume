import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import CaseStudies from "@/components/sections/CaseStudies";
import Expertise from "@/components/sections/Expertise";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Work />
      <CaseStudies />
      <Expertise />
    </>
  );
}
