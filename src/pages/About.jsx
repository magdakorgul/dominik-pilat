import { useEffect, useState } from 'react';
import "../../src/App.css";
import {ReactComponent as Behance} from "../assets/behance.svg";
import {ReactComponent as Instagram} from "../assets/instagram.svg";
import {ReactComponent as Mail} from "../assets/mail.svg";
import {ReactComponent as Linkedin} from "../assets/linkedin.svg";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className="about-details">
            <div className="grid grid-cols-2 gap-0 ml-24 mr-24 mt-16 mb-14 mx-32">
                <div className="max-w-lg">
                    <h1 className="text-left text-3xl uppercase">Dominik Pilat</h1>
                    <p className="text-left text-base mt-8 mb-4 leading-tight">
                        Mauris id augue eu ligula mollis convallis nec at ligula. Praesent pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa ultrices nibh, at commodo mauris libero vitae mauris.
                        <br /><br />
                        Mauris id augue eu ligula mollis convallis nec at ligula. Praesent pharetra leo erat, et laoreet lacus mattis mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce placerat, orci vitae sollicitudin lacinia, justo massa ultrices nibh, at commodo mauris libero vitae mauris.
                        <br /><br />
                        <p className="font-bold text-left">Enquiries</p>
                        <br />dominic.pilat@gmail.com 
                        <br />instagram
                    </p>
                    <div className="flex items-center space-x-4">
                    <Link to="https://www.behance.net/dominikpilat" target="_blank" className="w-8 h-8" style={{ marginLeft: '-4px', marginRight: '-4px'}}>
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
                <div className="flex justify-center">
                    <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" alt="dominik" className="max-w-full h-auto" />
                </div>
            </div>
        </div>
    );
}

export default About;
