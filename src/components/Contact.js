import React, { useState, useEffect } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';  // Pastikan CSS AOS diimpor

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      feedback,
      user_email: "bagasiyain205@gmail.com", // Email penerima
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        setFeedback(""); // Clear feedback input
        setStatus(data.message);
        setError(""); // Clear previous errors
      } else {
        setError(data.error || "Failed to send message. Please try again.");
        setStatus("");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setStatus("");
    }
  };

  // Inisialisasi AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Efek animasi sekali saat elemen muncul di layar
  }, []);

  return (
    <div className="contact-page" data-aos="fade-up">
      <h1 data-aos="fade-down">My Contact Details</h1>
      <ul className="contact-list">
        <li data-aos="zoom-in-up">
          <a href="mailto:bagasiyain205@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FaEnvelope className="icon" /> Email
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="tel:+6289699196195" aria-label="Phone">
            <FaPhone className="icon" /> Phone
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="https://www.linkedin.com/in/bagas-gilang-ramadhan-0119a9252" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="https://github.com/bagasgr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="icon" /> GitHub
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="https://instagram.com/bagasg.r04" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" /> Instagram
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="https://tiktok.com/@bagasg.r04" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="icon" /> TikTok
          </a>
        </li>
        <li data-aos="zoom-in-up">
          <a href="https://www.youtube.com/@bagasgilangramadhan7960" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="icon" /> YouTube
          </a>
        </li>
      </ul>

      <form className="feedback-form" onSubmit={handleSubmit} data-aos="fade-up">
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea 
          id="feedback" 
          rows="5" 
          placeholder="Write your suggestions or feedback here..." 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          required 
          data-aos="fade-up"
        />
        <button type="submit" data-aos="fade-up">Submit</button>
      </form>

      {/* Display status messages */}
      {status && <p className="status-message success">{status}</p>}
      {error && <p className="status-message error">{error}</p>}
    </div>
  );
};

export default Contact;
