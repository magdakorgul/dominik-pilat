import "../../src/App.css";
import { ReactComponent as Behance } from "../assets/behance.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as Mail } from "../assets/mail.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact grid grid-cols-1 gap-4 mt-16 mb-14 mx-8 text-left md:grid-cols-2 md:mx-32">
            <div className="flex flex-col text-left">
                <div className="flex flex-col items-start justify-start">
                    <h1 className="uppercase text-left font-semibold text-xl">Contact</h1>
                    <form className="w-full md:w-4/5 mt-4">
                        {/* Pole email */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="email"
                                name="floating_email"
                                id="floating_email"
                                className="block py-2.5 px-0 w-full text-sm text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_email"
                                className="peer-focus:font-medium absolute text-sm text-[#D7C1AF] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Your email
                            </label>
                        </div>

                        {/* Pole krótkiego tekstu */}
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="floating_short_text"
                                id="floating_short_text"
                                className="block py-2.5 px-0 w-full text-sm text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_short_text"
                                className="peer-focus:font-medium absolute text-sm text-[#D7C1AF] duration-300 transform -translate-y-4 scale-90 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                            >
                                How can I help you?
                            </label>
                        </div>

                        {/* Pole tekstowe z automatycznym powiększaniem */}
                        <div className="relative z-0 w-full mb-5 group">
                            <textarea
                                name="floating_message"
                                id="floating_message"
                                rows="1"
                                className="block py-2.5 px-0 w-full text-sm text-white placeholder-[#D7C1AF] bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none overflow-hidden"
                                placeholder=" "
                                required
                                onInput={(e) => {
                                    e.target.style.height = 'auto';
                                    e.target.style.height = e.target.scrollHeight + 'px';
                                }}
                            />
                            <label
                                htmlFor="floating_message"
                                className="peer-focus:font-medium absolute text-sm text-[#D7C1AF] duration-300 transform -translate-y-4 scale-90 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-4"
                            >
                                Your message
                            </label>
                        </div>

                        <div className="w-full mt-8 ">
                            <button
                                type="submit"
                                className="text-black bg-white hover:bg-gray-100 font-medium rounded-sm text-sm w-full px-5 py-2.5 text-center"
                            >
                                Send
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
              href="https://www.instagram.com/dominikpilat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-left mt-0 underline block text-base leading-tight"
            >
              instagram
            </a>
                </div>

                <div className="flex justify-center md:justify-start items-center space-x-8 mt-44 md:mt-28 mb-6">
                    <Link to="https://www.behance.net/dominikpilat" target="_blank" className="w-8 h-8">
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
        </div>
    );
};

export default Contact;
