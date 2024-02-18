import React, { useState } from 'react';
import '../scss/DropdownMenu.scss';
import ddmenuclosed from '../assets/ddmenuclosed.svg'; // Importez le fichier SVG

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container custom-dropdown-container"> {/* Ajoutez une classe personnalisée ici */}
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span className="menu-title">Titre du menu</span>
          <img
            src={ddmenuclosed}
            alt="Menu"
            className={`menu-icon ${isOpen ? 'open' : ''}`}
          />
        </div>
        {isOpen && (
          <div className="dropdown-content">
            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownMenu;
