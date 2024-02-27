// Card.js

import React from 'react';
import '../scss/Card.scss'; // Import des styles SCSS pour la carte
//créer un élément img

// Card.js
function Card({image, title}) {
  return (
    <div className="card">
      <div className="card_img_container">
        <img src={image} alt={title} className="card_img" />
      </div>
      <div className="card_overlay"></div>
      <h2 className="card_title">{title}</h2>
    </div>
  );
}

/*
const Card = ({ title, img }) => {
  return (
    <div className="thumb">
      <div className="thumb-text">{title}</div>
    </div>
  );
};
*/
export default Card;