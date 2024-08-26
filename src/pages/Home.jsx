import "../../src/App.css"
import React from "react";
import {ReactComponent as Kwiaty} from "../assets/kwiaty.svg";
import {ReactComponent as KwiatMobile} from "../assets/kwiatmobile.svg";

const Home = () => {
    return (
        <div className="relative h-screen w-full flex justify-center items-center">
            <div className="hidden md:block absolute top-0 left-0 w-full h-full">
            <Kwiaty className="w-full h-full object-cover z-0" />
            </div>

            <div className="block md:hidden absolute top-0 left-0 w-full h-full">
            <KwiatMobile className="w-full h-full object-cover z-0" />
            </div>
            
           
            <div className="relative z-10 text-center text-white mx-4 md:mx-0">
                <h1 className="text-lg md:text-xl font-normal mb-1 uppercase mt-28 md:mt-36">Dominik Piłat</h1>
                <h2 className="text-2xl md:text-4xl font-medium mb-1 md:max-w-lg">artist, creative, artichoke enthusiast</h2>
                <p className="text-md md:text-xl font-normal">Your favorite creative living in Berlin.</p>
            </div>
        </div>
    );
}

export default Home;
