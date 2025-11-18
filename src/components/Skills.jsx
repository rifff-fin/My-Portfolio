import React, { useEffect, useRef } from "react";
import "../styles/skills.css";

const skills = [
  { name: "Algorithms & Data Structures", percent: 98 },
  { name: "Dynamic Programming", percent: 95 },
  { name: "Graph Algorithms", percent: 94 },
  { name: "Python", percent: 96 },  
  { name: "Machine Learning (NumPy, Pandas, Scikit-learn)", percent: 80 },
  { name: "Operating Systems", percent: 90 },
  { name: "Computer Architecture", percent: 88 },
  { name: "MERN Stack (Full-Stack)", percent: 92 },
  { name: "React", percent: 93 },
  { name: "JavaScript", percent: 94 },
  { name: "MySQL,MongoDB & Database Design", percent: 90 },
  { name: "Arduino & Robotics", percent: 85 },
  { name: "Embedded Systems", percent: 82 },
  { name: "Discrete Mathematics", percent: 97 },
  { name: "Event Management", percent: 94 },
  { name: "Public Relations (PR)", percent: 92 },
  { name: "Public Speaking", percent: 96 },
  { name: "Team Leadership", percent: 90 }

];

export default function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progress = entry.target.querySelector(".progress");
            const percent = progress.dataset.percent;
            progress.style.width = percent + "%";
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item"
            ref={(el) => (skillRefs.current[index] = el)}
          >
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.percent}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                data-percent={skill.percent}
                style={{ width: 0 }}
              ></div>
            </div>
          </div>
        ))}
      </div>
  
    </div>
  );
}