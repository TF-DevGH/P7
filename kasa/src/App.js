// App.js
import React from 'react';
import AppRouter from './AppRouter';
import './App.css'; // Import des styles CSS globaux

const App = () => {
  return (
    <div className="app">
      <header>
        {/* Ajoutez ici le contenu de votre en-tête */}
        <h1>Mon Application React</h1>
      </header>
      <main>
        {/* Intégrez le composant AppRouter pour gérer le routage */}
        <AppRouter />
      </main>
      <footer>
        {/* Ajoutez ici le contenu de votre pied de page */}
        <p>© 2024 Mon Application React. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default App;
