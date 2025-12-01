import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ⚠️ Change URL after deploy: don't keep localhost in production
      const response = await axios.post(' https://portfolio-updated-version-5.onrender.com/api/contact', formData);
      toast.success(response.data.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // clear form
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to submit form');
    }
  };

  return (
    <div>
      <h1 style={{ paddingTop: '4rem', fontWeight: 'bolder' }}>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label style={{ color: "white", fontFamily: "Comic-Neue,cursive", fontWeight: "bolder" }}>
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        {/* Email */}
        <label style={{ color: "white", fontFamily: "Comic-Neue,cursive", fontWeight: "bolder" }}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        {/* Message */}
        <label style={{ color: "white", fontFamily: "Comic-Neue,cursive", fontWeight: "bolder" }}>
          Message:
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-container">
        <a href="https://wa.me/+923407386534" target="_blank" rel="noreferrer" className="whatsapp-rounded-button">
          <i className="ri-whatsapp-fill"></i>
        </a>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default ContactForm;
