import React, { useState } from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

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
      const response = await fetch("http://localhost:5000/api/send-email", {
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
          <FaEnvelope className="icon" /> Email: <a href="mailto:bagasiyain205@gmail.com">bagasiyain205@gmail.com</a>
        </li>
        <li>
          <FaPhone className="icon" /> Phone: <a href="tel:+6289699196195">089699196195</a>
        </li>
        <li>
          <FaLinkedin className="icon" /> LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/bagas-gilang-ramadhan-0119a9252/" target="_blank" rel="noopener noreferrer">
            Bagas Gilang Ramadhan
          </a>
        </li>
        <li>
          <FaGithub className="icon" /> GitHub:{" "}
          <a href="https://github.com/bagasgr" target="_blank" rel="noopener noreferrer">
            bagasgr
          </a>
        </li>
        <li>
          <FaInstagram className="icon" /> Instagram:{" "}
          <a href="https://instagram.com/bagasg.r04" target="_blank" rel="noopener noreferrer">
            @bagasg.r04
          </a>
        </li>
        <li>
          <FaTiktok className="icon" /> TikTok:{" "}
          <a href="https://tiktok.com/@bagasg.r04" target="_blank" rel="noopener noreferrer">
            @bagasg.r04
          </a>
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
