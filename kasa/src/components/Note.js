import React, { useState, useEffect } from 'react';
import '../scss/Note.scss';
import etoilePleine from '../assets/etoilepleine.svg';
import etoileVide from '../assets/etoilevide.svg';
import { logementList } from '../data/logementList'; // Importez logementList.js

const Note = () => {
  const [etoiles, setEtoiles] = useState([false, false, false, false, false]);

  useEffect(() => {
    // Recherchez l'objet logement avec l'identifiant spécifié
    const logement = logementList.find(logement => logement.identifiant === "c67ab8a7");
    if (logement) {
      // Extrait la valeur de la propriété "note"
      const note = parseInt(logement.note); // Convertit la note en nombre
      if (!isNaN(note) && note >= 1 && note <= 5) {
        // Met à jour l'état des étoiles en fonction de la note
        setEtoiles(prevEtoiles => {
          const newEtoiles = new Array(5).fill(false); // Initialiser toutes les étoiles à vide
          for (let i = 0; i < note; i++) {
            newEtoiles[i] = true; // Marquer les étoiles jusqu'à la note comme pleines
          }
          return newEtoiles;
        });
      }
    }
  }, []); // Exécuté une seule fois après le rendu initial

  return (
    <div className="star-container">
      {etoiles.map((pleine, index) => (
        <img
          key={index}
          src={pleine ? etoilePleine : etoileVide}
          alt={pleine ? 'etoile pleine' : 'etoile vide'}
          className="star"
        />
      ))}
    </div>
  );
};

export default Note;
