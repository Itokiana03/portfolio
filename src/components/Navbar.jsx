// components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Désactiver le défilement quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Désactiver le défilement quand le menu est ouvert
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
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
          <a href="#home" className="flex items-center group" onClick={closeMenu}>
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
                  onClick={closeMenu}
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
            >
              {isMenuOpen ? 
                <X size={24} className="text-red-400 rotate-90 transition-transform duration-300" /> : 
                <Menu size={24} className={`${darkMode ? "text-emerald-400" : "text-emerald-600"} transition-transform duration-300`} />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Amélioré */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Overlay avec effet de flou */}
        <div 
          className={`absolute inset-0 ${
            darkMode ? 'bg-black/80' : 'bg-gray-900/80'
          } backdrop-blur-sm transition-opacity duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        />

        {/* Contenu du menu */}
        <div className={`absolute right-0 top-0 h-full w-64 ${
          darkMode 
            ? 'bg-gray-900 border-l border-gray-800/50' 
            : 'bg-white border-l border-gray-200/50'
        } transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* En-tête du menu */}
          <div className={`p-6 border-b ${
            darkMode ? 'border-gray-800/50' : 'border-gray-200/50'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Menu
              </span>
              <button
                onClick={closeMenu}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  darkMode
                    ? 'hover:bg-gray-800/50 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Liste des liens */}
          <div className="py-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-6 py-3 text-base font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-400 hover:bg-gray-800/50 hover:text-emerald-400'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-emerald-600'
                } transform hover:translate-x-2`}
                onClick={closeMenu}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Footer du menu */}
          <div className={`absolute bottom-0 left-0 right-0 p-6 border-t ${
            darkMode ? 'border-gray-800/50' : 'border-gray-200/50'
          }`}>
            <div className={`text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 RAJAOARIMINO Itokiana Maminiana
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;