import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Skills from "@/app/components/Skills";
import Contact from "@/app/components/Contact";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
      <>  
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact /> 
      </>
  );
}