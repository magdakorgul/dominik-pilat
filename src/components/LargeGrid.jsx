import "../App.css";
import {Link} from "react-router-dom";


const LargeGrid = ({items, basePath, showPrice}) => {
    console.log('Items:', items);


    return(
<div className="large-grid px-[32px] space-y-[10px]  {/* MOBILE */}
            md:px-[110px] md:grid md:grid-cols-3 md:gap-[10px]">  {/* DESKTOP */}

            {items.map((item, index) => (
                <div key={item.id} className="relative">  {/* Kontener względny */}
                    <div className={`
                        w-full max-w-[326px] mx-auto  {/* MOBILE */}
                        md:max-w-none md:mx-0  {/* DESKTOP */}
                        ${index % 3 === 0 ? 'md:translate-y-[50px]' : ''}  {/* 1. kolumna */}
                        ${index % 3 === 1 ? 'md:translate-y-[275px]' : ''}  {/* 2. kolumna */}
                        ${index % 3 === 2 ? 'md:translate-y-[125px]' : ''}   {/* 3. kolumna */}
                        transition-transform
                    `}>
                        <Link to={`/${basePath}/${item.id}`}>
                            <img 
                                src={`/${basePath}/${item.imageUrl}`} 
                                className="w-[326px] h-[407px] object-cover mx-auto  {/* MOBILE */}
                                       md:w-full md:h-[400px]  {/* DESKTOP */}
                                       hover:scale-105 transition-transform"
                            />
                        </Link>
                    </div>
                </div>
            ))}
</div>
        
     // <div className="large-grid px-[32px] space-y-[10px]
        // md:px-[110px] md:grid md:grid-cols-3 md:gap-[10px]
        // md:[&>div:nth-child(3n+1)]:mt-[50px]
        // md:[&>div:nth-child(3n+3)]:mt-[25px]">
        
        //     {items.map(item => (
        //         <div key={item.id} className="w-full max-w-[326px] mx-auto
        //         md:max-w-none md:mx-0">

        //             <Link to={`/${basePath}/${item.id}`} className="no-underline block">
        //              <img 
        //                 src={`/${basePath}/${item.imageUrl}`} 
        //                 alt={item.title} 
        //                 className="w-[326px] h-[407px] object-cover mx-auto
        //                 md:w-full md:h-[400px]
        //                 hover:scale-105 transition-transform"
                    
        //             />
        //             <div className="flex justify-between lg:w-64 pt-2">
        //             <p className="title text-left font-semibold lg:text-base m-0 hidden lg:block">{item.title}</p>
        //             {showPrice && (
        //             <p className="text-base text-right lg:text-base m-0 lg:mb-2 hidden lg:block"> 
        //                     {item.price === "sold" ? "sold" : "available"}
        //             </p>
        //             )}
        //             </div>
        //             </Link>
        //         </div>
        //     ))}

        // </div>
    );
};

export default LargeGrid;


