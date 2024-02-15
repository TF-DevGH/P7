// NotFound.js
import React from 'react';
import '../scss/NotFound.scss'; // Import des styles SCSS pour NotFound

const NotFound = () => {
  return (
    <div className="D404"> {/* Utilisation de la classe D404 */}
      <div className="Element404"> {/* Utilisation de la classe Element404 */}
        <p className="Text notFoundText">404</p> {/* Utilisation de la classe Text pour le style du texte */}
      </div>
      <div className="errorMessage-container">
        <p className="Text errorMessage">Oups! La page que vous demandez n'existe pas.</p> {/* Utilisation de la classe Text pour le style du texte */}
      </div>
      <div className="returnText-container">
        <p className="Text returnText">Retourner sur la page d’accueil</p> {/* Utilisation de la classe Text pour le style du texte */}
      </div>
    </div>
  );
};

export default NotFound;
