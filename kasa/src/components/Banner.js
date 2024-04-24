import React from 'react';
import '../scss/Banner.scss'; // Importer les styles SCSS pour la bannière

const Banner = ({ imageUrl, text, className, imgClassName }) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt="Background" className={imgClassName} />
      <div className="content">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default Banner;
