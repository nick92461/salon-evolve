import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stylists from "@/components/Stylists";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Stylists />
    </>
  );
}