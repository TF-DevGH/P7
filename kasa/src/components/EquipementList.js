import React, { useState } from 'react';
import '../scss/EquipementList.scss'; // Importer le fichier de style pour la liste d'équipements
import ddmenuclosed from '../assets/ddmenuclosed.svg'; // Importez le fichier SVG

const EquipementList = ({ equipments, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`equipement-list-container ${isOpen ? 'open' : ''}`} key={`${id}-equipements`}>
      <div className="equipement-header" onClick={toggleDropdown}>
        <span className="menu-title">Équipements</span>
        <img
          src={ddmenuclosed}
          alt="Arrow"
          className={`menu-icon ${isOpen ? 'open' : ''}`}
        />
      </div>
      {isOpen && (
        <div className="equipement-content">
          {equipments.map((equipment, index) => (
            <div key={index} className="equipement-item">
              <span className="equipement-name">{equipment}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default EquipementList;
