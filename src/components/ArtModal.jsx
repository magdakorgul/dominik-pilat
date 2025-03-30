import React from "react";
import { ReactComponent as ArrowRight } from "../assets/brown-arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/brown-arrow-left.svg";
import { ReactComponent as X } from "../assets/x.svg";

const ArtModal = ({ painting, items, onClose, onNext, onPrev }) => {
  if (!painting) return null;

  const isSold = painting.price === "sold";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      {/* Desktop Version */}
      <div className="hidden md:flex items-center justify-center">
        <div className="relative bg-white w-[90vw] max-w-[1035px] h-[90vh] max-h-[763px] flex">
          {/* Left side - image */}
          <div className="w-[59%] h-full flex items-center justify-center bg-gray-100 overflow-hidden">
            <img
              src={`/art/${painting.imageUrl}`}
              alt={painting.title}
              className="max-w-[90%] max-h-[90%] object-contain"
            />
          </div>

          {/* Right side - content */}
          <div className="w-[41%] h-full bg-gray-200 p-8 flex flex-col relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#80543F] hover:text-[#5c3d2e]"
            >
              <X width={20} height={20} />
            </button>

            <h1 className="text-black uppercase text-2xl font-semibold mb-2">
              {painting.title}
            </h1>
            <h2 className="text-black text-xl mb-6">
              {isSold ? "sold" : "available"}
            </h2>

            <p className="text-black text-base mb-6 leading-tight">
              {painting.description}
            </p>

            {!isSold && (
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md text-sm bg-black hover:bg-gray-800 text-white py-3 px-4 mb-6 w-full"
              >
                Ask for price
              </button>
            )}

            <p className="text-black text-base mb-2 font-semibold">Details</p>
            <ul className="text-black text-base list-disc pl-4 mb-8">
              {painting.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <div className="mt-auto flex justify-between pt-4">
              <button
                onClick={onPrev}
                className="p-2 text-[#80543F] hover:text-[#5c3d2e]"
              >
                <ArrowLeft width={42} height={13} />
              </button>
              <button
                onClick={onNext}
                className="p-2 text-[#80543F] hover:text-[#5c3d2e]"
              >
                <ArrowRight width={42} height={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden fixed inset-0 overflow-y-auto">
        <div className="min-h-full flex flex-col bg-white">
          {/* Grey top bar with X */}
          <div className="w-full h-12 bg-gray-200 flex justify-end items-center px-4 border-b border-gray-300 sticky top-0 z-10">
            <button onClick={onClose} className="p-2">
              <X width={20} height={20} className="text-[#80543F]" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
          {/* Image section */}
          <div className="flex-1 flex items-center justify-center p-4 bg-gray-100 overflow-hidden">
            <img
              src={`/art/${painting.imageUrl}`}
              alt={painting.title}
              className="w-full max-w-[390px] h-auto max-h-[487px] object-contain"
            />
          </div>

          {/* Content section */}
          <div className="bg-gray-200 p-6 flex flex-col flex-shrink-0">
            <h1 className="text-xl font-semibold text-black mb-2">{painting.title}</h1>
            <p className="text-sm text-black mb-4 italic">{isSold ? "SOLD" : "AVAILABLE"}</p>
            <p className="text-base text-black mb-4">{painting.description}</p>
            
            <p className="text-sm font-semibold text-black mb-2">Details</p>
            <ul className="text-sm text-black list-disc pl-4 mb-6">
              {painting.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>

            <div className="flex justify-between pt-4">
              <button onClick={onPrev} className="p-2">
                <ArrowLeft width={42} height={13} className="text-[#80543F]" />
              </button>
              <button onClick={onNext} className="p-2">
                <ArrowRight width={42} height={13} className="text-[#80543F]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArtModal;