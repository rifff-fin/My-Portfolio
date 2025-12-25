import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import me from "../assets/me.jpg";
import "../styles/hero.css";

/**
 * Small self-contained Typewriter component (no external lib)
 * Props:
 *  - words: array of strings
 *  - typeSpeed: ms per character typing
 *  - deleteSpeed: ms per character deleting
 *  - delaySpeed: pause between full word and deletion
 *  - loop: boolean
 *  - cursor: boolean
 *  - cursorStyle: string (like "|")
 */
function InlineTypewriter({
  words = [],
  typeSpeed = 60,
  deleteSpeed = 40,
  delaySpeed = 2000,
  loop = true,
  cursor = true,
  cursorStyle = "|",
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [visibleCursor, setVisibleCursor] = useState(true);

  const typingRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // cursor blink
    cursorRef.current = setInterval(() => {
      setVisibleCursor((v) => !v);
    }, 500);
    return () => clearInterval(cursorRef.current);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length] || "";
    if (!isDeleting) {
      // type
      typingRef.current = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
        // if finished typing
        if (text.length + 1 === currentWord.length) {
          // wait then start deleting (if loop or not last)
          setTimeout(() => {
            setIsDeleting(true);
          }, delaySpeed);
        }
      }, typeSpeed);
    } else {
      // deleting
      typingRef.current = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }, deleteSpeed);
    }

    return () => clearTimeout(typingRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delaySpeed]);

  useEffect(() => {
    if (!loop && wordIndex >= words.length) {
      // stop if not looping and done
      clearTimeout(typingRef.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, loop]);

  return (
    <span className="inline-typewriter">
      {text}
      {cursor ? <span style={{ opacity: visibleCursor ? 1 : 0 }}>{cursorStyle}</span> : null}
    </span>
  );
}

export default function Hero() {
  const starLayer = useRef(null);
  const blobLayer = useRef(null);
  const photoWrapper = useRef(null);

  /* -----------------------------------------------
     WORD MORPH: LEFT + RIGHT TITLES
  -------------------------------------------------- */
  const leftWords = [
    "Developer",
    "Engineer",
    "AI Researcher",
    "Robotics Engineer",
    "Full-Stack Developer",
    "Problem Solver",
    "Innovator",
    "Creator",
  ];

  const rightWords = [
    "<Coder>",
    "<Thinker>",
    "<Solver>",
    "<Builder>",
    "<Maker>",
    "<Innovator>",
    "<Engineer>",
  ];

  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftWords.length);
      setRightIndex((prev) => (prev + 1) % rightWords.length);
    }, 2100); // every ~2.1s for a little breathing room

    return () => clearInterval(interval);
  }, [leftWords.length, rightWords.length]);

  /* -----------------------------------------------
     GSAP FLOATING ANIMATIONS
  -------------------------------------------------- */
  useEffect(() => {
    gsap.to(".blob", {
      y: 20,
      x: 20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power4.inOut",
    });

    gsap.to(".stars", {
      y: -20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  /* -----------------------------------------------
     STRONG PARALLAX
  -------------------------------------------------- */
  useEffect(() => {
    const handleMove = (e) => {
      const intensity = 50;
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;

      if (starLayer.current)
        starLayer.current.style.transform = `translate(${x}px, ${y}px)`;

      if (blobLayer.current)
        blobLayer.current.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;

      if (photoWrapper.current)
        photoWrapper.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="hero-wrap">
      {/* BACKGROUND */}
      <div className="bg-layer">
        <div className="bg-text">FIN.</div>

        <div ref={starLayer}>
          <div className="stars stars1"></div>
          <div className="stars stars2"></div>
          <div className="stars stars3"></div>
        </div>

        <div ref={blobLayer}>
          <div className="blob b1"></div>
          <div className="blob b2"></div>
          <div className="blob b3"></div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="hero-inner">
        {/* LEFT */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title inter">{leftWords[leftIndex]}</h1>

          <p className="hero-desc doto">
            A dedicated CSE student passionate about web development, automation,
            and solving real-world problems with Python, React, and more.
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.div
          className="hero-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        >
          <div className="photo-wrapper" ref={photoWrapper}>
            <img src={me} alt="Abdullah Al Rifat" />
            <div className="fade-mask"></div>
          </div>

          <h2 className="hero-name inter">Abdullah Al Rifat</h2>

          {/* INLINE TYPEWRITER (RELIABLE) */}
          <p className="hero-alias doto typewriter-line">
            <InlineTypewriter
              words={[
                "Full-Stack Developer",
                "Automation Engineer",
                "Problem Solver",
              ]}
              loop={true}
              cursor={true}
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1800}
            />
          </p>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title inter glitch-text">{rightWords[rightIndex]}</h1>

          <p className="hero-desc doto">
            Full-Stack Developer specializing in React frontends and
            Python-powered automation.
          </p>
        </motion.div>
      </div>

      {/* SUBTEXT */}
      <motion.p
        className="hero-sub doto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        FIN — not because it’s over, but because every ending begins a new
        chapter.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="hero-ctas"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.4 }}
      >
        <a className="btn" href="#projects">
          See Projects
        </a>
        <a className="btn ghost" href="#contact">
          Contact
        </a>
      </motion.div>
    </section>
  );
}
