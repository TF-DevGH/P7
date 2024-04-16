import React from 'react';
import '../scss/Header.scss'; // Importer les styles SCSS pour la version PC
import '../scss/Header_mobile.scss'; // Importer les styles SCSS pour la version mobile
import LogoSVG from '../assets/logoKasa.svg'; // Importer le fichier SVG du logo

const Header = () => {
  // Fonction pour rediriger vers /home
  const goToHome = () => {
    window.location.href = '/home';
  };

  // Fonction pour rediriger vers /about
  const goToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <header>
      <div className="container">
        <div className="header-logo"> {/* Changez la classe en header-logo */}
          <img class="KasaLogo" src={LogoSVG} alt="Kasa Logo"/>
        </div>
        <nav className="menu">
          {/* Utiliser les fonctions pour effectuer la navigation */}
          <h1 className="menu-item accueil" onClick={goToHome}>Accueil</h1>
          <h1 className="menu-item apropos" onClick={goToAbout}>A Propos</h1>
        </nav>
      </div>
    </header>
  );
};

export default Header;
