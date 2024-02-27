// FicheLogement.js
import React from 'react';
import Caroussel from '../components/Caroussel';
import BackgroundSVG from '../assets/accomodation.svg';
import Collapse from '../components/Collapse';
import '../scss/FicheLogement.scss';
import Tag from '../components/Tag';
import Note from '../components/Note';
import RoundImage from '../components/RoundImage'; // Importer le composant RoundImage
import { logementList } from '../data/logementList'; // Importer les données des logements
import { useParams, Navigate } from "react-router-dom";

const FicheLogement = () => {
  const pageWidth = '100vw';
  const pageMargin = '5vw';
  const availableWidth = `calc(${pageWidth} - 2 * ${pageMargin})`;

  // Identifiants des logements à afficher
  //Mentorat
  const { id } = useParams();

  // Filtrer les logements à afficher en fonction des identifiants
  const logementsAAfficher = logementList.find(logement => (logement.id===id));

  // Tableau des images à afficher dans le carrousel
  const images = logementsAAfficher.pictures;

  // Déterminer si les boutons next/prev doivent être affichés en fonction du nombre d'images
  const showNavigationButtons = images.length > 1;

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={images} availableWidth={availableWidth} showNavigationButtons={showNavigationButtons} />
        <div className="title-wrapper">
          <div className="host-info-wrapper">
            <h1 className="titre1">{logementsAAfficher.title}</h1>
            <div className="text-container">
              <p>{logementsAAfficher.length > 0 && logementsAAfficher[0].hôte.nom}</p> {/* Afficher le nom du premier hôte */}
            </div>
            <div className="profile-pic-container">
              <RoundImage imageUrl={logementsAAfficher.length > 0 && logementsAAfficher[0].hôte.photo} altText={logementsAAfficher.length > 0 && logementsAAfficher[0].hôte.nom} /> {/* Afficher la photo de profil du premier hôte */}
            </div>
          </div>
          <h2 className="titre2">{logementsAAfficher.location}</h2>
          <div className='tag-zone'>
            {logementsAAfficher.tags.map((mot, index) => (
              <Tag key={index} title={mot} />
            ))}
            <div className='note-container'>
              <Note />
            </div>
          </div>
        </div>

        <div className="collapse-wrapper">

            <div className="collapse-container" key={id + "-description"}>
                <Collapse id={logementsAAfficher.id} />
            </div>

            <div className="collapse-container" key={id + "-equipements"}>
                <Collapse id={logementsAAfficher.id} />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
