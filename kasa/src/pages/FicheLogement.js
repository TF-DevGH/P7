import React from 'react';
import Caroussel from '../components/Caroussel';
import BackgroundSVG from '../assets/accomodation.svg';
import Collapse from '../components/Collapse';
import EquipementList from '../components/EquipementList';
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

  if (!logement) {
    return <div>Logement non trouvé.</div>;
  }

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
          <div className="collapse-container" key={`${id}-equipements`}>
            <Collapse logement={logement} />
          </div>
          <div className="collapse-container" key={`${id}-equipements`}>
            <EquipementList equipments={logement.equipments} id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
