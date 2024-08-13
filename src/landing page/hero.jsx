
import React from 'react';
import img from '/Concetto24.png';

const Hero = () => {
  return (
    <div>
    <img
      src={img}
      alt="Header Image"
      className="w-full h-full object-cover"
    />
  </div>

  );
};

export default Hero;
