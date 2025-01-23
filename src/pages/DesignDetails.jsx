import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../src/App.css";
import { ReactComponent as ArrowRight } from "../assets/arrow_right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow_left.svg";
import {ReactComponent as X} from "../assets/x.svg";
import { useNavigate } from "react-router-dom";

const DesignDetails = () => {
    const { designId } = useParams();
    const [design, setDesign] = useState(null);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    };

    useEffect(() => {
        fetch(`/design/data.json`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched data:", data);
                const foundDesign = data.find(
                    (item) => item.id === parseInt(designId)
                );
                console.log("Found design:", foundDesign);
                setDesign(foundDesign);
                setItems(data);
            })
            .catch((err) => console.log("Error fetching the data", err));
    }, [designId]);

    if (!design) {
        return <div>Loading...</div>;
    }

    const currentIndex = items.findIndex(
        (item) => item.id === parseInt(designId)
    );
    const nextItem = items[(currentIndex + 1) % items.length];
    const previousItem = items[
        (currentIndex - 1 + items.length) % items.length
    ];
        

        


    return (
        <div className="design-details">
            <div key={design.id} className="item">
                <Link to="/design">
                <div className="flex justify-end pr-8 mt-8 mb-4 md:pr-16 md:pt-16 md:mt-0" style={{ cursor: "pointer" }}>
                    <X width="24" height="24"  />
                    </div>
                    </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 md:mx-32 md:mt-16 md:mb-0">
                    <div className="flex flex-col items-center">
                        <div className="w-11/12 h-11/12 aspect-square overflow-hidden flex items-center justify-center">
                            <img
                                src={`/design/${design.imageUrl}`}
                                alt={design.title}
                                className="w-11/12 h-11/12 md:object-cover md:w-full md:h-full"
                            />
                        </div>

                        <div
                            className="flex mt-4 mb-10 md:flex justify-between md:mt-6 md:mb-14"
                            style={{ width: "calc(100% - 44px)" }}
                        >
                            <Link to={`/design/${previousItem.id}`} className="arrow-left mx-2 md:mx-0">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/design/${nextItem.id}`} className="arrow-right mx-2 md:mx-0">
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6">
                        <h1 className="text uppercase text-left text-xl mb-2 mt-0 md:-mt-2 font-semibold md:text-2xl">
                            {design.title}
                        </h1>
                        <p className="text text-left mb-20 md:text-base md:mt-4 md:mb-4 leading-tight">
                            {design.description}
                        </p>

                        {/* <div className="flex justify-between mt-20 mb-10 md:hidden">
                            <Link to={`/design/${previousItem.id}`} className="arrow-left">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/design/${nextItem.id}`} className="arrow-right">
                                <ArrowRight />
                            </Link>
                        </div> */}

                        {/* Ukrywanie na małych ekranach, widoczne na średnich i większych */}
                        <p className="hidden md:block text-left text-base">Details <br /></p>
{design.details && design.details.length > 0 ? (
  <ul className="hidden md:block list-disc pl-4 text-left text-base">
    {design.details.map((detail, index) => (
      <li key={index}>{detail}</li>
    ))}
  </ul>
) : (
  <p className="hidden md:block text-left text-base">No details available.</p>
)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignDetails;
