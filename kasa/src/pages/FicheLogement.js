// FicheLogement.js
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Caroussel from '../components/Caroussel';
import Collapse from '../components/Collapse';
import EquipementList from '../components/EquipementList';
import Tag from '../components/Tag';
import Note from '../components/Note';
import RoundImage from '../components/RoundImage';
import { logementList } from '../data/logementList';
import Banner from '../components/Banner';
import '../scss/FicheLogement.scss';

const FicheLogement = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const logement = logementList.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement) {
      navigate('/notfound');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // Optionnel, le composant ne rend rien si le logement n'est pas trouvé
  }

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={logement.pictures} />
        <div className="title-wrapper">
          <div className="Titre_Description_Tags">
            <div className="titles">
              <h1 className="titre1">{logement.title}</h1>
              <h2 className="titre2">{logement.location}</h2>
            </div>
            <div className='tag-zone'>
              {logement.tags.map((tag, index) => (
                <Tag key={index} title={tag} />
              ))}
            </div>
          </div>
          <div className="Profil_Note">
            <div className="host-info">
              <div className="text-and-pic">
                <div className="text-container">
                  <p>{logement.host.name}</p>
                </div>
                <div className="profile-pic-container">
                  <RoundImage imageUrl={logement.host.picture} altText={logement.host.name} />
                </div>
              </div>
            </div>
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
