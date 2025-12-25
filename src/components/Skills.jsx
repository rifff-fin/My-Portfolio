import React, { useEffect, useRef } from "react";
import "../styles/skills.css";
import { FaBrain, FaLaptopCode, FaRobot, FaTools, FaMicrophone, FaPaintBrush } from "react-icons/fa";

const skillCategories = [
  {
    title: "Computer Science Core",
    icon: <FaBrain />,
    skills: [
      { name: "Algorithms & Data Structures", percent: 98 },
      { name: "Dynamic Programming", percent: 95 },
      { name: "Graph Algorithms", percent: 94 },
      { name: "Operating Systems", percent: 90 },
      { name: "Computer Architecture", percent: 88 },
      
    ],
  },

  {
    title: "Programming & Development",
    icon: <FaLaptopCode />,
    skills: [
      { name: "Python", percent: 96 },
      { name: "JavaScript", percent: 94 },
      { name: "React", percent: 93 },
      { name: "MERN Stack (Full-Stack)", percent: 92 },
      { name: "MySQL, MongoDB & Database Design", percent: 90 },
    ],
  },

  {
    title: "AI & Machine Learning",
    icon: <FaRobot />,
    skills: [
      { name: "Machine Learning (NumPy, Pandas, Scikit-learn)", percent: 80 },
    ],
  },

  {
    title: "Hardware & Robotics",
    icon: <FaTools />,
    skills: [
      { name: "Arduino & Robotics", percent: 85 },
      { name: "Embedded Systems", percent: 82 },
    ],
  },

  {
    title: "Soft Skills",
    icon: <FaMicrophone />,
    skills: [
      { name: "Event Management", percent: 94 },
      { name: "Public Relations (PR)", percent: 92 },
      { name: "Public Speaking", percent: 96 },
      { name: "Team Leadership", percent: 90 },
    ],
  },

  {
    title: "Creative Skills",
    icon: <FaPaintBrush />,
    skills: [
      { name: "Video Editing", percent: 99 },
      { name: "Photo Editing & Graphic Design", percent: 99 },
    ],
  },
];

export default function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            const progress = entry.target.querySelector(".progress");
            const percent = progress.dataset.percent;
            progress.style.width = percent + "%";
          }
        });
      },
      { threshold: 0.3 }
    );

    skillRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="skills-container fade-section">
      <h2 className="skills-title">My Skills</h2>

      <div className="categories-wrapper">
        {skillCategories.map((category, i) => (
          <div key={i} className="category-block">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>

            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  ref={(el) => skillRefs.current.push(el)}
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

            <div className="soft-divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
