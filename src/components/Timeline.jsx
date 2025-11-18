import React from "react";
import "../styles/timeline.css";

/* EDIT: update events to match your CV exactly */
const events = [
  { year: "2016", title: "Started coding", desc: "Began learning basics and competed in local events." },
  { year: "2019", title: "Science/Physics events", desc: "Participated in Olympiads and fairs." },
  { year: "2021", title: "HSC", desc: "Lions School & College — A+ (93%)" },
  { year: "2022 - Present", title: "BRAC University", desc: "B.Sc. in CSE — Building projects & learning." },
  { year: "2023", title: "20+ Websites", desc: "Built many personal and client websites." }
];

export default function Timeline() {
  return (
    <div className="timeline-wrap">
      <h2>Timeline</h2>
      <div className="timeline">
        {events.map((e, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-left"><div className="year">{e.year}</div></div>
            <div className="timeline-right">
              <div className="card">
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
