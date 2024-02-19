import React from 'react';
import Banner from '../components/Banner';
import '../scss/Home.scss';
import '../scss/Banner.scss';
import BackgroundSVG from '../assets/imgAbout.svg';
import DropdownMenu from '../components/DropdownMenu'; // Mettez à jour l'importation du composant DropdownMenu

const About = () => {
  return (
    <div>
      <Banner imageUrl={BackgroundSVG}/>
      <div>
        {/* Passez les identifiants des logements comme props à DropdownMenu */}
        <DropdownMenu id="cb2f9222" />
        <DropdownMenu id="d60ca600" />
        <DropdownMenu id="bc6f7112" />
        <DropdownMenu id="1e181317" />
      </div>
    </div>
  );
};

export default About;
