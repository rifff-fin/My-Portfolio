import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiPython,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import "../styles/projects.css";

// Import images (uncomment when verified)
// import scienceFairImg from "../assets/37th national science fair 2016 15.jpg";
// import physicsOlympiad3DImg from "../assets/physics olympiad 3d 2019.jpg";
// import creativeTalentImg from "../assets/creative talent hunt 1st 2017.jpg";
// import autoDrivingCarImg from "../assets/auto driving car.jpg";

const techIcons = {
  React: SiReact,
  Python: SiPython,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
};

const allProjects = [
  {
    id: 1,
    title: "BDquake Alert",
    description:
      "Real-time earthquake monitoring & instant email alerts for Bangladesh – powered by USGS API",
    type: "Web",
    techStack: ["JavaScript", "Node.js", "USGS API"],
    image:
      "https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg",
    liveUrl: null,
    githubUrl: "https://github.com/rifff-fin/BDquake-alert",
    featured: true,
  },
  {
    id: 2,
    title: "Video Editing Agency Website",
    description:
      "Responsive React website for a video editing agency with features like infinite scroll and modern UI",
    type: "Web",
    techStack: ["React", "JavaScript", "CSS"],
    image: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg",
    liveUrl: null,
    githubUrl: "https://github.com/rifff-fin/VideoEditingAgencyWebsite",
    featured: true,
  },
  {
    id: 3,
    title: "Research Mate Finder",
    description:
      "Web app for CSE 370 - helps students find research topics, collaborate with researchers, and organize ideas",
    type: "Web",
    techStack: ["PHP", "MySQL", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1591439657848-9f4b9ce436b9?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl: "https://github.com/rifff-fin/Top-Research-Mate-Finder-WebApp",
    featured: false,
  },
  {
    id: 4,
    title: "Underwater Treasure Game",
    description:
      "3D Computer Graphics game with underwater exploration and treasure hunting mechanics",
    type: "Personal",
    techStack: ["Python", "OpenGL", "3D Graphics"],
    image:
      "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl:
      "https://github.com/rifff-fin/Underwater-Treasure-Game-3D-Computer-Graphics",
    featured: false,
  },
  {
    id: 5,
    title: "Adult Income Prediction",
    description:
      "Machine Learning project for CSE442 - predicts adult income using classification algorithms",
    type: "Tool",
    techStack: ["Python", "Scikit-learn", "Pandas"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl:
      "https://github.com/rifff-fin/Adult-Income-Prediction-Project-CSE442",
    featured: false,
  },
  {
    id: 6,
    title: "Arduino Distance Sensor",
    description:
      "Ultrasonic sonar sensor project for accurate distance measurement using Arduino",
    type: "Robotics",
    techStack: ["Arduino", "C++", "Ultrasonic Sensor"],
    image: "https://images.pexels.com/photos/6424588/pexels-photo-6424588.jpeg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Self-Driving RC Car",
    description:
      "Arduino-based autonomous car with corner detection and RC control capabilities - Won Autodrive Prize",
    type: "Robotics",
    techStack: ["Arduino", "C++", "IR Sensors"],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 8,
    title: "Soccer Robot",
    description:
      "Arduino-controlled soccer bot with ball tracking and kicking mechanism",
    type: "Robotics",
    techStack: ["Arduino", "C++", "Sensors"],
    image: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 9,
    title: "Line Following Robot",
    description:
      "Autonomous line-following bot using IR sensors and PID control algorithm",
    type: "Robotics",
    techStack: ["Arduino", "C++", "IR Sensors"],
    image:
      "https://pixabay.com/get/g73b7cba42d1fe2cabfd58f618cd3b633a2ef7d43fd7f45c5b9496db0e8614bed673c6213f8b15f9cd326a88370601fb8.jpg",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 10,
    title: "37th National Science Fair Project",
    description:
      "1st Place winning project in the 37th National Science Fair 2016",
    type: "Science",
    techStack: ["Physics", "Experimentation"],
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    id: 11,
    title: "Physics Olympiad 3D Model",
    description: "3D Physics project for Olympiad competition 2019",
    type: "Science",
    techStack: ["Physics", "3D Modeling"],
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
  {
    id: 12,
    title: "Creative Talent Hunt Performance",
    description:
      "Musical performance project for Creative Talent Hunt competitions",
    type: "Art",
    techStack: ["Guitar", "Music"],
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=srgb&fm=jpg&q=85",
    liveUrl: null,
    githubUrl: null,
    featured: false,
  },
];

const FILTERS = [
  "All",
  "Web",
  "Personal",
  "Tool",
  "Robotics",
  "Science",
  "Art",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [visible, setVisible] = useState(allProjects);
  const projectRefs = useRef([]);

  useEffect(() => {
    const filtered = allProjects.filter(
      (p) => filter === "All" || p.type === filter
    );
    setVisible(filtered);
  }, [filter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div className="projects-wrap-new">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="projects-header"
      >
        <h2 className="projects-title">Featured Projects</h2>
        <p className="projects-subtitle">
          A collection of my recent work and experiments
        </p>
      </motion.div>

      {/* Filters */}
      <div className="projects-filters-new">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn-new ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Bento Grid */}
      <div className="projects-bento-grid">
        {visible.map((project, index) => {
          const isFeatured = project.featured;
          return (
            <motion.div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`project-card-new ${isFeatured ? "featured" : ""}`}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image */}
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <h3 className="project-overlay-title">{project.title}</h3>
                    <p className="project-overlay-desc">
                      {project.description}
                    </p>
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={18} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="project-content">
                <span className="project-type">{project.type}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech-stack">
                  {project.techStack.slice(0, 3).map((tech, i) => {
                    const Icon = techIcons[tech];
                    return (
                      <span key={i} className="tech-badge" title={tech}>
                        {Icon && <Icon size={14} />}
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                  {project.techStack.length > 3 && (
                    <span className="tech-badge more">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
