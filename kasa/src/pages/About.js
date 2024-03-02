import React from 'react';
import Banner from '../components/Banner';
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/imgAbout.svg';
import Collapse from '../components/Collapse'; // Mettez à jour l'importation du composant Collapse

const About = () => {
  return (
    <div>
      <Banner imageUrl={BackgroundSVG}/>
      <div>
        {/* Passez les identifiants des logements comme props à Collapse */}
        <Collapse identifiant="cb2f9222" />
        <Collapse identifiant="d60ca600" />
        <Collapse identifiant="bc6f7112" />
        <Collapse identifiant="1e181317" />
      </div>
    </div>
  );
};

export default About;
