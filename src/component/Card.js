import React, { useState } from 'react';

const Card = ({ title, features, image }) => {
  // Manage the like state (toggled between normal and larger size)
  const [isLiked, setIsLiked] = useState(false);

  // Function to toggle the heart size
  const toggleSize = () => {
    setIsLiked(!isLiked);
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
            onClick={toggleSize}
            className={`transition-transform duration-300 text-red-500`}
            style={{ fontSize: isLiked ? '5rem' : '3rem' }} // Only change the heart's font size
          >
            ♥
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
