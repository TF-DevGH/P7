// Card.js

import React from 'react';
import '../scss/Card.scss'; // Import des styles SCSS pour la carte

const Card = () => {
  return (
    <div className="thumb">
      <div className="thumb-rectangle"></div>
      <div className="thumb-text">Titre de la location</div>
      <div className="thumb-image"></div>
      
    </div>
  );
};

export default Card;
