// Par exemple dans votre composant Home.js

import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
//import Blank from '../components/Blank'; // Importez le composant Blank
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/backgroundHome.svg';
import { logementList } from '../data/logementList';

const Home = () => {
  // Récupérer les six premiers éléments de logementList
  const limitedLogements = logementList.slice(0, 6);

  // Diviser la liste des logements limités en sous-listes de 3 éléments chacune
  const groupedLogements = [];
  for (let i = 0; i < limitedLogements.length; i += 3) {
    groupedLogements.push(limitedLogements.slice(i, i + 3));
  }

  return (
    <div>
      <Banner imageUrl={BackgroundSVG} text="Chez vous, partout et ailleurs" />
      <div className="gallery">
        {/* Utilisation de .map pour générer chaque ligne */}
        {groupedLogements.map((row, index) => (
          <div key={index} className="gallery-row">
            {/* Utilisation de .map pour générer chaque Card dans la ligne */}
            {row.map((logement) => (
              <Card key={logement.identifiant} title={logement.title} image={logement.cover}/>
            ))}
          </div>
        ))}
        {/* Utilisez le composant Blank pour créer de l'espace */}
        {/*<Blank />*/}
      </div>
    </div>
  );
};

export default Home;
