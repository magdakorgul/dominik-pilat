import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Navbar = ({ backgroundClass }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={`navbar ${backgroundClass} px-4 relative z-10`}>
        <div className="max-w-screen-xl mx-auto flex items-center justify-between py-6 uppercase md:mx-32">
          <a href="/home" className="text-2xl font-semibold whitespace-nowrap text-white">
            Dominik Piłat
          </a>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 flex-shrink-0 ml-auto"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <div
  className={`${
    isMenuOpen ? "block fixed inset-0 z-50" : "hidden"
  } md:flex md:items-center md:w-auto flex-col justify-center ${backgroundClass} md:relative md:bg-transparent md:z-auto`}
  id="navbar-default"
>



            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white hover:text-gray-400 focus:outline-none md:hidden"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <ul className="flex flex-col items-center justify-center w-full h-full p-4 mt-4 text-center space-y-8 md:flex-row md:space-x-6 md:mt-0 md:space-y-0 md:p-0">
              <li>
                <NavLink
                  to="/design"
                  className={({ isActive }) =>
                    `block text-white text-3xl md:text-base ${
                      isActive ? "underline" : ""
                    } hover:text-gray-400`
                  }
                  onClick={toggleMenu}
                >
                  Design
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/paintings"
                  className={({ isActive }) =>
                    `block text-white text-3xl md:text-base ${
                      isActive ? "underline" : ""
                    } hover:text-gray-400`
                  }
                  onClick={toggleMenu}
                >
                  Paintings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/branding"
                  className={({ isActive }) =>
                    `block text-white text-3xl md:text-base ${
                      isActive ? "underline" : ""
                    } hover:text-gray-400`
                  }
                  onClick={toggleMenu}
                >
                  Branding
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block text-white text-3xl md:text-base ${
                      isActive ? "underline" : ""
                    } hover:text-gray-400`
                  }
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block text-white text-3xl md:text-base ${
                      isActive ? "underline" : ""
                    } hover:text-gray-400`
                  }
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Ikony mediów społecznościowych */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-8 md:hidden">
              <Link to="https://www.behance.net/dominikpilat" target="_blank" className="w-8 h-8">
                <Behance className="w-full h-full inline-block"/>
              </Link>
              <Link to="https://www.instagram.com/dominik_pilat" target="_blank">
                <Instagram className="w-full h-full"/>
              </Link>
              <Link to='javascript:void(0)' target="_blank"
                  onClick={() => window.location = 'mailto:pilatdom@gmail.com'}>
                <Mail className="w-full h-full"/>
              </Link>
              <Link to="https://www.linkedin.com" target="_blank">
                <Linkedin className="w-full h-full"/>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
