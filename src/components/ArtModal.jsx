import React from "react";
import { ReactComponent as ArrowRight } from "../assets/brown-arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/brown-arrow-left.svg";
import { ReactComponent as X } from "../assets/x.svg";

const ArtModal = ({ painting, items, onClose, onNext, onPrev }) => {
  const isSold = painting.price === "sold";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      {/* Modal container - 1035px × 763px */}
      <div className="relative bg-white w-[90vw] max-w-[1035px] h-[90vh] max-h-[763px] flex">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#80543F] hover:text-[#5c3d2e] transition-colors"
        >
          <X width={20} height={19.8} className="stroke-current" />
        </button>

        {/* Left side - image (610px × 736px) */}
        <div className="w-[60%] max-w-[610px] h-full flex items-center justify-center bg-gray-100">
          <img
            src={`/art/${painting.imageUrl}`}
            alt={painting.title}
            className="max-w-[580px] max-h-[720px] object-contain"
          />
        </div>

        {/* Right side - content (425px wide) */}
        <div className="w-[40%] flex flex-col p-8 bg-gray-200 overflow-hidden">
          {/* Title and status */}
          <h1 className="text-black uppercase text-2xl font-semibold mb-2">
            {painting.title}
          </h1>
          <h2 className="text-black text-xl mb-6">
            {isSold ? "sold" : "available"}
          </h2>

          {/* Description */}
          <p className="text-black text-base mb-6 leading-tight">
            {painting.description}
          </p>

          {/* Price button if available */}
          {!isSold && (
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-sm bg-black hover:bg-gray-800 text-white py-3 px-4 mb-6 w-full"
            >
              Ask for price
            </button>
          )}

          {/* Details */}
          <p className="text-black text-base mb-2 font-semibold">Details</p>
          <ul className="text-black text-base list-disc pl-4 mb-8">
            {painting.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          {/* Navigation arrows at bottom */}
          <div className="mt-auto flex justify-between items-end pb-0 px-0 w-full">
            <button
              onClick={onPrev}
              className="arrow-left ml-0 text-[#80543F] hover:text-[#5c3d2e] translate-x-[-8px]"
            >
              <ArrowLeft width={42} height={13} />
            </button>
            <button
              onClick={onNext}
              className="arrow-right ml-0 text-[#80543F] hover:text-[#5c3d2e] translate-x-[-8px]"
            >
              <ArrowRight width={42} height={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtModal;