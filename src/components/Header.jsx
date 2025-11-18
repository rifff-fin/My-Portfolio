import React, { useState } from "react";
import "../styles/header.css";
import { scrollToSection } from "../utils/scrollHelper";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo" onClick={() => scrollToSection("hero")}>
        Fin.</div>

      <nav className={`nav ${open ? "open" : ""}`}>
        <button onClick={() => { scrollToSection("about"); setOpen(false); }}>About</button>
        <button onClick={() => { scrollToSection("timeline"); setOpen(false); }}>Timeline</button>
        <button onClick={() => { scrollToSection("skills"); setOpen(false); }}>Skills</button>
        <button onClick={() => { scrollToSection("projects"); setOpen(false); }}>Projects</button>
        <button onClick={() => { scrollToSection("contact"); setOpen(false); }}>Contact</button>
      </nav>

      <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
