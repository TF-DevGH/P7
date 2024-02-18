// App.js
import React from 'react';
import AppRouter from './routeur/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Blank from './components/Blank'; // Importer le composant Blank

const App = () => {
  return (
    <div className="app">
      <Header />
      <Blank /> {/* Placer Blank avant le contenu principal */}
      <main>
        <AppRouter />
      </main>
      <Blank /> {/* Placer Blank après le contenu principal */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
