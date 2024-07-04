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
                    <img src={painting.imageUrl} alt={painting.title} />
                    <div>
                    <p>{painting.title}</p>
                    <p>{painting.price} €</p>
                    <p>{painting.description}</p>
                    <p>{painting.details}</p>
                    </div>
                </div>
                </div>
            ); 
}


export default PaintingDetails;