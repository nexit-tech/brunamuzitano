import Hero from "./home/components/Hero/Hero";
import About from "./home/components/About/About";
import Services from "./home/components/Services/Services";
import Contact from "./home/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  );
}