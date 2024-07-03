// Home.js

import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/backgroundHome.svg';
import { logementList } from '../data/logementList';

const Home = () => {
  const groupedLogements = [];
  for (let i = 0; i < logementList.length; i += 3) {
    groupedLogements.push(logementList.slice(i, i + 3));
  }

  return (
    <div>
      <Banner imageUrl={BackgroundSVG} text="Chez vous, partout et ailleurs" className="HomeBanner" imgClassName="HomeBannerImage" />
      <div className="gallery">
        {groupedLogements.map((row, index) => (
          <div key={index} className="gallery-row">
            {row.map((logement) => (
              // Ajout de l'id en prop pour chaque Card
              <Card key={logement.id} id={logement.id} title={logement.title} image={logement.cover}/>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
