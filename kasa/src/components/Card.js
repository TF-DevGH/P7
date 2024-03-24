// Card.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Card.scss';

function Card({ id, image, title }) {
  return (
    <div className="card">
      <Link to={`/fichelogement/${id}`} className="card_img_container">
        <img src={image} alt={title} className="card_img" />
        <h2 className="card_title"><span className="title_text">{title}</span></h2>
      </Link>
    </div>
  );
}

export default Card;
