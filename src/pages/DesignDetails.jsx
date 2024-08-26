import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../src/App.css";
import { ReactComponent as ArrowRight } from "../assets/arrow_right.svg";
import { ReactComponent as ArrowLeft } from "../assets/arrow_left.svg";

const DesignDetails = () => {
    const { designId } = useParams();
    const [design, setDesign] = useState(null);
    const [items, setItems] = useState([]);

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
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-14 md:mx-32 md:mt-16 md:mb-14">
                    <div className="flex flex-col items-center">
                        <div className="w-11/12 h-11/12 aspect-square overflow-hidden flex items-center justify-center">
                            <img
                                src={design.imageUrl}
                                alt={design.title}
                                className="w-11/12 h-11/12 md:object-cover md:w-full md:h-full"
                            />
                        </div>

                        <div
                            className="hidden md:flex justify-between md:mt-6"
                            style={{ width: "calc(100% - 44px)" }}
                        >
                            <Link to={`/design/${previousItem.id}`} className="arrow-left">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/design/${nextItem.id}`} className="arrow-right">
                                <ArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="mx-6">
                        <h1 className="text uppercase text-left text-xl mb-2 mt-4 md:-mt-2 font-semibold md:text-2xl">
                            {design.title}
                        </h1>
                        <p className="text text-left md:text-base md:mt-4 md:mb-4 leading-tight">
                            {design.description}
                        </p>

                        <div className="flex justify-between mt-20 mb-10 md:hidden">
                            <Link to={`/design/${previousItem.id}`} className="arrow-left">
                                <ArrowLeft />
                            </Link>
                            <Link to={`/design/${nextItem.id}`} className="arrow-right">
                                <ArrowRight />
                            </Link>
                        </div>

                        {/* Ukrywanie na małych ekranach, widoczne na średnich i większych */}
                        <p className="hidden md:block text-left text-base">Details <br /></p>
                        <ul className="hidden md:block list-disc pl-4 text-left text-base">
                            {design.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignDetails;
