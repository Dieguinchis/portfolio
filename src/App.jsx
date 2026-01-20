import "@/styles/global.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
