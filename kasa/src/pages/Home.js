// Home.js
import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card'; // Importer le composant de la carte
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/backgroundHome.svg';

const Home = () => {
  return (
    <body>
      <Banner imageUrl={BackgroundSVG} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {/* Exemple de carte */}
        <Card title="Titre de la location 1" imageUrl="url_de_votre_image_1.jpg" />
        <Card title="Titre de la location 2" imageUrl="url_de_votre_image_2.jpg" />
        {/* Ajoutez les autres cartes ici */}
      </div>
    </body>
  );
};

export default Home;
