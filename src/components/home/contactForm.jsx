import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const isFormValid =
    formData.name.trim() && formData.email.trim() && formData.message.trim();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("");
    setError("");

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
      );

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    }
  };

  return (
    <form ref={formRef} className="pf-contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>

      <input
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        autoComplete="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>

      <input
        id="email"
        name="email"
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="message">Message</label>

      <textarea
        id="message"
        name="message"
        placeholder="Tell me about your project..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        className="pf-button -primary-button"
        type="submit"
        disabled={!isFormValid}
      >
        Send Message
        <FaPaperPlane />
      </button>

      {status && <p className="pf-contact-success">{status}</p>}

      {error && <p className="pf-contact-error">{error}</p>}
    </form>
  );
}
