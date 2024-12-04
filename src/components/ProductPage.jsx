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
    <div>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[product1, product2,product3].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index + 1}`}
            className="w-32 h-32 object-cover cursor-pointer"
            onClick={() => openLightbox(image)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className=" fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <img 
            src={currentImage} 
            alt="Enlarged View" 
            className="w-auto h-auto max-w-full max-h-full"
          />
          <button 
            onClick={closeLightbox} 
            className="absolute top-4 right-4 text-white text-2xl font-bold"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductPage;






// import React from 'react';
// import Lightbox from './LightBox';
// import product1 from '../assets/product1.jpg';
// import product2 from '../assets/product2.jpg';
// import product3 from '../assets/product3.jpg';


// const ProductPage = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <div className="border p-4">
//         <img src={product1} alt="Product 1" className="w-full h-auto" />
//         <p className="mt-2 text-center">Product 1</p>
//       </div>
//       <div className="border p-4">
//         <img src={product2} alt="Product 2" className="w-full h-auto" />
//         <p className="mt-2 text-center">Product 2</p>
//       </div>
//       <div className="border p-4">
//         <img src={product3} alt="Product 3" className="w-full h-auto" />
//         <p className="mt-2 text-center">Product 3</p>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



// const ProductPage = () => {
//   const images = [
//     {product1},
//     '/images/product2.jpg',
//     '/images/product3.jpg',
//   ];

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold mb-4">Product Gallery</h1>
//       <Lightbox images={images} />
//     </div>
//   );
// };

// export default ProductPage;
