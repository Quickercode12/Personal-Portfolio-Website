import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../styles/contact.css";
import { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // page reload roko
    try {
      const res = await axios.post(
        "http://localhost:4000/api/contact",
        formData
      );
      setResponseMsg(res.data.message);
      setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
    } catch (err) {
      console.error(err);
      setResponseMsg("Something went wrong, please try again.");
    }
  };
  return (
    <div className="contact_container">
      <div className="contact_div_01">
        <h1>Contact</h1>
        <p>
          Feel free to reach out for collaboration, projects, or any inquiries.
          I’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="contact_div_02">
        {/* LEFT SIDE */}
        <div className="contact_div_left">
          <div className="contact_info_block">
            <h2>Contact Info</h2>
            <p>You can reach me anytime through the details below.</p>

            <div className="info_item">
              <FaMapMarkerAlt className="info_icon" />
              <div>
                <h3>Our Location</h3>
                <p>Jubili hill road no 5</p>
                <p>Hyderabad, india</p>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneAlt className="info_icon" />
              <div>
                <h3>Phone Number</h3>
                <p>+91 7877909324</p>
              </div>
            </div>

            <div className="info_item">
              <FaEnvelope className="info_icon" />
              <div>
                <h3>Email Address</h3>
                <p>gautamgaur2004@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact_div_right">
          {" "}
          <h2>Get in Touch</h2> <p>Feel free to reach out</p>{" "}
          <form className="contact_form" onSubmit={handleSubmit}>
            {" "}
            <div className="form_group">
              {" "}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />{" "}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />{" "}
            </div>{" "}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />{" "}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>{" "}
            <button type="submit">Send Message</button>{" "}
          </form>{" "}
          {responseMsg && <p>{responseMsg}</p>}{" "}
        </div>
      </div>
    </div>
  );
}

export default Contact;
