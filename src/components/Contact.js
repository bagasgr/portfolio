import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

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

  return (
   <div className="contact-page">
  <h1>My Contact Details</h1>
  <ul className="contact-list">
    <li>
      <FaEnvelope className="icon" />
      <a href="mailto:bagasiyain205@gmail.com" aria-label="Email">Email</a>
    </li>
    <li>
      <FaPhone className="icon" />
      <a href="tel:+6289699196195" aria-label="Phone">Phone</a>
    </li>
    <li>
      <FaLinkedin className="icon" />
      <a href="https://www.linkedin.com/in/bagas-gilang-ramadhan-0119a9252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
    </li>
    <li>
      <FaGithub className="icon" />
      <a href="https://github.com/bagasgr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub</a>
    </li>
    <li>
      <FaInstagram className="icon" />
      <a href="https://instagram.com/bagasg.r04" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
    </li>
    <li>
      <FaTiktok className="icon" />
      <a href="https://tiktok.com/@bagasg.r04" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TikTok</a>
    </li>
    <li>
      <FaYoutube className="icon" />
      <a href="https://youtube.com/@bagasg.r04" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YouTube</a>
    </li>
  </ul>

      <form className="feedback-form" onSubmit={handleSubmit}>
        <label htmlFor="feedback">Your Feedback:</label>
        <textarea id="feedback" rows="5" placeholder="Write your suggestions or feedback here..." value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      {/* Display status messages */}
      {status && <p className="status-message success">{status}</p>}
      {error && <p className="status-message error">{error}</p>}
    </div>
  );
};

export default Contact;
