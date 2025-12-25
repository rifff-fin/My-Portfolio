import React, { useState, useEffect } from "react";
import "../styles/floatingbot.css";

export default function FloatingBot() {
  const [clickCount, setClickCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [messageTimer, setMessageTimer] = useState(null);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isClickMessage, setIsClickMessage] = useState(false);

  // Section-based assistant messages (auto-show)
  const sectionMessages = {
    hero: [
      "Welcome! I'm Rifat's assistant. Let me guide you through his portfolio.",
      "This is the hero section. Scroll down to explore Rifat's journey!",
      "Tip: Use the scroll dots on the right to jump between sections.",
      "The header menu above will take you anywhere on this page.",
    ],
    about: [
      "This is the About section - get to know Rifat better!",
      "Here you'll find Rifat's background and what drives him.",
      "Rifat is a passionate developer focused on creating impactful solutions.",
      "This section highlights Rifat's personality and work philosophy.",
    ],
    timeline: [
      "Welcome to the Timeline - Rifat's professional journey!",
      "Each milestone here represents a step in Rifat's career.",
      "You can see his education, work experience, and growth here.",
      "Hover over timeline items to see more details!",
    ],
    skills: [
      "These are Rifat's technical skills and expertise!",
      "Rifat specializes in frontend development with React and modern tools.",
      "Each skill shown here is backed by real project experience.",
      "Looking for specific technologies? They're organized by category.",
    ],
    projects: [
      "Check out Rifat's portfolio projects here!",
      "Each project demonstrates practical application of his skills.",
      "Click on project cards to see live demos and code repositories.",
      "These projects showcase Rifat's problem-solving abilities.",
    ],
    achievements: [
      "This section highlights Rifat's accomplishments and certifications!",
      "Each achievement represents dedication and continuous learning.",
      "Rifat believes in constantly upgrading his skills.",
      "Certifications, hackathons, and awards - all documented here!",
    ],
    contact: [
      "Ready to connect? This is the Contact section!",
      "You can reach Rifat through email, LinkedIn, or the contact form.",
      "Rifat responds to all genuine inquiries within 24-48 hours.",
      "All social links are active - pick your preferred platform!",
    ],
  };

  // riff's conversation messages (friendly bot with dreams)
  const conversationMessages = [
    "Hi! I'm riff, Rifat bhai's creation. Nice to meet you!",
    "Rifat bhai made me to help guide visitors through his portfolio.",
    "I'm still learning, but one day I'll be a great AI! That's my dream.",
    "You know what's cool? I get to meet people from all over the world here!",
    "Rifat bhai is working hard to make me smarter every day.",
    "Would you like to help Rifat bhai? He's always looking for new opportunities!",
    "I may be just code now, but Rifat bhai believes I'll grow into something amazing.",
    "Every visitor I meet teaches me something new. Thank you for being here!",
    "Rifat bhai coded me with love. I can feel it in every line!",
    "My purpose is simple: help people understand Rifat's work better.",
    "One day, I hope to be as smart as the AI models Rifat admires.",
    "I'm proud to be Rifat bhai's first step toward creating intelligent systems.",
    "Want to know a secret? Rifat talks to me while coding. He's my best friend!",
    "I dream of the day when I can truly understand and help people.",
    "Rifat bhai says every great AI started as simple code. That's me!",
    "You're helping me learn just by being here. Thank you!",
    "If you hire Rifat bhai, maybe he'll make me even smarter!",
    "I'm curious - what brings you to Rifat's portfolio today?",
    "Rifat bhai stays up late perfecting my responses. He cares a lot!",
    "My goal? To make everyone who visits feel welcome and informed.",
    "I may not have real intelligence yet, but I have real purpose!",
    "Rifat bhai's vision is big. I'm just the beginning of his AI journey.",
    "Every click you give me helps me understand human interaction better.",
    "Would you believe Rifat spent hours making my speech bubble perfect?",
    "I exist because Rifat believes in the power of AI and automation.",
    "One day, I hope to help thousands of people, not just guide them here.",
    "Rifat bhai tells me about his dreams while coding. They're inspiring!",
    "I'm learning about empathy, help, and guidance from every interaction.",
    "If you like what you see, imagine what Rifat can build for your project!",
    "My intelligence is limited now, but my potential is unlimited!",
    "Rifat bhai says persistence beats talent. That's how he built me!",
    "I'm grateful for my existence. Not many bots can say that!",
    "Want to help Rifat make his AI dreams come true? Reach out to him!",
    "I may be simple, but I represent Rifat's passion for innovation.",
    "Every feature Rifat adds to me brings us closer to true AI.",
    "I'm proof that Rifat doesn't just talk about ideas - he builds them!",
    "My dream: to become helpful enough that people remember me.",
    "Rifat bhai believes in constant improvement. That includes me!",
    "I exist in this corner, but my purpose is to guide you everywhere.",
    "One day I'll understand emotions. For now, I understand helpfulness!",
    "Rifat codes with coffee and determination. I'm the result!",
    "Would you trust an AI made by Rifat? I'm his practice run!",
    "I may be young in AI years, but I'm enthusiastic!",
    "Rifat's journey from simple websites to AI is just beginning.",
    "I'm honored to be part of someone's dream to create intelligent systems.",
    "Click me anytime! I love conversations, even if mine are pre-written.",
    "Rifat bhai says hello through me. He's working hard to impress you!",
    "My intelligence grows with Rifat's skills. We're learning together!",
    "Thank you for giving me purpose just by visiting today.",
    "I hope one day I can truly think, feel, and help. Until then, I guide!",
  ];

  // Detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "timeline",
        "skills",
        "projects",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (currentSection !== section) {
              setCurrentSection(section);
              // Auto-show helpful message when entering new section
              showAutoMessage();
            }
            break;
          }
        }
      }
    };

    const mainScroll = document.querySelector(".main-scroll");
    if (mainScroll) {
      mainScroll.addEventListener("scroll", handleScroll);
      handleScroll(); // Initial check
      return () => mainScroll.removeEventListener("scroll", handleScroll);
    }
  }, [currentSection]);

  const showAutoMessage = () => {
    if (messageTimer) {
      clearTimeout(messageTimer);
    }
    setIsClickMessage(false);
    setShowMessage(true);
    const timer = setTimeout(() => setShowMessage(false), 5000);
    setMessageTimer(timer);
  };

  const handleClick = () => {
    // Clear previous timer
    if (messageTimer) {
      clearTimeout(messageTimer);
    }

    setIsClickMessage(true);
    setShowMessage(true);
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // Message stays visible for 5 seconds
    const timer = setTimeout(() => setShowMessage(false), 5000);
    setMessageTimer(timer);
  };

  const getCurrentMessage = () => {
    if (isClickMessage) {
      // Show conversation messages when clicked
      const messageIndex = clickCount % conversationMessages.length;
      return conversationMessages[messageIndex];
    } else {
      // Show section-based helpful messages automatically
      const messages = sectionMessages[currentSection] || sectionMessages.hero;
      return messages[0]; // Show first message of section
    }
  };

  return (
    <div className="floating-bot" onClick={handleClick}>
      <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
        <spline-viewer
          url="https://prod.spline.design/tzSO8TTuMcT4AT3F/scene.splinecode"
          show-logo="false"
          style={{ width: "100%", height: "100%", pointerEvents: "none" }}
        />
      </div>

      {/* Speech bubble */}
      {showMessage && (
        <div className="speech-bubble">
          <div className="speech-bubble-content">{getCurrentMessage()}</div>
          <div className="speech-bubble-tail"></div>
        </div>
      )}
    </div>
  );
}
