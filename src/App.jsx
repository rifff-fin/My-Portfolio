import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollDots from "./components/ScrollDots";
import "./styles/global.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-scroll">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="timeline"><Timeline /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
      <ScrollDots />
    </div>
  );
}
//
// #000000
// #F4DFC8
// #F4EAE0
// #FAF6F0