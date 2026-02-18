import React, { useState } from "react";

function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const educationData = [
    {
      image: "presidency.png.webp",
      alt: "B.Tech IST",
      degree: "B.Tech - Information Science and Technology",
      institution: "Presidency University",
      location: "Bangalore",
      year: "2021-2024"
    },
    {
      image: "Nitte.jpeg",
      alt: "PU College",
      degree: "Pre-University Course",
      institution: "Dr. NSAM PU College",
      location: "Bangalore",
      year: "2019-2021"
    },
    {
      image: "KVRWF.jpg",
      alt: "Secondary School",
      degree: "Secondary School Education",
      institution: "Kendriya Vidyalaya R.W.F",
      location: "Bangalore",
      year: "2016-2019"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % educationData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + educationData.length) % educationData.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    const itemsToShow = 3;
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % educationData.length;
      cards.push({ ...educationData[index], originalIndex: index });
    }
    return cards;
  };

  return (
    <section className="teams" id="education">
      <div className="max-width">
        <h2 className="title">My Education</h2>
        <div className="carousel" style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", marginTop: "30px" }}>
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}
          >
            ←
          </button>

          {/* Cards Container */}
          <div style={{ display: "flex", gap: "20px", overflow: "hidden", justifyContent: "center", flex: 1, maxWidth: "900px", flexWrap: "wrap" }}>
            {getVisibleCards().map((item, idx) => (
              <div key={idx} className="card" style={{ flex: "1 1 250px", minWidth: "200px" }}>
                <div className="box">
                  {item.image && <img src={item.image} alt={item.alt} style={{ maxWidth: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }} />}
                  <div className="text" style={{ marginTop: "10px" }}>{item.degree}</div>
                  <h2 style={{ fontSize: "16px", marginTop: "8px" }}>{item.institution}</h2>
                  <h2 style={{ fontSize: "14px", color: "#666" }}>{item.location}</h2>
                  <p style={{ fontSize: "12px", color: "#999" }}>{item.year}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button 
            onClick={nextSlide}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "#fff",
              border: "none",
              padding: "10px 15px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease"
            }}
          >
            →
          </button>
        </div>

        {/* Carousel Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
          {educationData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "2px solid #667eea",
                background: index === currentIndex ? "#667eea" : "transparent",
                cursor: "pointer",
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;