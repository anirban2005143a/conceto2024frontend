

import React from 'react';
import img from '/Concetto24.png';

const Hero = () => {
  return (
    <div className=' ' style={{height:`${window.innerHeight - 80}px`}}>
    <img
      src={img}
      alt="Header Image"
      className="w-full h-full "
      style={{backgroundSize:"100% 100%"}}
    />
  </div>

  );
};

export default Hero;
