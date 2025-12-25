import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import FloatingBot from "./components/FloatingBot";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollDots from "./components/ScrollDots";
import "./styles/global.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="app">
          <Header />
          <main className="main-scroll">
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="timeline"><Timeline /></section>
            <section id="skills"><Skills /></section>
            <section id="projects"><Projects /></section>
            <section id="achievements"><Achievements /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
          <ScrollDots />
          <FloatingBot />
        </div>
      )}
    </>
  );
}
//
// #000000
// #F4DFC8
// #F4EAE0
// #FAF6F0