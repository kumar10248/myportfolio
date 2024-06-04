import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import emailjs from 'emailjs-com';
import { Spinner } from "react-activity";
import "react-activity/dist/Spinner.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    console.log("Form Data: ", formData); // Debug: Check form data before sending

    try {
      const result = await emailjs.send('service_ouguwtl', 'template_f4x3ky5', formData, 'Q7JlR25igI0JbUAdx');
      if (result.status === 200) {
        setMessage("Message sent successfully!");
        setMessageType("success");
        console.log("Success", result);
      } else {
        setMessage("Submission failed. Please try again.");
        setMessageType("error");
        console.log("Failure", result);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setMessageType("error");
      console.error("Error: ", error);
    } finally {
      setIsLoading(false);
    }

    // Clear the message after 3 seconds
    setTimeout(() => {
      setMessage("");
      setMessageType("");
    }, 3000);
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>kumardevashish000@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>+91-8986416949</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>Punjab, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {!isLoading ? (
            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          ) : (
            <Spinner color="#727981" size={32} speed={1} animating={true} />
          )}
        </form>
        {message && (
          <div className={`popup-message ${messageType}`}>{message}</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
