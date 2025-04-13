import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Gestion des clics à l'extérieur du menu pour le fermer
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        closeMenu();
      }
    }

    // Gestion du défilement
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Fermer le menu quand l'écran devient plus grand (passage au desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu et faire défiler en douceur jusqu'à la section
  const handleNavClick = (e, href) => {
    e.preventDefault();
    closeMenu();
    
    const element = document.querySelector(href);
    if (element) {
      // Petit délai pour permettre au menu de se fermer avant de défiler
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'Projets', href: '#projects' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg border-b ${
      darkMode 
        ? 'bg-gray-900/70 border-gray-800/50' 
        : 'bg-white/70 border-gray-200/50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            className="flex items-center group" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className={`text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${
              darkMode
                ? 'from-emerald-400 via-emerald-500 to-emerald-600'
                : 'from-emerald-600 via-emerald-700 to-emerald-800'
            } group-hover:from-emerald-500 group-hover:to-emerald-700 transition-all duration-500`}>
              RAJAOARIMINO Itokiana Maminiaina
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    darkMode
                      ? 'text-gray-300 hover:bg-gray-800/50 hover:text-emerald-400'
                      : 'text-gray-700 hover:bg-gray-100/50 hover:text-emerald-600'
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'hover:bg-gray-800/50 text-yellow-400'
                  : 'hover:bg-gray-100/50 text-gray-700'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? 
                <Sun size={20} className="animate-[spin_3s_linear_infinite]" /> : 
                <Moon size={20} className="animate-pulse" />
              }
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'hover:bg-gray-800/50 text-yellow-400'
                  : 'hover:bg-gray-100/50 text-gray-700'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? 
                <Sun size={20} className="animate-[spin_3s_linear_infinite]" /> : 
                <Moon size={20} className="animate-pulse" />
              }
            </button>
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-all duration-300 ${
                darkMode
                  ? 'hover:bg-gray-800/50 text-gray-300'
                  : 'hover:bg-gray-100/50 text-gray-700'
              }`}
              aria-label="Toggle Menu"
              aria-expanded={isMenuOpen}
            >
              <Menu size={24} className={`${darkMode ? "text-emerald-400" : "text-emerald-600"} transition-transform duration-300`} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Amélioré - Sans transparence, sans X et sans footer */}
      <div 
        className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-100 invisible'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Overlay opaque */}
        <div 
          className={`absolute inset-0 ${
            darkMode ? 'bg-black' : 'bg-gray-900'
          } transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-90' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Contenu du menu - Sans transparence */}
        <div 
          ref={menuRef}
          className={`absolute right-0 top-0 h-full w-64 ${
            darkMode 
              ? 'bg-gray-900 border-l border-gray-800' 
              : 'bg-white border-l border-gray-200'
          } transform transition-transform duration-500 ease-in-out shadow-xl ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* En-tête du menu - Sans bouton X */}
          <div className={`p-6 border-b ${
            darkMode ? 'border-gray-800' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-center">
              <span className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Menu
              </span>
            </div>
          </div>

          {/* Liste des liens avec animation séquentielle */}
          <div className="py-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-6 py-3 text-base font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:bg-gray-800 hover:text-emerald-400'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-emerald-600'
                } transform hover:translate-x-2 ${
                  isMenuOpen 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-4'
                }`}
                onClick={(e) => handleNavClick(e, item.href)}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Pas de footer */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;