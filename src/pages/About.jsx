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
          <h1 className="text-xl font-medium md:text-3xl uppercase mb-6 text-left">
            Dominik Piłat
          </h1>
          
          <div className="text-left">
            <p className="mb-4">
            Dominik Piłat is a Berlin-based artist whose work redefines geometric abstraction through a lens of figurative storytelling. With a distinctive style that merges bold, clean lines and vibrant color contrasts, Piłat’s compositions balance simplicity with depth, creating visual narratives that resonate with both clarity and emotional complexity.
            </p>
            
            <p className="mb-4">
            Drawing inspiration from the rhythms of daily life and the people who surround him, Piłat transforms ordinary moments into extraordinary explorations of form and space. His artistic practice is deeply rooted in the principles of branding and design, where he honed the ability to distill complex ideas into singular, powerful forms. This foundation informs his work today, as he uses minimalist geometric shapes and restrained palettes to evoke layered stories and universal themes.

            </p>

            <p className="mb-4">
            Piłat’s paintings are a celebration of the geometric, a playful yet refined investigation of balance, tension, and the interplay of shapes. His work invites viewers to engage with the spaces between forms, offering a fresh, contemporary perspective on abstraction.
            </p>

            <p className="mb-4">
            Emerging from a modernist tradition yet distinctly contemporary, Piłat’s art is a testament to the enduring power of simplicity and the profound beauty of the everyday.
            </p>
            
            <div className="pt-4 font-semibold">
            <a
                href="https://www.instagram.com/dominik_pilat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <br />
              <a
                href="https://www.instagram.com/dominik_pilat"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tiktok
              </a>
              <br />
              <a
                href="mailto:dominic.pilat@gmail.com"
                className="block mb-2"
              >
                Email
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