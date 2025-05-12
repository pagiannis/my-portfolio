import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Portfolio() {
  return (
    <div className="font-sans bg-[#F0FFF1] text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Giannis Papadopoulos. All rights reserved.
      </footer>
    </div>
  );
}
