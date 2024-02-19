// Tag.js
import React from 'react';
import '../scss/Tag.scss'; // Assurez-vous d'importer le fichier de style pour le tag

const Tag = ({ title, description }) => {
  return (
    <div className="tag-container">
      <div className="tag-header">
        <span className="tag-title">{title}</span>
      </div>
      <div className="tag-content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Tag;
