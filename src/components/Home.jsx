import React, { useState, useEffect, useMemo } from "react";

export default function Home() {
  const words = useMemo(() => ["full stack Developer", " Django & React Enthusiast", "Tech Learner"], []);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // typing effect
  useEffect(() => {
    if (index === words.length) return;

    if (subIndex < words[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + words[index][subIndex]);
        setSubIndex(subIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setText("");
      setSubIndex(0);
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [subIndex, index, words]);

  // blink cursor
  useEffect(() => {
    const timeout = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(timeout);
  }, []);

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello👋, My name is</div>
          <div className="text-2">G.P Varsha</div>
          <div className="text-3">
            And I'm a <span>{text}</span>
            <span className="cursor">{blink ? "|" : " "}</span>
          </div>
          <a href="#about">Scroll Down</a>
        </div>
      </div>
    </section>
  );
}
