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
          Dominik Piłat is a Berlin-based artist whose work redefines geometric abstraction through a lens of figurative storytelling. With a distinctive style that merges bold, clean lines and vibrant color contrasts, Piłat’s compositions balance simplicity with depth, creating visual narratives that resonate with both clarity and emotional complexity.  

Drawing inspiration from the rhythms of daily life and the people who surround him, Piłat transforms ordinary moments into extraordinary explorations of form and space. His artistic practice is deeply rooted in the principles of branding and design, where he honed the ability to distill complex ideas into singular, powerful forms. This foundation informs his work today, as he uses minimalist geometric shapes and restrained palettes to evoke layered stories and universal themes. 

            <br />
            <br />
            Piłat’s paintings are a celebration of the geometric, a playful yet refined investigation of balance, tension, and the interplay of shapes. His work invites viewers to engage with the spaces between forms, offering a fresh, contemporary perspective on abstraction. 

Emerging from a modernist tradition yet distinctly contemporary, Piłat’s art is a testament to the enduring power of simplicity and the profound beauty of the everyday.
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
              href="https://www.instagram.com/dominik_pilat"
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
