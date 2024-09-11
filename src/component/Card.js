import React, { useState } from 'react';

const Card = ({ title, features, image }) => {
  const [size, setSize] = useState(3); // Initial size

  const increaseSize = () => {
    setSize(size + 1); // Increase the size on each click
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 m-4 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ul className="text-gray-700 text-base">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
        <div className="pt-4">
          <button
            onClick={increaseSize}
            className={`transition-transform duration-300 text-red-500`}
            style={{ fontSize: `${size}rem` }} // Dynamically set the size
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
