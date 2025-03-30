import "../../src/App.css";
// import { ReactComponent as Behance } from "../assets/behance.svg";
// import { ReactComponent as Instagram } from "../assets/instagram.svg";
// import { ReactComponent as Mail } from "../assets/mail.svg";
// import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4 md:px-0">
      {/* Centered container with max-width */}
      <div className="w-full max-w-[717px]">
        {/* Photo - full width on mobile, constrained on desktop */}
        <div className="w-full mb-8">
          <img
            src="/IMG_02091.jpg"
            alt="dominik"
            className="block w-screen max-w-none -mx-4 md:mx-0 md:w-full md:max-w-[717px] md:max-h-[400px] object-cover"
          />
        </div>

        {/* Text container - strictly left-aligned */}
        <div className="w-full text-left">
          <h1 className="text-xl font-semibold md:text-3xl uppercase mb-6 text-left">
            Dominik Pilat
          </h1>
          
          <div className="text-left">
            <p className="mb-4">
              I'm a Berlin-based artist, and my work explores the power of geometric abstraction. 
              Using bold, clean lines and vibrant color contrasts, I create visual compositions that balance simplicity with depth. 
              Inspired by modernist traditions, my paintings often feature overlapping forms and minimalist palettes, 
              exploring balance and tension within each piece.
            </p>
            
            <p className="mb-4">
              I primarily work with acrylic on canvas, 
              blending sharp angles and soft curves to invite viewers into an exploration of form and space. 
              My art reflects a refined yet playful approach to abstraction, offering a fresh, contemporary perspective on geometric painting.
            </p>
            
            <div className="pt-4">
              <p className="font-bold mb-2">Enquiries</p>
              <a
                href="mailto:dominic.pilat@gmail.com"
                className="underline block mb-2"
              >
                dominic.pilat@gmail.com
              </a>
              <a
                href="https://www.instagram.com/dominik_pilat"
                target="_blank"
                rel="noopener noreferrer"
                className="underline block"
              >
                instagram
              </a>
            </div>
          </div>

          {/* Social links */}
          {/* <div className="flex justify-center md:justify-start space-x-8 mt-12">
            {/* Social icons remain same */}
          </div> 
        </div>
      </div>

  );
};

export default About;