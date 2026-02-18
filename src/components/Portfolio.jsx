// Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import Education from "./Education";

const Portfolio = () => {
  // Navbar sticky and scroll button
  const [sticky, setSticky] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Typed.js refs
  const typedRef1 = useRef(null);
  const typedRef2 = useRef(null);

  // Sample carousel items
  const carouselItems = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
    "Project 5",
  ];

  useEffect(() => {
    // Scroll event
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
      setShowScrollBtn(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);

    // Initialize Typed.js
    const typed1 = new Typed(typedRef1.current, {
      strings: ["Software Engineer", "Frontend Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    const typed2 = new Typed(typedRef2.current, {
      strings: ["I am a fresher", "Frontend Web Developer", "Bengaluru"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    // Auto-rotate carousel every 3 seconds
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed1.destroy();
      typed2.destroy();
      clearInterval(carouselInterval);
    };
  }, [carouselItems.length]);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Menu toggle
  const toggleMenu = () => setMenuActive(!menuActive);

  // Carousel navigation
  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar ${sticky ? "sticky" : ""}`}>
        <div className="logo">Varsha G.P</div>
        <ul className={`menu ${menuActive ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-btn" onClick={toggleMenu}>
          <i className={menuActive ? "active" : ""}></i>
        </div>
      </nav>

      {/* Scroll-Up Button */}
      {showScrollBtn && (
        <button className="scroll-up-btn" onClick={scrollToTop}>
          ↑
        </button>
      )}

      {/* Hero Section */}
      <section id="home" style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1>Hello, I'm Varsha G.P</h1>
        <h2>
          <span ref={typedRef1}></span>
        </h2>
        <h3>
          <span ref={typedRef2}></span>
        </h3>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: "50px 20px" }}>
        <h2 style={{ textAlign: "center" }}>My Projects</h2>
        <div style={{ position: "relative", maxWidth: "1000px", margin: "40px auto" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            overflow: "hidden"
          }}>
            {carouselItems.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: "20px", 
                  background: index === carouselIndex ? "#007bff" : "#eee",
                  color: index === carouselIndex ? "#fff" : "#000",
                  borderRadius: "10px", 
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  transform: index === carouselIndex ? "scale(1.05)" : "scale(1)",
                  cursor: "pointer"
                }}
                onClick={() => setCarouselIndex(index)}
              >
                {item}
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button 
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            ←
          </button>
          
          <button 
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: "-40px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "#007bff",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "18px"
            }}
          >
            →
          </button>
        </div>
      </section>

      {/* Education Section */}
      <Education />
    </div>
  );
};

export default Portfolio;
