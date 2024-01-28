import './Printer.css';
import React, { useState } from 'react';
export const Printer = ({ card, fillArray,validator}) => {
  
  const [isImageChanged, setIsImageChanged] = useState(false);

  const handleChange = () => {

    if( !card.img.includes("tick")){
      setIsImageChanged(!isImageChanged);
      fillArray(card.name);
    }

  };



  return (
    <>
    
      <img
          onClick={handleChange}
          className={`imagePlanet ${isImageChanged ? 'changed' : ''}`}
          src={isImageChanged && card.img != "../../../tick.svg"  ? card.img: "../../../universe.svg"}
          alt={card.name}
        
      />
    </>
  );
};


