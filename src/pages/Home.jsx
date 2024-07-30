import "../../src/App.css"
import React from "react";
// import { Link } from "react-router-dom";
import {ReactComponent as FlowerLeft} from "../assets/flower-left.svg";
import {ReactComponent as FlowerBottom} from "../assets/flower-bottom.svg";
import {ReactComponent as FlowerTop} from "../assets/flower-top.svg";
import {ReactComponent as FlowerRight} from "../assets/flower-right.svg";


const Home = () => {


    return (
<div className="uppercase text-center flex flex-row justify-center items-center space-x-8 mt-8">
<div className="flex flex-col items-center space-y-4">
        <FlowerLeft className="flower-left max-w-60" />
        <FlowerBottom className="flower-bottom max-w-60" />
      </div>
      <div className="flex flex-col items-center space-y-4">
        <FlowerTop className="flower-top max-w-60" />
        
        <div className="content text-center">
            <h1 className="text-base">Dominik Pilat</h1>
                <h2 className="text-4xl">Artist, Creative, <br />
                 Artichoke Enthusiast</h2>
                <p className="text-base">Your favourite creative living in Berlin</p>
                
        </div>
        <FlowerBottom className="flower-bottom max-w-60" />
        </div>
<div className="flex flex-col items-center space-y-4">
    <FlowerRight className="flower-right max-w-60" />
    <FlowerBottom className="flower-bottom max-w-60" />
</div>


</div>
    );
}

export default Home;