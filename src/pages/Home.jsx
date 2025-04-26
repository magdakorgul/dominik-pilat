import "../../src/App.css";
import React from "react";
import mainImage from "../assets/web_main_desktop.png";
import mainImageMobile from "../assets/web_main_mobile.png"

const Home = () => {
    return (
        <div className="relative w-full min-h-screen">
            {/* Desktop Version */}
            <div className="hidden lg:flex flex-col h-screen bg-global overflow-hidden pb-10">
                {/* Text Section - With safe minimum space */}
                <div className="h-[30vh] flex flex-col justify-end items-center text-white pb-4">
                    <h1 className="text-lg font-normal mb-1 uppercase">Dominik Piłat</h1>
                    <h2 className="text-3xl font-medium mb-1 text-center">
                        painting bold stories<span className="block">with simple forms</span>
                    </h2>
                    <p className="text-lg font-normal">Your favorite artist living in Berlin</p>
                </div>

                {/* Photo Section - Responsive but constrained */}
                <div className="flex-1 flex justify-center min-h-0">
                <div className="w-full max-w-[1003px] h-full">
                        <img 
                            src={mainImage} 
                            alt="Artwork"
                            className="w-full h-full object-contain" 
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Version */}
            <div className="lg:hidden relative min-h-screen bg-global">
                {/* Text Container - Fixed height */}
                <div className="pt-8 px-4 text-center text-white z-10 h-[25vh] min-h-[200px] flex flex-col justify-end pb-4 tight-lines;">
                    <h1 className="text-lg font-normal mb-1 uppercase ">Dominik Piłat</h1>
                    <h2 className="text-2xl font-medium mb-1 tight-lines">
                        painting bold stories<span className="block">with simple forms</span>
                    </h2>
                    <p className="text-md font-normal">Your favorite artist living in Berlin</p>
                </div>

                {/* Full-width Photo - Flexible remaining space */}
                <div className="absolute inset-x-0 top-[30vh] bottom-0">
                    <img
                        src={mainImageMobile}
                        alt="Artwork"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;