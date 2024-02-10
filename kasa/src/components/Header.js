import React from 'react';
import '../scss/Header.scss'; // Importer les styles SCSS pour le Header
import LogoSVG from '../assets/logoKasa.svg'; // Importer le fichier SVG du logo

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={LogoSVG} alt="Kasa Logo" width="210.32px" height="68px" />
        </div>
        <nav className="menu">
          <h1 className="menu-item accueil">Accueil</h1>
          <h1 className="menu-item apropos">À propos</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
