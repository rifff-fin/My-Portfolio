import React from "react";
import "../styles/about.css";

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-card">
        <h2>About</h2>
        <p className="lead">A CSE student at BRAC University building web apps, automations, and creative digital work.</p>

        <div className="about-grid">
          <div className="col">
            <h3>Contact</h3>
            <p>Email: <a href="mailto:rifat.lions.002@mail.com">aal.rifat.002@gmail.com</a></p>
            <p>Phone: 01701004480</p>
            <p>Location: South Badda, Dhaka, Bangladesh</p>
          </div>

          <div className="col">
            <h3>Education</h3>
            <p><strong>BRAC University</strong> — B.Sc. in CSE (current)</p>
          </div>
        </div>

        <h3>Career Objective</h3>
        <p className="muted">
          A dedicated Computer Science and Engineering student. I build websites, automation scripts, and digital content. I like clean design and efficient code.
        </p>
      </div>
    </div>
  );
}
