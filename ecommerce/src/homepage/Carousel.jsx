import React, { useState } from 'react';

const images = [
  'https://source.unsplash.com/1600x600/?fashion',
  'https://source.unsplash.com/1600x600/?shoes',
  'https://source.unsplash.com/1600x600/?gadgets'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-6 overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt="carousel"
        className="w-full h-64 md:h-96 object-cover transition duration-500"
      />

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
