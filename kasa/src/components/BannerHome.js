import React from 'react';
import '../scss/Banner.scss'; // Importer les styles SCSS pour la bannière

const Banner = ({ imageUrl, text }) => {
  return (
    <div className="background-home">
      <img src={imageUrl} alt="Background" className="background-image-home" />
      <div className="content">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Banner;
