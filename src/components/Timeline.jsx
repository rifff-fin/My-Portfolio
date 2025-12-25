import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Star } from "lucide-react";
import "../styles/timeline.css";

const events = [
  {
    id: 1,
    year: "2016",
    title: "Started Coding Journey",
    desc: "Began learning programming fundamentals and competed in local coding events. Discovered passion for problem-solving through code.",
    type: "milestone",
    icon: Star,
  },
  {
    id: 2,
    year: "2019",
    title: "Science & Physics Excellence",
    desc: "Participated in multiple Olympiads and science fairs. Won 1st place in Regional Science Olympiad and Excellence Award in Inter-school Physics Fair.",
    type: "achievement",
    icon: Award,
  },
  {
    id: 3,
    year: "2021",
    title: "Higher Secondary Certificate",
    desc: "Lions School & College — Achieved A+ grade (93%). Specialized in Science stream with focus on Physics and Mathematics.",
    type: "education",
    icon: GraduationCap,
  },
  {
    id: 4,
    year: "2022",
    title: "Started University",
    desc: "Enrolled in B.Sc. in Computer Science and Engineering at BRAC University. Began exploring web development, AI, and robotics projects.",
    type: "education",
    icon: GraduationCap,
  },
  {
    id: 5,
    year: "2023",
    title: "Freelance Web Development",
    desc: "Successfully delivered 20+ websites for clients. Specialized in modern React applications, automation tools, and responsive design.",
    type: "work",
    icon: Briefcase,
  },
  {
    id: 6,
    year: "2024",
    title: "University Excellence",
    desc: "Received Best CSE Project Award at BRAC University. Top 10 Finalist in University Hackathon. Continuing to build innovative projects.",
    type: "achievement",
    icon: Award,
  },
  {
    id: 7,
    year: "Present",
    title: "Continuous Learning",
    desc: "Actively learning and building projects in web development, AI research, robotics engineering, and automation. Open to exciting opportunities.",
    type: "milestone",
    icon: Star,
  },
];

const iconColors = {
  education: "var(--color-accent-alt)",
  work: "var(--color-primary)",
  achievement: "var(--color-accent)",
  milestone: "var(--color-text-secondary)",
};

export default function Timeline() {
  const timelineRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-wrap-new">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="timeline-header"
      >
        <h2 className="timeline-title">Career Journey</h2>
        <p className="timeline-subtitle">My path from curious beginner to passionate developer</p>
      </motion.div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {events.map((event, index) => {
          const Icon = event.icon;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={event.id}
              ref={(el) => (timelineRefs.current[index] = el)}
              className={`timeline-item-new ${isLeft ? "left" : "right"}`}
            >
              {/* Dot */}
              <div 
                className="timeline-dot"
                style={{ borderColor: iconColors[event.type] }}
              >
                <Icon size={20} style={{ color: iconColors[event.type] }} />
              </div>

              {/* Year Badge */}
              <div className="timeline-year-badge">{event.year}</div>

              {/* Card */}
              <motion.div
                className="timeline-card-new"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="timeline-card-header">
                  <h4 className="timeline-card-title">{event.title}</h4>
                  <span 
                    className="timeline-card-type"
                    style={{ color: iconColors[event.type] }}
                  >
                    {event.type}
                  </span>
                </div>
                <p className="timeline-card-desc">{event.desc}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}