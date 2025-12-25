import React, { useEffect, useState } from "react";
import "../styles/loader.css";

export default function Loader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [displayText, setDisplayText] = useState("");
  
  const fullText = "Initializing Riff Bot... Loading portfolio assets...";

  useEffect(() => {
    let typingInterval;
    let currentIndex = 0;

    const startTyping = () => {
      currentIndex = 0;
      setDisplayText("");
      
      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Wait a bit then restart
          setTimeout(startTyping, 500);
        }
      }, 2500 / fullText.length); // Distribute over 4.5 seconds
    };

    startTyping();

    // Show loader for 5 seconds then fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Complete after fade out
      setTimeout(() => {
        onComplete && onComplete();
      }, 500);
    }, 5000);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="loader-overlay-spline">
      {/* Hacking Style Text - Bottom Left */}
      <div className="loader-hacking-text">
        <div className="hacking-prompt">
          <span className="prompt-symbol">&gt;</span>
          <span className="typing-text">{displayText}</span>
          <span className="cursor-blink">_</span>
        </div>
      </div>

      {/* Spline 3D Bot */}
      <div className="spline-container">
        <spline-viewer
          url="https://prod.spline.design/tzSO8TTuMcT4AT3F/scene.splinecode"
          show-logo="false"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}