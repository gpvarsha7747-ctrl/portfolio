import React from "react";

const projectsData = [
  {
    title: "MOVIEMANIAC",
    description: "A dynamic movie discovery web application that allows users to search, explore, and view detailed information about movies using real-time data from the TMDB API. Implemented responsive UI and efficient API handling for seamless user experience.",
    tech: ["React", "JavaScript", "Axios", "TMDB API", "CSS"],
    image1: "act.PNG",
    image2: "angular.PNG"
  },
  {
    title: "Appointment Booking",
    description: "A full-stack appointment scheduling platform with a React frontend and Django REST backend. Implemented slot-based booking logic, JWT authentication, admin controls, and automated background tasks for real-time availability and booking management.",
    tech: ["React", "Redux", "Python", "Django REST Framework", "JWT", "PostgreSQL", "Celery", "Redis"],
    image1: "swift_decod.PNG",
    image2: "Android.PNG"
  },
  {
    title: "To-Do List",
    description: "A task management application that allows users to create, update, and delete tasks with real-time UI updates. Focused on state management and component reusability for a smooth user experience.",
    tech: ["React", "JavaScript"],
    image1: "Mall_shop.PNG",
    image2: "shop_app.PNG"
  },
  {
    title: "JOB Portal",
    description: "A role-based job portal that connects job seekers and recruiters with features like job posting, application tracking, and authentication. Built with React and Tailwind CSS for a responsive and interactive UI.",
    tech: ["React", "Redux", "Tailwind CSS", "Node.js (basic)", "REST API"],
    image1: "Mall_shop.PNG",
    image2: "shop_app.PNG"
  },
  {
    title: "To-Do List (Django)",
    description: "A full-stack task management system built using Django and React, featuring REST APIs for CRUD operations, persistent data storage, and user-based task handling.",
    tech: ["React", "Python", "Django", "Django REST Framework", "SQLite"],
    image1: "Mall_shop.PNG",
    image2: "shop_app.PNG"
  },
  {
    title: "MySHOP",
    description: "A responsive e-commerce application built with React, featuring product listing, cart management, and checkout flow. Implemented efficient state management for handling user interactions and shopping cart updates.",
    tech: ["React", "Redux", "JavaScript", "CSS", "LocalStorage"],
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