import React, { useState } from 'react';

import vectorLeft from '../../Assets/Images/vector-left.svg'
import vectorRight from '../../Assets/Images/vector-right.svg'

function Carrousel({ pictures }) {
        
    const [current, setCurrent] = useState(0);
    const length = pictures.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    if (!Array.isArray(pictures) || pictures.length <= 0) {
      return null;
    }
  
    return (
      <section className='slider'>
        <img
					className="vector-left"
					key="vector-left"
					src={vectorLeft}
					alt="Flèche Gauche"
		            onClick={prevSlide} 
        />
        <img
					className="vector-right"
					key="vector-right"
					src={vectorRight}
					alt="Flèche Droite"
			        onClick={nextSlide} 
        />
        {pictures.map((picture, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <img src={picture} alt='travel image' className='image' />
              )}
            </div>
          );
        })}
        <div className="numero-image">
            {current + 1}/{pictures.length}
        </div>
      </section>
    );
  };

export default Carrousel