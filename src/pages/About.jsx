import "../../src/App.css";
// import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center min-h-screen py-8 px-4 md:px-0 bg-[#80543F] text-white">
      {/* Centered container with max-width */}
      <div className="w-full max-w-[717px]">
        {/* Photo - full width on mobile, constrained on desktop */}
        <div className="w-full mb-8 md:mb-12">
          <img
            src="/IMG_02091.jpg"
            alt="Dominik Piłat"
            className="w-full md:max-w-[717px] md:h-[380px] object-cover"
          />
        </div>

        {/* Text container */}
        <div className="w-full text-left space-y-6">
          <h1 className="text-xl md:text-xl font-semibold uppercase mb-2">
            Dominik Piłat
          </h1>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed">
            <p>
              Dominik Piłat is a Berlin-based artist whose work redefines geometric abstraction through a lens of figurative storytelling. With a distinctive style that merges bold, clean lines and vibrant color contrasts, Piłat's compositions balance simplicity with depth, creating visual narratives that resonate with both clarity and emotional complexity.
            </p>
            
            <p>
              Drawing inspiration from the rhythms of daily life and the people who surround him, Piłat transforms ordinary moments into extraordinary explorations of form and space. His artistic practice is deeply rooted in the principles of branding and design, where he honed the ability to distill complex ideas into singular, powerful forms.
            </p>

            <p>
              Piłat's paintings are a celebration of the geometric, a playful yet refined investigation of balance, tension, and the interplay of shapes. His work invites viewers to engage with the spaces between forms, offering a fresh, contemporary perspective on abstraction.
            </p>

            <p>
              Emerging from a modernist tradition yet distinctly contemporary, Piłat's art is a testament to the enduring power of simplicity and the profound beauty of the everyday.
            </p>
            
            <div className="pt-4 font-medium space-y-2">
              <div>
                <a
                  href="https://www.instagram.com/dominik_pilat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors font-semibold"
                >
                  Instagram
                </a>
              </div>
              <div>
                <a
                  href="https://bsky.app/profile/dominik-pilat.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors font-semibold"
                >
                  Bluesky
                </a>
              </div>
              <div>
                <a
                  href="mailto:dominic.pilat@gmail.com"
                  className="hover:text-gray-300 transition-colors font-semibold"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;