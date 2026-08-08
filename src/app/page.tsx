import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Projects from "@/components/sections/Projects/Projects";
import Experience from "@/components/sections/Experience/Experience";
import Contact from "@/components/sections/Contact/Contact";

export default function Home() {
  return (
    <main id="main-content" className="flex-1 relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
