// import { useEffect, useState } from 'react';
import "../../src/App.css";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-details container md:mb-0">
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-0 px-24 mt-4 md:mt-0 md:mb-14"
      >
        <div className="max-w-lg">
          <div className="w-full flex justify-center mb-6 md:hidden">
            <img
              src="/IMG_02091.jpg"
              alt="dominik"
              className="w-full md:w-full lg:w-full h-auto"
            />
          </div>
          <h1 className="text-left text-xl font-semibold md:text-3xl uppercase">
            Dominik Pilat
          </h1>
          <p className="text-left text-base mt-8 mb-4 leading-tight">
          I’m a Berlin-based artist, and my work explores the power of geometric abstraction. 
          Using bold, clean lines and vibrant color contrasts, I create visual compositions that balance simplicity with depth. 
          Inspired by modernist traditions, my paintings often feature overlapping forms and minimalist palettes, 
          exploring balance and tension within each piece. 

            <br />
            <br />
            I primarily work with acrylic on canvas, 
          blending sharp angles and soft curves to invite viewers into an exploration of form and space. 
          My art reflects a refined yet playful approach to abstraction, offering a fresh, contemporary perspective on geometric painting.
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
              onClick={() => (window.location = "mailto:dominic.pilat@gmail.com")}
            >
              <Mail className="w-full h-full" />
            </Link>
            <Link to="https://www.linkedin.com/in/dominik-pilat/" target="_blank">
              <Linkedin className="w-full h-full" />
            </Link>
          </div>
        </div>
        {/* Zmiana justify-center na text-left dla wyrownania obrazka */}
        <div className="hidden md:flex justify-end items-start w-full">
          <img
            src="/IMG_02091.jpg"
            alt="dominik"
            className="w-full h-auto ml-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
