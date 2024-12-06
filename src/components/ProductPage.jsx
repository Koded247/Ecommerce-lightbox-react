import React, { useState } from 'react';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const ProductPage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const openLightbox = (image) => {
    setCurrentImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="relative p-4">
      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[product1, product2, product3].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className="w-3/4 h-auto object-contain cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Dimmed Background */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeLightbox}
          ></div>

          {/* Lightbox Content */}
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-2xl w-1/2">
            <img
              src={currentImage}
              alt="Selected Product"
              className="w-full h-auto object-contain rounded-md"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-black text-xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
