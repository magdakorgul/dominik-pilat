import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../src/App.css"



const PaintingDetails = () => {
    const {paintingId} = useParams();
    const [painting, setPainting] = useState(null);

    useEffect(() => {
        fetch(`/data.json`)
        .then(res => res.json())
        .then(data => {const foundPainting = data.find(item => item.id === parseInt(paintingId));
            setPainting(foundPainting);
        })
        .catch(err => console.log('Error fetching the data', err));
    }, [paintingId]);

    if (!painting) {
        return <div>Loading...</div>;
    }

    return(

        <div className="painting-details">
            <div key={painting.id} className="item">
                    
                    <div className="grid grid-cols-2 gap-4 ml-12 mr-14 mt-28 mb-14">
                        <div>
                        <img src={painting.imageUrl} alt={painting.title} className="w-11/12 h-11/12 mr-14" />
                        </div>
                        <div >
                    <h1 className="text text-left text-3xl">{painting.title}</h1>
                    <h2 className="text text-left text-xl">{painting.price} €</h2>
                    <p className="text text-left text-base mt-8 mb-4 leading-tight">{painting.description}</p>
                    <button type="button" className="inline-flex items-center justify-center rounded-md bg-white hover:bg-gray-100 text-black py-2 px-4 mt-4 mb-4 w-full h-12">
                    Ask to buy
                    </button>
                    <p className="text text-left text-base">Details <br /></p>
                    <ul className="text text-left text-base list-disc pl-4">
                        {painting.details.map((detail, index) => (
                            <li key={index}>{detail}</li>
                        ))}</ul>
                    </div>
                    </div>
                </div>
                </div>
            ); 
}


export default PaintingDetails;