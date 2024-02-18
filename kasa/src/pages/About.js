// Par exemple dans votre composant Home.js

import React from 'react';
import Banner from '../components/Banner';
//import Blank from '../components/Blank'; // Importez le composant Blank
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/imgAbout.svg';
import DropdownMenu from '../components/DropdownMenu'; // Mettez à jour l'importation du composant DropdownMenu

const About = () => {
  return (
    <div>
      <Banner imageUrl={BackgroundSVG}/>
      <div>
    <DropdownMenu /> {/* Mettez à jour l'utilisation du composant */}
    </div>
    </div>

  );
};

export default About;
