import React, { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => setVisible(window.scrollY > 300);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`scroll-up-btn ${visible ? "show" : ""}`}
      onClick={scrollToTop}
      style={{ 
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "40px",
        height: "40px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "20px",
        zIndex: 1000
      }}
    >
      ↑
    </div>
  );
}
