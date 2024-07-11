import React, { useState } from 'react';
import vectord from '../assets/vectord.svg';
import vectorg from '../assets/vectorg.svg';
import '../scss/Caroussel.scss';

const Caroussel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const renderImageNumber = () => {
    return images.length > 1 ? `${currentImageIndex + 1}/${images.length}` : '';
  };

  const showButtons = images.length > 1; // Vérifie s'il y a plus d'une image

  return (
    <div className="caroussel">
      <div className="image-wrapper">
        <img src={images[currentImageIndex]} alt="" className="img_1" />

        {images.length > 1 && (
          <div className="image-number">{renderImageNumber()}</div>
        )}

        {showButtons && ( // Affiche les boutons seulement s'il y a plus d'une image
          <>
            <div className="button-left" onClick={handlePrevImage}>
              <img src={vectorg} alt="Bouton gauche" />
            </div>
            <div className="button-right" onClick={handleNextImage}>
              <img src={vectord} alt="Bouton droit" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Caroussel;
