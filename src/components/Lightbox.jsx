import React, { useState } from 'react';

const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(null);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className="cursor-pointer rounded shadow hover:scale-105 transition-transform"
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 bg-gray-900 text-white rounded-full p-2"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <img
              src={currentImage}
              alt="Large view"
              className="max-w-full max-h-screen rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Lightbox;
