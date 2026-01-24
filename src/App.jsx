import "@/styles/global.css";

import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

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
