import "@/styles/global.css";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import Home from "@/sections/Home/Home";
import Skills from "@/sections/Skills/Skills";
import Projects from "@/sections/Projects/Projects";
import About from "@/sections/About/About";
import Services from "@/sections/Services/Services";
import Contact from "@/sections/Contact/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700); // 1.7 segundos
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
