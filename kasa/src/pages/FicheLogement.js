import React from 'react';
import Caroussel from '../components/Caroussel';
import BackgroundSVG from '../assets/accomodation.svg';
import Collapse from '../components/Collapse';
import '../scss/FicheLogement.scss';
import Tag from '../components/Tag';
import Note from '../components/Note';
import RoundImage from '../components/RoundImage'; // Importer le composant RoundImage
import { logementList } from '../data/logementList'; // Importer les données des logements

const FicheLogement = () => {
  const pageWidth = '100vw';
  const pageMargin = '5vw';
  const availableWidth = `calc(${pageWidth} - 2 * ${pageMargin})`;

  // Sélectionner un logement spécifique (par exemple, avec identifiant "1e180563")
  const logement = logementList.find(logement => logement.identifiant === "1e180563");

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={logement && logement["des photos"]} availableWidth={availableWidth} />
        <div className="title-wrapper">
          <div className="host-info-wrapper">
            <h1 className="titre1">Cozy loft on the Canal Saint-Martin</h1>
            <div className="text-container">
              <p>{logement && logement.hôte.nom}</p> {/* Afficher le nom de l'hôte */}
            </div>
            <div className="profile-pic-container">
              <RoundImage imageUrl={logement && logement.hôte.photo} altText={logement && logement.hôte.nom} /> {/* Afficher la photo de profil de l'hôte */}
            </div>
          </div>
          <h2 className="titre2">Paris, Île-de-France</h2>
          <div className='tag-zone'>
            <Tag title={"Cozy"} />
            <Tag title={"Canal"} />
            <Tag title={"Paris 10"} />
            <div className='note-container'>
              <Note />
            </div>
          </div>
        </div>

        <div className="collapse-wrapper">
          <div className="collapse-container">
            <Collapse id="cb2f9222" />
          </div>
          <div className="collapse-container">
            <Collapse id="d60ca600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
