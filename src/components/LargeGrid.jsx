import "../App.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import ArtModal from "./ArtModal";


const LargeGrid = ({items, basePath}) => {

    const [selectedPainting, setSelectedPainting] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleImageClick = (item) => {
        setSelectedPainting(item);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
      const handleNext = () => {
        const currentIndex = items.findIndex(item => item.id === selectedPainting.id);
        const nextItem = items[(currentIndex + 1) % items.length];
        setSelectedPainting(nextItem);
      };
    
      const handlePrev = () => {
        const currentIndex = items.findIndex(item => item.id === selectedPainting.id);
        const prevItem = items[(currentIndex - 1 + items.length) % items.length];
        setSelectedPainting(prevItem);
      };

    return (
        <div className="large-grid px-[32px] pb-[50px] md:pb-20">
            {/* Mobile Layout - Completely Separate */}
            <div className="block md:hidden">
                {items.map((item) => (
                    <div key={item.id} className="mobile-item mb-[10px] last:mb-0">
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

            {/* Desktop Layout - with click handler */}
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
                        onClick={() => handleImageClick(item)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="h-full">
                            <img 
                                src={`/${basePath}/${item.imageUrl}`}
                                alt={item.title}
                                className="desktop-image"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {isModalOpen && selectedPainting && (
            <ArtModal
            painting={selectedPainting}
            items={items}
            onClose={handleCloseModal}
            onNext={handleNext}
            onPrev={handlePrev}
            />
            )}
        </div>
    );
};



export default LargeGrid;


