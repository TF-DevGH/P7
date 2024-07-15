import React, { useState } from 'react';
import '../scss/MenuDepliant.scss';
import ddmenuclosed from '../assets/ddmenuclosed.svg'; // Importez le fichier SVG

const MenuDepliant = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
            {description && <p>{description}</p>}
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuDepliant;
