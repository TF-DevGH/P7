import React from 'react';
import AppRouter from './routeur/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Blank from './components/Blank'; // Importer le composant Blank

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Blank position="left" /> {/* Blank à gauche */}
        <main>
          <AppRouter />
        </main>
        <Blank position="right" /> {/* Blank à droite */}
      </div>
      <footer>
        <Footer />
      </footer>
      <Blank position="bottom" /> {/* Blank en bas */}
    </div>
  );
};

export default App;
