import React, { useState } from "react";
import "../styles/header.css";
import { scrollToSection } from "../utils/scrollHelper";
import { FaBars, FaLaptopCode, FaUser, FaProjectDiagram, FaCode, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "About", section: "about" },
    { label: "Timeline",  section: "timeline" },
    { label: "Skills",  section: "skills" },
    { label: "Projects",  section: "projects" },
    { label: "Achievements",  section: "achievements" },
    { label: "Contact", section: "contact" },
  ];

  return (
    <header className="header">
      <div className="logo" onClick={() => scrollToSection("hero")}>
        <FaLaptopCode className="logo-icon" /> Fin.
      </div>

      <nav className={`nav ${open ? "open" : ""}`}>
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => {
              scrollToSection(item.section);
              setOpen(false);
            }}
          >
            {item.icon} {item.label}
          </button>
        ))}
      </nav>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <FaBars size={24} />
      </button>
    </header>
  );
}
