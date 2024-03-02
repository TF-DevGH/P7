// FicheLogement.js

import React from 'react';
import Caroussel from '../components/Caroussel';
import Collapse from '../components/Collapse';
import '../scss/FicheLogement.scss';
import Tag from '../components/Tag';
import Note from '../components/Note';
import RoundImage from '../components/RoundImage';
import { logementList } from '../data/logementList';
import { useParams } from "react-router-dom";

const FicheLogement = () => {
  const pageWidth = '100vw';
  const pageMargin = '5vw';
  const availableWidth = `calc(${pageWidth} - 2 * ${pageMargin})`;

  const { id } = useParams();

  const logement = logementList.find(logement => logement.id === id);

  const images = logement.pictures;
  const showNavigationButtons = images.length > 1;

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={images} availableWidth={availableWidth} showNavigationButtons={showNavigationButtons} />
        <div className="title-wrapper">
          <div className="host-info-wrapper">
            <h1 className="titre1">{logement.title}</h1>
            <div className="text-container">
              <p>{logement.host.name}</p>
            </div>
            <div className="profile-pic-container">
              <RoundImage imageUrl={logement.host.picture} altText={logement.host.name} />
            </div>
          </div>
          <h2 className="titre2">{logement.location}</h2>
          <div className='tag-zone'>
            {logement.tags.map((tag, index) => (
              <Tag key={index} title={tag} />
            ))}
            <div className='note-container'>
              <Note />
            </div>
          </div>
        </div>

        <div className="collapse-wrapper">
  <div className="collapse-container" key={`${id}-description`}>
    <Collapse identifiant={`${id}-description`} content={logement.description} />
  </div>

  <div className="collapse-container" key={`${id}-equipements`}>
    <Collapse identifiant={`${id}-equipements`} content={logement.equipments} />
  </div>
</div>

      </div>
    </div>
  );
};

export default FicheLogement;
