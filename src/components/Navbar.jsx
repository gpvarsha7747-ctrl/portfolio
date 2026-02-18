import React, { useState, useEffect } from "react";

function Navbar({ menuActive, setMenuActive }) {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            Portfo<span>lio.</span>
          </a>
        </div>

        <ul className={`menu ${menuActive ? "active" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="menu-btn" onClick={toggleMenu}>
          <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
