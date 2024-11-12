

import React from 'react';
import image from './images/img28.jpg'; 
import './Background.css'; 

const Background = () => {
  return (
    <div className="background" style={{ backgroundImage: `url(${image})` }}>
      
    </div>
  );
};

export default Background;


