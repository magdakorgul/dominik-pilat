import "../App.css";
import {Link} from "react-router-dom";


const LargeGrid = ({items, basePath, showPrice}) => {
    console.log('Items:', items);


    return(

        <div className="large-grid grid grid-cols-2 mx-6 gap-x-2
        md:mx-16 md:mt-10 md:gap-x-0 md:gap-6
        lg:grid-cols-4 lg:gap-x-8 lg:gap-1 lg:mx-32 lg:mt-16 lg:mb-4 uppercase lg:max-w-screen-xl
        2xl:mx-96">
            {items.map(item => (
                <div key={item.id} className="item paintings-card">
                    <Link to={`/${basePath}/${item.id}`} className="no-underline block">
                    {console.log(`Generated image URL for ${item.title}: ${item.imageUrl}`)}

                    <img src={`/${basePath}/${item.imageUrl}`} alt={item.title} className="image w-44 h-44 mb-1 px-2 block
                    md:w-11/12 md:h-full
                     lg:w-64 lg:h-64 lg:mt-4" />
                    <div className="flex justify-between lg:w-64 pt-2">
                    <p className="title text-left font-semibold lg:text-base m-0 hidden lg:block">{item.title}</p>
                    {showPrice && (
                    <p className="text-base text-right lg:text-base m-0 lg:mb-2 hidden lg:block">
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


//wieksze odstepy miedzy wierszami (na wysokosc)
//mniejszy tekst
//hover underline, bez zmiany koloru

//nawigacja - hover underline z b delikatnym szarym