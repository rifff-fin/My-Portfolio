import React, { useState } from "react";
import "../styles/global.css";

export default function Footer() {
  const [showEgg, setShowEgg] = useState(false);
  return (
    <footer className="site-footer">
      <div>
        © {new Date().getFullYear()} Fin — Built by Al Rifat
      </div>

      <div className="footer-right">
        <a href="/src/assets/MY_CV.pdf" download>Download CV</a>
        <button className="egg-btn" onClick={() => setShowEgg(!showEgg)}>·</button>
      </div>

      {showEgg && <div className="easter">You found an easter egg 🐱 — nice!</div>}
    </footer>
  );
}
