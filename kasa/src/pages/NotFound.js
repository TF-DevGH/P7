// NotFound.js
import React from 'react';
import '../scss/NotFound.scss'; // Import des styles SCSS pour NotFound

const NotFound = () => {
  // Fonction pour effectuer la redirection vers la page d'accueil
  const redirectToHome = () => {
    window.location.href = 'http://localhost:3000/home'; // Redirection vers la page d'accueil
  };

  return (
    <div className="D404">
      <div className="Element404">
        <p className="Text notFoundText">404</p>
      </div>
      <div className="errorMessage-container">
        <p className="Text errorMessage">Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <div className="returnText-container">
        {/* Utiliser onClick pour déclencher la redirection au lieu de <a> */}
        <p className="Text returnText" onClick={redirectToHome}>
          Retourner sur la page d’accueil
        </p>
      </div>
    </div>
  );
};

export default NotFound;
