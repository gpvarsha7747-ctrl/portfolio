import React from "react";

const skillsData = [
  { name: "HTML5", percentage: 85 },
  { name: "CSS, Tailwind, Bootstrap", percentage: 70 },
  { name: "JavaScript", percentage: 85 },
  { name: "ReactJS", percentage: 75 },
  { name: "Python", percentage: 70 },
  { name: "MySQL", percentage: 70 },
  { name: "Git & GitHub", percentage: 70 },
  { name: "Manual Testing", percentage: 70 },
  { name: "Agile Methodologies", percentage: 65 },
  { name: "Active Directory", percentage: 85 },
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