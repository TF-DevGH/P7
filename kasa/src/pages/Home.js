import React from 'react';
import '../scss/Home.scss'; // Importer les styles SCSS pour la page d'accueil
import BackgroundSVG from '../assets/backgroundHome.svg'; // Importer le fichier SVG du fond d'écran

const Home = () => {
  return (
    <body>
      <main>
        <div className="background">
          <img src={BackgroundSVG} alt="Background" className="background-image" />
          <div className="content">
            <h2>Chez vous, partout et ailleurs</h2>
          </div>
        </div>
      </main>
    </body>
  );
};

export default Home;
