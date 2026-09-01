import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stylists from "@/components/Stylists";
import Pricing from "@/components/Pricing";
import Visit from "@/components/Visit";
import Careers from "@/components/Careers";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stylists />
      <Reviews />
      <Careers />
      <Visit />
    </>
  );
}