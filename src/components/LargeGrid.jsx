import "../App.css";
import {Link} from "react-router-dom";


const LargeGrid = ({items, basePath}) => {
    return (
        <div className="large-grid">
            {/* Mobile Layout - Completely Separate */}
            <div className="block md:hidden px-[32px]">
                {items.map((item) => (
                    <div key={item.id} className="mobile-item">
                        <Link to={`/${basePath}/${item.id}`} className="block">
                            <img 
                                src={`/${basePath}/${item.imageUrl}`}
                                alt={item.title}
                                className="mobile-image"
                            />
                        </Link>
                    </div>
                ))}
            </div>

            {/* Desktop Layout - Your Original Version */}
            <div className="hidden md:block px-[110px] md:grid md:grid-cols-3 md:gap-[10px]">
                {items.map((item, index) => (
                    <div 
                        key={item.id}
                        className={`
                            desktop-item
                            ${index % 3 === 0 ? 'md:relative md:translate-y-[50px]' : ''}
                            ${index % 3 === 1 ? 'md:relative md:translate-y-[275px]' : ''}
                            ${index % 3 === 2 ? 'md:relative md:translate-y-[125px]' : ''}
                        `}
                    >
                        <Link to={`/${basePath}/${item.id}`} className="block h-full">
                            <img 
                                src={`/${basePath}/${item.imageUrl}`}
                                alt={item.title}
                                className="desktop-image"
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default LargeGrid;


