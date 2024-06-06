import React from 'react';
import '../scss/Header.scss'; // Importer les styles SCSS pour la version PC et mobile
import LogoSVG from '../assets/logoKasa.svg'; // Importer le fichier SVG du logo

const Header = () => {
  const goToHome = () => {
    window.location.href = '/home';
  };

  const goToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <header>
      <div className="container">
        <div className="header-logo">
          <img className="KasaLogo" src={LogoSVG} alt="Kasa Logo"/>
        </div>
        <nav className="menu">
          <h1 className="menu-item accueil" onClick={goToHome}>Accueil</h1>
          <h1 className="menu-item apropos" onClick={goToAbout}>A Propos</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
