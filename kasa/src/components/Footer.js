import React from 'react';
import '../scss/Footer.scss';
import LogoSVG from '../assets/logoFooter.svg'; // Remplacez ceci par le chemin vers votre fichier SVG du logo

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={LogoSVG} alt="Kasa Logo" />
      </div>
      <p className="text">
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
