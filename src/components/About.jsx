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
              Hello👋, I'm a passionate full stack developer
            </div>

          <p>
          I am an enthusiastic full stack developer with hands-on experience in building scalable web applications using React on the frontend and Django REST Framework on the backend. I have a strong foundation in JavaScript, Python, and API development, and I enjoy designing responsive, user-friendly interfaces while implementing robust backend logic. I am passionate about solving real-world problems and continuously improving my skills across both frontend and backend technologies.
        </p>

            <ul style={{ marginTop: "10px" }}>
              <li>🔹 Passionate about solving complex problems.</li>
              <li>🔹 Constantly improving full stack skills.</li>
              <li>🔹 Quick learner with a keen interest in new technologies.</li>
            </ul>

            <a
              href="Varsha_G.P_FullStack_Developer(1).pdf"
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
