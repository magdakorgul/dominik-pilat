import "../../src/App.css";
import React from "react";
import { ReactComponent as Main } from "../assets/Group 26.svg";
import { ReactComponent as MainMobileTop } from "../assets/Group 29.svg";
import { ReactComponent as MainMobileBottom } from "../assets/Group 28.svg";

const Home = () => {
    return (
        <div className="relative h-screen w-full flex flex-col justify-center items-center lg:mt-0 overflow-hidden -translate-y-12">
            {/* Kontener grafiki na dużych ekranach */}
            <div className="absolute inset-0 justify-center items-center hidden lg:flex">
                <Main className="w-11/12 h-11/12 object-contain z-0" /> 
            </div>

            {/* Kontener grafiki na urządzeniach mobilnych */}
            <div className="lg:hidden w-full flex justify-center mt-0">
                <MainMobileTop className="w-11/12 h-11/12 object-contain" />
            </div>

            {/* Kontener tekstu */}
            <div className="relative z-10 text-center text-white mx-4 lg:mx-0 lg:mb-6 mt-8 flex flex-col items-center">
                <h1 className="text-lg lg:text-xl font-normal mb-1 uppercase">Dominik Piłat</h1>
                <h2 className="text-2xl lg:text-4xl font-medium mb-1 lg:max-w-lg">
    artist, designer, <span className="sm:block whitespace-nowrap">artichoke enthusiast</span></h2>
                <p className="text-md lg:text-xl font-normal">Your favorite creative living in Berlin</p>
            </div>

            {/* Grafika pod napisem na urządzeniach mobilnych */}
            <div className="lg:hidden w-full flex justify-center mt-8">
                <MainMobileBottom className="w-11/12 h-11/12 object-contain" />
            </div>
        </div>
    );
}

export default Home;
