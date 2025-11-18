import React from "react";
import "../styles/hero.css";
import me from "../assets/me.jpg"; 

export default function Hero() {
  return (
    <section className="hero-wrap">
      {/* background */}
      <div className="bg-layer">
        <div className="bg-text">FIN.</div>
        <div className="stars stars1"></div>
        <div className="stars stars2"></div>
        <div className="stars stars3"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

      {/* content */}
      <div className="hero-inner">
        {/* left */}
        <div className="hero-left">
          <h1 className="hero-title inter">Developer</h1>
          <p className="hero-desc doto">
            A dedicated CSE student passionate about web development, automation,
            and solving real-world problems with Python, React, and more.
          </p>
        </div>

        {/* center photo */}
        <div className="hero-center">
          <div className="photo-wrapper">
            <img src={me} alt="Abdullah Al Rifat" />
            <div className="fade-mask"></div>
          </div>
          <h2 className="hero-name inter">Abdullah Al Rifat</h2>
          <p className="hero-alias doto"></p>
        </div>

        {/* right */}
        <div className="hero-right">
          <h1 className="hero-title inter">&lt;Coder&gt;</h1>
          <p className="hero-desc doto">
            Full-Stack Developer specializing in React frontends and Python-powered automation.
          </p>
        </div>
      </div>

      {/* subtitle */}
      <p className="hero-sub doto">
        FIN — not because it’s over, but because every ending begins a new chapter.
      </p>

      {/* buttons */}
      <div className="hero-ctas">
        <a className="btn" href="#projects">See Projects</a>
        <a className="btn ghost" href="#contact">Contact</a>
      </div>
    </section>
  );
}
