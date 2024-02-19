// FicheLogement.js
import React from 'react';
import Caroussel from '../components/Caroussel';
import BackgroundSVG from '../assets/accomodation.svg';
import Collapse from '../components/Collapse';
import '../scss/FicheLogement.scss';
import Tag from '../components/Tag';
import Note from '../components/Note'; // Importez le composant Note

const FicheLogement = () => {
  // Calcul de la largeur disponible pour le Caroussel
  const pageWidth = '100vw'; // Largeur totale de la page
  const pageMargin = '5vw'; // Marge de 5% à droite et à gauche
  const availableWidth = `calc(${pageWidth} - 2 * ${pageMargin})`; // Largeur disponible pour le Caroussel

  return (
    <div className="fiche-logement">
      <div className="content-wrapper">
        <Caroussel images={[BackgroundSVG]} availableWidth={availableWidth} />
        <div className="title-wrapper">
          <h1 class="titre1">Cozy loft on the Canal Saint-Martin</h1>
          <h2 class="titre2">Paris, Île-de-France</h2>
          <div className='tag-zone'>
            <Tag title={"Cozy"} />
            <Tag title={"Canal"} />
            <Tag title={"Paris 10"} />
            <div className="note-container">
              <Note />
            </div>
          </div>
        </div>
        <div className="collapse-wrapper">
          <Collapse id="cb2f9222" />
          <Collapse id="d60ca600" />
        </div>
      </div>
    </div>
  );
};

export default FicheLogement;
