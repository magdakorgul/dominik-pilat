import "../App.css";
import {Link} from "react-router-dom";


const LargeGrid = ({items, basePath, showPrice}) => {
    console.log('Items:', items);


    return(

        <div className="large-grid grid grid-cols-2 mx-6 gap-x-2
        md:grid-cols-4 md:gap-x-8 md:gap-1 md:mx-32 md:mt-16 uppercase md:max-w-screen-xl">
            {items.map(item => (
                <div key={item.id} className="item paintings-card">
                    <Link to={`/${basePath}/${item.id}`} className="no-underline block">
                    <img src={item.imageUrl} alt={item.title} className="image w-44 h-44 mb-1 px-2 block
                     md:w-64 md:h-64 md:mt-4" />
                    <div className="flex justify-between md:w-64 pt-2">
                    <p className="title text-left font-semibold md:text-base m-0 hidden md:block lg:block">{item.title}</p>
                    {showPrice && (
                    <p className="text-base text-right md:text-base m-0 md:mb-2 hidden md:block lg:block">
                            {item.price} 
                            {item.price !== "sold" && (
                                <>
                                    €
                                </>
                            )}
                            </p>
                    )}
                    </div>
                    </Link>
                </div>
            ))}

        </div>
    );
};

export default LargeGrid;