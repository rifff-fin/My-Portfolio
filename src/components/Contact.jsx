import React, { useState, useEffect } from "react";
import "../styles/contact.css";
import sendEmail from "../utils/emailClient";

/* EDIT default availability text below */
const defaultAvailability = "Available for freelance work";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [available, setAvailable] = useState(defaultAvailability);

  useEffect(() => {
    // if you later want to fetch availability from a file/api, do it here
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await sendEmail(form);
    setStatus(res.msg);
    if (res.ok) setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrap">
      <div className="contact-card">
        <h2>Contact</h2>
        <p className="available">● <strong>{available}</strong></p>

        <form onSubmit={onSubmit}>
          <input name="name" placeholder="Your name" value={form.name} onChange={onChange} required />
          <input name="email" placeholder="Your email" type="email" value={form.email} onChange={onChange} required />
          <textarea name="message" placeholder="Your message" value={form.message} onChange={onChange} required />
          <button type="submit">Send message</button>
          <p className="status">{status}</p>
        </form>
      </div>
    </div>
  );
}
