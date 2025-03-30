import "../../src/App.css";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedbackMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/send-email",
        formData
      );

      if (response.data.success) {
        setFeedbackMessage("Email was sent successfully!");
        // Wyczyść formularz
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setFeedbackMessage(
          "There was an error while sending email. Try again later."
        );
      }
    } catch (error) {
      console.error("Error while sending email:", error);
      setFeedbackMessage(
        "There was an error while sending email. Try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact grid grid-cols-1 gap-4 mt-16 mb-0 mx-8 text-left md:grid-cols-2 md:mx-32 md:mb-0">
      <div className="flex flex-col text-left">
        <div className="flex flex-col items-start justify-start">
          <h1 className="uppercase text-left font-semibold text-xl">Contact</h1>
          <form className="w-full md:w-4/5 mt-4" onSubmit={handleSubmit}>
            {/* Pole email */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-base text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder="Your email"
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-xl text-[#D7C1AF] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
              </label>
            </div>

            {/* Pole temat */}
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-base text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                placeholder="How can I help you?"
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-base text-[#D7C1AF] duration-300 transform -translate-y-4 scale-90 top-3 -z-10 origin-[0]"
              >
                
              </label>
            </div>

            {/* Pole wiadomość */}
            <div className="relative z-0 w-full mb-5 group">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="1"
                className="block py-2.5 px-0 w-full text-base text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none overflow-hidden"
                placeholder="Your message"
                required
                onInput={(e) => {
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />
              <label
                htmlFor="message"
                className="peer-focus:font-medium absolute text-base text-[#D7C1AF] duration-300 transform -translate-y-4 scale-90 top-3 -z-10 origin-[0]"
              >
                
              </label>
            </div>

            {/* Komunikat zwrotny */}
            {feedbackMessage && (
              <div className="feedback-message mt-4">{feedbackMessage}</div>
            )}

            {/* Przycisk wyślij */}
            <div className="w-full mt-8 ">
              <button
                type="submit"
                className="text-black bg-white hover:bg-gray-100 font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12">
          <p className="text-left mb-1 font-semibold">Enquiries</p>
          <a
            href="mailto:dominic.pilat@gmail.com"
            className="text-left mt-0 mb-1 underline block text-base leading-tight"
          >
            dominic.pilat@gmail.com
          </a>
          <a
            href="https://www.instagram.com/dominik_pilat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left mt-0 underline block text-base leading-tight"
          >
            instagram
          </a>
        </div>

        {/* <div className="flex justify-center md:justify-start items-center space-x-8 mt-44 md:mt-20 mb-6 md:mb-0">
          <Link
            to="https://www.behance.net/dominikpilat"
            target="_blank"
            className="w-8 h-8"
          >
            <Behance className="w-full h-full inline-block" />
          </Link>
          <Link to="https://www.instagram.com/dominik_pilat" target="_blank">
            <Instagram className="w-full h-full" />
          </Link>
          <a
            href="mailto:dominic.pilat@gmail.com"
            className="w-8 h-8"
            target="_blank"
            rel="noreferrer"
          >
            <Mail className="w-full h-full" />
          </a>
          <Link to="https://www.linkedin.com" target="_blank">
            <Linkedin className="w-full h-full" />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
