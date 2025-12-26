import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star, Scroll } from "lucide-react";
import Modal from "./Modal";
import "../styles/achievements.css";

// Import certificate images
import physicsOlympiadMedalImg from "../assets/physics olympiad madal.jpg";
import creativeTalentHunt2016Img from "../assets/creative talent hunt 2016.jpg";
import nationalChildrenAwardImg from "../assets/National Children's Award Competition a.jpg"; // TODO: Verify exact filename
import physicsOlympiad3D2019Img from "../assets/physics olympiad 3d 2019.jpg";
import physicsOlympiadAnotherImg from "../assets/physics olympiad another same com.jpg";
import autodrivePrizeImg from "../assets/autodrive price n.jpg";
import autoDrivingCarImg from "../assets/auto driving car.jpg";
import nationalScienceFairImg from "../assets/37th national science fair 2016 15.jpg";
import creativeTalentHunt2017Img from "../assets/creative talent hunt 1st 2017.jpg";

const achievements = [
  {
    id: 1,
    title: "Science Olympiad Winner",
    category: "Competition",
    description: "1st Place in Regional Science Olympiad 2019",
    date: "2019",
    icon: Trophy,
    certificateUrl: physicsOlympiad3D2019Img, // Add certificate images later
  },
  // {
  //   id: 2,
  //   title: "Physics Fair Excellence",
  //   category: "Competition",
  //   description: "Excellence Award in Inter-school Physics Fair",
  //   date: "2019",
  //   icon: Medal,
  //   certificateUrl: null,
  // },

  // {
  //   id: 6,
  //   title: "Best Student Project",
  //   category: "Award",
  //   description: "Best CSE Project Award at BRAC University",
  //   date: "2024",
  //   icon: Star,
  //   certificateUrl: null,
  // },

  {
    id: 15,
    title: "37th National Science Fair 2016 - 1st Place",
    category: "Competition",
    description: "1st Place in 37th National Science Fair 2016",
    date: "2016",
    icon: Trophy,
    certificateUrl: nationalScienceFairImg,
  },
  {
    id: 10,
    title: "Creative Talent Hunt 2016",
    category: "Competition",
    description:
      "1st Place in Creative Talent Hunt 2016 - Multiple year achievements",
    date: "2016",
    icon: Award,
    certificateUrl: creativeTalentHunt2016Img,
  },
  {
    id: 16,
    title: "Creative Talent Hunt - 1st Place (2017)",
    category: "Competition",
    description:
      "1st Place in Creative Talent Hunt 2017 - Multiple year achievements in talent competitions",
    date: "2017",
    icon: Trophy,
    certificateUrl: creativeTalentHunt2017Img,
  },
  {
    id: 11,
    title: "National Children's Award - Guitarist 1st Place",
    category: "Competition",
    description:
      "1st Place in National Children's Award Competition as a guitarist",
    date: "2018",
    icon: Trophy,
    certificateUrl: nationalChildrenAwardImg, // TODO: Add certificate image
  },
  {
    id: 9,
    title: "Physics Olympiad Achievements 2019",
    category: "Competition",
    description:
      "Multiple achievements in Physics Olympiad including medal, 3rd place, and competition honors",
    date: "2019",
    icon: Trophy,
    certificateUrl: [physicsOlympiadMedalImg, physicsOlympiadAnotherImg],
  },
  {
    id: 3,
    title: "Web Development Mastery",
    category: "Course",
    description: "Completed Advanced Web Development Course",
    date: "2022",
    icon: Scroll,
    certificateUrl: null,
  },

  {
    id: 5,
    title: "Python Automation Expert",
    category: "Course",
    description: "Python Automation and Scripting Certification",
    date: "2023",
    icon: Scroll,
    certificateUrl: null,
  },

  {
    id: 7,
    title: "20+ Websites Milestone",
    category: "Project",
    description: "Successfully delivered 20+ client websites",
    date: "2023",
    icon: Award,
    certificateUrl: null,
  },
  {
    id: 8,
    title: "Hackathon Finalist",
    category: "Competition",
    description: "Top 10 Finalist in University Hackathon",
    date: "2024",
    icon: Trophy,
    certificateUrl: null,
  },
  {
    id: 14,
    title: "Autonomous Driving Car Project",
    category: "Project",
    description:
      "Won Autodrive Prize for self-driving RC car project with sensors and control systems",
    date: "2023",
    icon: Award,
    certificateUrl: [autoDrivingCarImg, autodrivePrizeImg],
  },
];

const categoryColors = {
  Competition: "var(--color-accent)",
  Course: "var(--color-primary)",
  Award: "var(--color-accent-alt)",
  Project: "var(--color-text-secondary)",
};

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [filter, setFilter] = useState("All");
  const achievementsRef = useRef([]);

  const categories = ["All", "Competition", "Course", "Award", "Project"];
  const filtered = achievements.filter(
    (a) => filter === "All" || a.category === filter
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("achievement-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    achievementsRef.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [filtered]);

  return (
    <div className="achievements-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="achievements-header"
      >
        <h2 className="achievements-title">Achievements & Certificates</h2>
        <p className="achievements-subtitle">
          Milestones and recognitions throughout my journey
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="achievements-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Achievements Grid */}
      <div className="achievements-grid">
        {filtered.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.id}
              ref={(el) => (achievementsRef.current[index] = el)}
              className="achievement-card"
              onClick={() => setSelectedAchievement(achievement)}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="achievement-icon-wrapper"
                style={{ borderColor: categoryColors[achievement.category] }}
              >
                <Icon
                  size={32}
                  style={{ color: categoryColors[achievement.category] }}
                />
              </div>
              <div className="achievement-content">
                <span
                  className="achievement-category"
                  style={{ color: categoryColors[achievement.category] }}
                >
                  {achievement.category}
                </span>
                <h3 className="achievement-name">{achievement.title}</h3>
                <p className="achievement-desc">{achievement.description}</p>
                <span className="achievement-date">{achievement.date}</span>
              </div>
              {achievement.certificateUrl && (
                <div className="achievement-badge">View Certificate</div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
        title={selectedAchievement?.title}
      >
        {selectedAchievement && (
          <div className="achievement-modal-content">
            <div className="achievement-modal-header">
              <span
                className="achievement-modal-category"
                style={{ color: categoryColors[selectedAchievement.category] }}
              >
                {selectedAchievement.category}
              </span>
              <span className="achievement-modal-date">
                {selectedAchievement.date}
              </span>
            </div>
            <p className="achievement-modal-desc">
              {selectedAchievement.description}
            </p>
            {selectedAchievement.certificateUrl ? (
              <div className="achievement-certificates-container">
                {Array.isArray(selectedAchievement.certificateUrl) ? (
                  selectedAchievement.certificateUrl.map((cert, idx) => (
                    <img
                      key={idx}
                      src={cert}
                      alt={`${selectedAchievement.title} - Certificate ${
                        idx + 1
                      }`}
                      className="achievement-certificate-img"
                    />
                  ))
                ) : (
                  <img
                    src={selectedAchievement.certificateUrl}
                    alt={selectedAchievement.title}
                    className="achievement-certificate-img"
                  />
                )}
              </div>
            ) : (
              <div className="achievement-no-certificate">
                <p>Certificate image will be added soon</p>
              </div>
            )}
          </div>
        )}
      </Modal>
    </div>
  );
}
