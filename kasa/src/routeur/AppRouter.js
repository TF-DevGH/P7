// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} /> {/* Redirige l'URL racine vers /home */}
        <Route path="/home" element={<Home />} /> {/* Route pour la page d'accueil */}
        <Route path="/about" element={<About />} /> {/* Route pour la page "À propos" */}
        <Route path="*" element={<NotFound />} /> {/* Route pour la page 404 */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
