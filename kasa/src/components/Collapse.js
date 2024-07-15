import React, { useState } from 'react';
import '../scss/Collapse.scss';
import ddmenuclosed from '../assets/ddmenuclosed.svg'; // Importez le fichier SVG

const Collapse = ({ logement }) => {
  // Définissez l'état isOpen avec useState en dehors de la condition
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    // Inversez l'état isOpen lorsque le header est cliqué
    setIsOpen(!isOpen);
  };

  // Vérifiez si logement est défini avant de tenter d'accéder à sa propriété description
  const { description } = logement || {};

  return (
    <div className="dropdown-container custom-dropdown-container">
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span className="menu-title">Description</span>
          <img
            src={ddmenuclosed}
            alt="Menu"
            className={`menu-icon ${isOpen ? 'open' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            {/* Utilisez la description uniquement si elle est définie */}
            {description && <p>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collapse;
