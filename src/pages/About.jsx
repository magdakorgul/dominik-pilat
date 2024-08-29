// import { useEffect, useState } from 'react';
import "../../src/App.css";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-details">
      <div
        className="grid grid-cols-1 mx-8 mt-4
            md:grid-cols-2 md:gap-0 md:ml-24 md:mr-24 md:mt-16 md:mb-14 md:mx-32"
      >
        <div className="max-w-lg">
          <div className="flex justify-center mb-6 md:hidden">
            <img
              src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              alt="dominik"
              className="max-w-full h-auto"
            />
          </div>
          <h1 className="text-left text-xl font-semibold md:text-3xl uppercase">
            Dominik Pilat
          </h1>
          <p className="text-left text-base mt-8 mb-4 leading-tight">
            Mauris id augue eu ligula mollis convallis nec at ligula. Praesent
            pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa
            ultrices nibh, at commodo mauris libero vitae mauris.
            <br />
            <br />
            Mauris id augue eu ligula mollis convallis nec at ligula. Praesent
            pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa
            ultrices nibh, at commodo mauris libero vitae mauris.
            <br />
            <br />
            <p className="font-bold text-left mb-1">Enquiries</p>
            <a
              href="mailto:dominic.pilat@gmail.com"
              className="text-left mt-0 mb-1 underline block text-base leading-tight"
            >
              dominic.pilat@gmail.com
            </a>
            <a
              href="https://www.instagram.com/dominikpilat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left mt-0 underline block text-base leading-tight"
            >
              instagram
            </a>
          </p>
          <div className="flex justify-center items-center md:justify-start space-x-8 md:mt-12 mt-24 mb-6">
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
            <Link
              to="javascript:void(0)"
              target="_blank"
              onClick={() => (window.location = "mailto:pilatdom@gmail.com")}
            >
              <Mail className="w-full h-full" />
            </Link>
            <Link to="https://www.linkedin.com" target="_blank">
              <Linkedin className="w-full h-full" />
            </Link>
          </div>
        </div>
        {/* Zmiana justify-center na text-left dla wyrownania obrazka */}
        <div className="hidden md:flex md:items-start md:mb-0 md:ml-24 md:mr-24">
          <img
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
            alt="dominik"
            className="w-fit h-auto md:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
