// Card.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Card.scss';

function Card({ id, image, title }) {
  return (
    <div className="card">
      <div className="card_img_container">
        <Link to={`/fichelogement/${id}`}>
          <img src={image} alt={title} className="card_img" />
        </Link>
        <h2 className="card_title"><span className="title_text">{title}</span></h2>
      </div>
    </div>
  );
}

export default Card;
