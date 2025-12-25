import React from "react";
import "../styles/about.css";
import { FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <div className="about-wrap">
      <div className="about-card">

        {/* Animated Icon */}
        <div className="about-icon">
          <FaBrain className="icon-spin" />
        </div>

        <h2>About Me</h2 >
        <p className="lead">
          AI Researcher • Robotics Engineer • Web Developer • Content Developer.  
         
        </p>
        <p className="lead">
         
          A dedicated Computer Science and Engineering student. I build websites, automation scripts, and digital content.  
          I like clean design and efficient code.
        </p>

        {/* Stats Cards */}
        <div className="stats-row">
          <div className="stat-card">
            <h1>3+</h1>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h1>25+</h1>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h1>20+</h1>
            <p>Technologies</p>
          </div>
        </div>

        {/* Core Expertise */}
        <h3 className="expertise-title">Core Expertise Areas</h3>
        <div className="expertise-grid">

          <div className="expert-card">
            <h4>Embedded Systems</h4>
            <p>Microcontroller programming and IoT device development</p>
            <ul>
              <li>Arduino</li>
              <li>ESP32</li>
              <li>C / C++</li>
              <li>Sensor Integration</li>
            </ul>
          </div>

          <div className="expert-card">
            <h4>Machine Learning</h4>
            <p>Neural networks, reinforcement learning, and computer vision</p>
            <ul>
              <li>PyTorch</li>
              <li>TensorFlow</li>
              <li>OpenCV</li>
              <li>NumPy / Pandas / Scikit-learn</li>
            </ul>
          </div>

          <div className="expert-card">
            <h4>Web Development</h4>
            <p>Clean, fast web apps using modern tools</p>
            <ul>
              <li>MERN Stack</li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>XAMPP / SQL</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
