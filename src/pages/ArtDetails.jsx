 import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../src/App.css"
import {ReactComponent as ArrowRight} from "../assets/arrow_right.svg";
import {ReactComponent as ArrowLeft} from "../assets/arrow_left.svg";
import {ReactComponent as X} from "../assets/x.svg";
import {useNavigate} from "react-router-dom";

const PaintingDetails = () => {
    const {paintingId} = useParams();
    const [painting, setPainting] = useState(null);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };


    useEffect(() => {
        fetch(`/paintings/data.json`)
        .then(res => res.json())
        .then(data => {const foundPainting = data.find(item => item.id === parseInt(paintingId));
            setPainting(foundPainting);
            setItems(data);
        })
        .catch(err => console.log('Error fetching the data', err));
    }, [paintingId]);

    if (!painting) {
        return <div>Loading...</div>;
    }

    const isSold = painting.price === "sold";

    const currentIndex = items.findIndex(item => item.id === parseInt(paintingId));
    const nextItem = items[(currentIndex + 1) % items.length];
    const previousItem = items[(currentIndex - 1 + items.length) % items.length];

    return(

        <div className="painting-details">
            <div key={painting.id} className="item">
                <Link to="/art">
            <div className="flex justify-end pr-8 mt-8 mb-4 md:pr-16 md:pt-16 md:mt-0" style={{ cursor: "pointer" }}>
                    <X width="24" height="24"  />
                    </div>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 md:mx-32 md:mt-16 md:mb-0"> 
                        {/* gap 14 zamiast 20 - nie zmniejsza sie tak obrazek, do sprawdzenia czy taka odleglosc jest ok */}
                        <div className="flex flex-col items-center">
                        <div className="w-11/12 h-11/12 aspect-square overflow-hidden flex items-center justify-center">
                        <img 
                        src={`/art/${painting.imageUrl}`} 
                        alt={painting.title} 
                        className="w-11/12 h-11/12 md:object-cover md:w-full md:h-full" />
                        </div>

                        <div className="flex mt-4 mb-4 md:flex justify-between md:mt-6 md:mb-14" 
                        style={{ width: 'calc(100% - 44px)' }}>
                        <Link to={`/art/${previousItem.id}`} className="arrow-left mx-2 md:mx-0">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/art/${nextItem.id}`} className="arrow-righ mx-2 md:mx-0">
                                <ArrowRight />
                            </Link>
                        
                        </div>
                        </div>
                        <div className="mx-6">
                    <h1 className="text uppercase text-left text-xl mb-0 md:mb-0 mt-4 md:-mt-2 font-semibold md:text-2xl">{painting.title}</h1>
                    <h2 className="text text-left text-lg md:text-xl">
                    {isSold ? "sold" : "available"}
                    </h2>
                    <p className="text text-left text-base mt-4 md:mt-4 mb-4 leading-tight">{painting.description}</p>

                    {!isSold && (
                        <Link to="/contact">
                    <button type="button" className="inline-flex items-center justify-center rounded-md text-base md:text-sm bg-white hover:bg-gray-100 text-black py-2 px-4 mt-4 mb-4 md:mb-8 w-full h-12">
                    Ask for price
                    </button>
                    </Link>
                    )}

                    <p className="text text-left text-base mb-1 font-semibold mt-4 md:mt-0">Details <br /></p>
                    <ul className="text text-left text-base list-disc pl-4 mb-4">
                        {painting.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}</ul>

                        {/* <div className="flex justify-between mt-10 mb-10 md:hidden">
                            <Link to={`/paintings/${previousItem.id}`} className="arrow-left">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/paintings/${nextItem.id}`} className="arrow-right">
                                <ArrowRight />
                            </Link>
                        </div> */}
                    </div>
                    </div>
                </div>
                </div>
            ); 
}


export default PaintingDetails;