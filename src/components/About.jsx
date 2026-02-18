function About() {
  return (
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <hr />

        <div className="about-content">
          <div className="column left">
            <img
              src="WhatsApp Image 2025-05-08 at 9.10.38 PM.jpeg"
              alt="Varsha G.P"
              style={{ maxWidth: "100%", borderRadius: "10px" }}
            />
          </div>

          <div className="column right">
            <div className="text">
              Hello👋, I'm a passionate frontend developer
            </div>

            <p>
              I am an enthusiastic fresher frontend developer with a strong foundation in React, JavaScript, 
              and modern web technologies. I'm committed to creating beautiful, responsive, and user-friendly 
              web applications.
            </p>

            <ul style={{ marginTop: "10px" }}>
              <li>🔹 Passionate about solving complex problems.</li>
              <li>🔹 Constantly improving frontend skills.</li>
              <li>🔹 Quick learner with a keen interest in new technologies.</li>
            </ul>

            <a
              href="VarshaG.P_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-buttons-style"
              style={{ marginTop: "20px", display: "inline-block" }}
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
