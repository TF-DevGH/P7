import React, { useState } from 'react';
import '../scss/Collapse.scss';
import ddmenuclosed from '../assets/ddmenuclosed.svg'; // Importez le fichier SVG
import { logementList } from '../data/logementList'; // Importez logementList.js

const Collapse = ({ id }) => {
  // Recherchez l'élément correspondant dans la liste des logements en utilisant l'identifiant
  const logement = logementList.find(item => item.identifiant === id);

  // Définissez l'état isOpen avec useState en dehors de la condition
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    // Inversez l'état isOpen lorsque le header est cliqué
    setIsOpen(!isOpen);
  };

  // Vérifiez si un logement correspondant a été trouvé
  if (!logement) {
    return <div>Aucun logement trouvé avec cet identifiant</div>;
  }

  const { title, description } = logement;

  return (
    <div className="dropdown-container custom-dropdown-container">
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span className="menu-title">{title}</span>
          <img
            src={ddmenuclosed}
            alt="Menu"
            className={`menu-icon ${isOpen ? 'open' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;