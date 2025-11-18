import React, { useState } from "react";
import "../styles/projects.css";

/* EDIT: replace these with your real projects and links */
const allProjects = [
  { title: "My Portfolio", type: "Web", link: "#" },
  { title: "Coffee Tracker App", type: "Personal", link: "#" },
  { title: "Social Media Manager", type: "Web", link: "#" },
  { title: "Automation Scripts", type: "Tool", link: "#" }
];

const FILTERS = ["All", "Web", "Personal", "Tool"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = allProjects.filter(p => (filter === "All" ? true : p.type === filter));
  return (
    <div className="projects-wrap">
      <h2>Projects</h2>
      <div className="projects-filters">
        {FILTERS.map(f => (
          <button key={f} className={filter === f ? "active" : ""} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <a key={i} className="proj-card" href={p.link} target="_blank" rel="noreferrer">
            <div className="proj-top">{p.title}</div>
            <div className="proj-bottom">{p.type}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
