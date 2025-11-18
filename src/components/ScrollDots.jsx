import React, { useEffect, useState } from "react";
import "../styles/scrolldots.css";

export default function ScrollDots() {
  const sections = ["hero","about","timeline","skills","projects","contact"];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const obsOptions = { root: null, threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) setActive(en.target.id);
      });
    }, obsOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-dots">
      {sections.map(s => (
        <a key={s} href={`#${s}`} className={`dot ${active===s ? "active" : ""}`} title={s} />
      ))}
    </div>
  );
}
