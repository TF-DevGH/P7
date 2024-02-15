// Card.js

import React from 'react';
import '../scss/Card.scss'; // Import des styles SCSS pour la carte

const Card = ({ title }) => {
  return (
    <div className="thumb">
      <div className="thumb-text">{title}</div>
    </div>
  );
};

export default Card;
