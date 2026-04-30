import React from "react";

const skillsData = [
  { name: "HTML5", percentage: 85 },
  { name: "CSS3", percentage: 75 },
  { name: "Tailwind CSS", percentage: 75 },
  { name: "Bootstrap", percentage: 70 },
  { name: "JavaScript (ES6+)", percentage: 85 },
  { name: "React.js", percentage: 85 },
  { name: "Redux Toolkit", percentage: 75 },
  { name: "Python", percentage: 75 },
  { name: "Django", percentage: 85 },
  { name: "Django REST Framework", percentage: 85 },
  { name: "REST APIs", percentage: 80 },
  { name: "JWT Authentication", percentage: 85 },
  { name: "MySQL / SQLite", percentage: 70 },
  { name: "Git & GitHub", percentage: 85 },
  { name: "Postman / API Testing", percentage: 85 },
  { name: "Agile (Scrum Basics)", percentage: 75 }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <div className="column left">
            <div className="text">My creative skills & experiences.</div>
          </div>
          <div className="column right">
            {skillsData.map((skill, index) => (
              <div key={index} className="bars">
                <div className="info">
                  <span>{skill.name}</span>
                  <span>{skill.percentage}%</span>
                </div>
                <div className="line" style={{ width: `${skill.percentage}%` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;