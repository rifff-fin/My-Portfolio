import React, { useState } from "react";
import "../styles/contact.css";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "e6102dce-b54a-4724-89d8-ce255e3a1de8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Contact Info</h2>
        <p className="small-note">Send me a little note, I will get back to you.</p>

        <div className="info-list">
          <a href="mailto:aal.rifat.002@gmail.com" className="info-item">
            <FaEnvelope /> <span>aal.rifat.002@gmail.com</span>
          </a>

          <a href="tel:0170104480" className="info-item">
            <FaPhone /> <span>0170104480</span>
          </a>

          <a href="https://www.facebook.com/riff.fin.fin" target="_blank" className="info-item">
            <FaFacebook /> <span>Facebook</span>
          </a>

          <a href="https://github.com/rifff-fin" target="_blank" className="info-item">
            <FaGithub /> <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/abdullah-al-rifat-fin/" target="_blank" className="info-item">
            <FaLinkedin /> <span>LinkedIn</span>
          </a>

          <a href="https://www.instagram.com/coca_cola_0_0_0_0/" target="_blank" className="info-item">
            <FaInstagram /> <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="contact-right">
        <h2>Send a Message</h2>

        <form onSubmit={onSubmit} className="contact-form">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            required
          />

          <input
            name="email"
            placeholder="Your email"
            type="email"
            value={form.email}
            onChange={onChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows="5"
            value={form.message}
            onChange={onChange}
            required
          />

          <button type="submit" className="send-btn">
            Send message
          </button>

          <p className="status">{status}</p>
        </form>
      </div>
    </div>
  );
}
