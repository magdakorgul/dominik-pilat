import "../App.css";
import {Link} from "react-router-dom";


const LargeGrid = ({items}) => {

    return(

        <div className="large-grid grid grid-cols-4 p-8 gap-x-0 gap-5">
            {items.map(item => (
                <div key={item.id} className="item">
                    <Link to={`/paintings/${item.id}`} className="no-underline">
                    <img src={item.imageUrl} alt={item.title} className="image w-72 h-72 mb-0" />
                    </Link>
                    <div className="flex justify-between w-72">
                    <p className="title text-left text-xl mb-0">{item.title}</p>
                    <p className="text-base text-right mb-0">
                            {item.price} 
                            {item.price !== "sold" && (
                                <>
                                    €
                                </>
                            )}
                            </p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default LargeGrid;