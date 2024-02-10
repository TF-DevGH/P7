// App.js
import React from 'react';
import AppRouter from './routeur/AppRouter';
import Header from './components/Header'; // Importer le composant Header
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      {/* Remplacez le header par le composant Header */}
      <Header />
      <main>
        <AppRouter />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
