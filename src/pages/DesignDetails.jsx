import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../src/App.css"
import {ReactComponent as ArrowRight} from "../assets/arrow_right.svg";
import {ReactComponent as ArrowLeft} from "../assets/arrow_left.svg";

const DesignDetails = () => {
    const {designId} = useParams();
    const [design, setDesign] = useState(null);
    const [items, setItems] = useState([]);


    useEffect(() => {
        fetch(`/design/data.json`)
        .then(res => res.json())
        .then(data => {
            console.log('Fetched data:', data);  // Dodaj logowanie
            const foundDesign = data.find(item => item.id === parseInt(designId));
            console.log('Found design:', foundDesign);  // Dodaj logowanie
            setDesign(foundDesign);
            setItems(data);
        })
        .catch(err => console.log('Error fetching the data', err));
    }, [designId]);

    if (!design) {
        return <div>Loading...</div>;
    }

    // const isSold = painting.price === "sold";

    const currentIndex = items.findIndex(item => item.id === parseInt(designId));
    const nextItem = items[(currentIndex + 1) % items.length];
    const previousItem = items[(currentIndex - 1 + items.length) % items.length];

    return(

        <div className="design-details">
            <div key={design.id} className="item">
                    
                    <div className="grid grid-cols-2 gap-14 mx-32 mt-16 mb-14">
                        <div className="flex flex-col items-center">
                        <div className="w-11/12 h-11/12 aspect-square overflow-hidden flex items-center justify-center">
    <img src={design.imageUrl} alt={design.title} className="object-cover w-full h-full" />
</div>

                        <div className="flex justify-between" style={{ width: 'calc(100% - 14px)' }}>
                        <Link to={`/design/${previousItem.id}`} className="arrow-left">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/design/${nextItem.id}`} className="arrow-right">
                                <ArrowRight />
                            </Link>
                        
                        </div>
                        </div>
                        <div >
                    <h1 className="text uppercase text-left text-3xl ">{design.title}</h1>
                    {/* <h2 className="text text-left text-xl">
                    {isSold ? "sold" : `${painting.price} €`}</h2> */}
                    <p className="text text-left text-base mt-8 mb-4 leading-tight">{design.description}</p>

                    {/* {painting.price !== "sold" && (
                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-black py-2 px-4 mt-4 mb-4 w-full h-12">
                    Ask to buy
                    </button>
                    )} */}

                    <p className="text text-left text-base">Details <br /></p>
                    <ul className="text text-left text-base list-disc pl-4">
                        {design.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}</ul>
                    </div>
                    </div>
                </div>
                </div>
            ); 
}


export default DesignDetails;