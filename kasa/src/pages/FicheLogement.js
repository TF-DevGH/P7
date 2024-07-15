import React from 'react';
import { useParams, Navigate } from 'react-router-dom'; // Importez Navigate pour la redirection
import Caroussel from '../components/Caroussel';
import MenuDepliant from '../components/MenuDepliant';
import EquipementList from '../components/EquipementList';
import '../scss/FicheLogement.scss';
import Tag from '../components/Tag';
import Note from '../components/Note';
import RoundImage from '../components/RoundImage';
import { logementList } from '../data/logementList';

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logementList.find(logement => logement.id === id);

  if (!logement) {
    // Si l'ID du logement n'est pas valide, rediriger vers NotFound
    return <Navigate to="/notfound" />;
  }

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={logement.pictures}/>
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
              <Note rating={logement.rating} />
            </div>
          </div>
        </div>

        <div className="collapse-wrapper">
          <div className="collapse-container" key={`${id}-description`}>
            <MenuDepliant title="Description" description={logement.description} />
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
