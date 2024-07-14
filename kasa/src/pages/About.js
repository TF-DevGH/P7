import React from 'react';
import Banner from '../components/Banner';
import '../scss/Home.scss';
import '../scss/Banner.scss';
import '../scss/About.scss';

import BackgroundSVG from '../assets/imgAbout.svg';
import MenuDepliant from '../components/MenuDepliant'; //Avant c'était "import Collapse from (...) Collapse"
//Pas de About.scss, pourtant "About.js" est bien fonctionnel ! ...

const About = () => {
  return (
    <div>
      <Banner imageUrl={BackgroundSVG} className="AboutBanner" imgClassName="AboutBannerImage"/>
      <div class="ContainerMenuDepliant">
        {/* Passez les titres et descriptions comme props à chaque MenuDepliant */}
        {/* Avant, en-dessous, il n'y avait pas MenuDepliant mais "Collapse" à la place de "MenuDepliant title="Fiabilité"... */}
        <MenuDepliant title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <MenuDepliant title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <MenuDepliant title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <MenuDepliant title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </div>
  );
};

export default About;
