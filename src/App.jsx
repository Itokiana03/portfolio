// Fichier principal App.jsx

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';

const App = () => {
  // Récupérer la préférence du thème depuis le localStorage ou utiliser la préférence système
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mettre à jour le localStorage et les classes du document quand le thème change
  useEffect(() => {
    // Sauvegarder la préférence dans le localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');

    // Mettre à jour les classes du document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#111827'; // bg-gray-900
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#ffffff'; // bg-white
    }

    // Ajouter le smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';
  }, [darkMode]);

  // Fonction pour basculer le thème
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`relative min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Effet de grille futuriste */}
      <div 
        className={`absolute inset-0 ${
          darkMode ? 'opacity-5' : 'opacity-10'
        }`}
        style={{
          backgroundImage: `linear-gradient(to right, ${darkMode ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.1)'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${darkMode ? 'rgba(16, 185, 129, 0.05)' : 'rgba(16, 185, 129, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Cercles lumineux d'ambiance */}
      <div className={`fixed top-20 left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${
        darkMode ? 'bg-emerald-600/10' : 'bg-emerald-400/20'
      }`}></div>
      <div className={`fixed top-40 right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000 ${
        darkMode ? 'bg-emerald-800/10' : 'bg-emerald-600/20'
      }`}></div>
      
      {/* Contenu principal */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <MainPage darkMode={darkMode} />
      </div>

      {/* Effet de grain subtil */}
      <div 
        className={`fixed inset-0 pointer-events-none ${
          darkMode ? 'opacity-20 mix-blend-overlay' : 'opacity-10 mix-blend-multiply'
        }`}
        style={{
          background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 2000 2000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
      ></div>
    </div>
  );
};

export default App;