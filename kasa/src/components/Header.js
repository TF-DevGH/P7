import React from 'react';
import '../scss/Header.scss'; // Importer les styles SCSS pour le Header
import LogoSVG from '../assets/logoKasa.svg'; // Importer le fichier SVG du logo

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={LogoSVG} alt="Kasa Logo" />
        </div>
        <div className="menu">
          <h2 className="menu-item">Accueil</h2>
          <h2 className="menu-item">À propos</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
