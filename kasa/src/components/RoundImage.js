import React from 'react';
import '../scss/RoundImage.scss';
import { logementList } from '../data/logementList'; // Importez logementList.js

const RoundImage = ({ imageUrl, altText }) => {
    return (
      <div className="round-image-container">
        <img src={imageUrl} alt={altText} className="profile-image"/> {/* Ajustez la taille selon vos besoins */}
      </div>
    );
};

  
  export default RoundImage;
