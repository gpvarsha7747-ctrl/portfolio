import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    // Close menu on link click
    const handleLinkClick = () => {
      setMenuActive(false);
    };

    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => link.addEventListener("click", handleLinkClick));

    return () => {
      links.forEach(link => link.removeEventListener("click", handleLinkClick));
    };
  }, []);

  return (
    <>
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
