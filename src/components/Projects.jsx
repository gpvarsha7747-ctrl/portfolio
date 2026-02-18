import React from "react";

const projectsData = [
  {
    title: "MOVIEMANIAC",
    description: "A web app that lets users explore, search, and discover movies using real-time data from TMDB API.",
    tech: ["React", "API"],
    image1: "act.PNG",
    image2: "angular.PNG"
  },
  {
    title: "To Do List",
    description: "A To-Do List app built with React that allows users to add, edit, delete, and mark tasks as complete.",
    tech: ["React", "JavaScript"],
    image1: "swift_decod.PNG",
    image2: "Android.PNG"
  },
  {
    title: "SHOP NEST",
    description: "E-commerce website with user account, cart, and orders management features.",
    tech: ["React", "E-commerce"],
    image1: "Mall_shop.PNG",
    image2: "shop_app.PNG"
  }
];

function Projects() {
  return (
    <section className="services" id="projects">
      <div className="max-width">
        <h2 className="title">My Projects</h2>
        <hr /><br />
        <div className="serv-content">
          {projectsData.map((project, index) => (
            <div key={index} className="card">
              <div className="box">
                <div className="text">{project.title}</div>
                <hr />
                <p>• {project.description}</p>
                <p style={{ fontSize: "12px", marginTop: "10px" }}>
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;