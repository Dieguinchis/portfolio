import { useEffect, useState } from "react";
import "@/styles/home.css";
import Button from "@/components/Button";

const words = [
  "Frontend Developer",
  "React Developer",
  "UI Lover"
];

function Home() {
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const pauseTime = 1200;

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);

        if (isDeleting) {
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, pauseTime);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg-deco"></div>

      <div className="hero-arrows">
        <span className="arrow left"></span>
        <span className="arrow right"></span>
      </div>

      <div className="hero-content">

        <div className="hero-intro">
          <span className="hero-hello">
            Hola<span className="hero-dot">.</span>
          </span>
        </div>

        <div className="hero-center">
          <h2 className="hero-im">
            Soy{" "} <span className="hero-name">Diego Colmenares</span>
          </h2>
          <div className="hero-line"></div>
        </div>

        <div>
          <h1 className="hero-title">Desarrollador Frontend</h1>

          <span className="hero-badge typing">
            {text}
            <span className="cursor">|</span>
          </span>
        </div>

        <div className="hero-buttons">
          <Button variant="primary" as="a" href="#projects">
            Ver CV
          </Button>
          <Button variant="secondary" as="a" href="#contact">
            Ver proyectos
          </Button>
        </div>

      </div>

    </section>
  );
}

export default Home;
