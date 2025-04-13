import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaBriefcase, FaGraduationCap, FaJs, FaPython, FaJava, FaReact, FaVuejs, FaNodeJs, FaDatabase, FaNetworkWired, FaServer, FaTools, FaCode } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiCisco, SiWireshark } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { QRCodeSVG } from 'qrcode.react';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import ContactForm from '../components/ContactForm';
import profileImage from '../assets/portfoliopdp.jpeg';

const MainPage = ({ darkMode }) => {
  const [activeSkillTab, setActiveSkillTab] = useState('development'); // 'development' ou 'network'

  // Données des projets
  const projects = [
    {
      id: 1,
      title: 'Application de Gestion de Tâches',
      description: 'Une application complète de gestion de tâches avec authentification, drag & drop et notifications en temps réel.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      imageUrl: '/api/placeholder/600/400',
      githubUrl: 'https://github.com/username/projet1',
      liveUrl: 'https://projet1.example.com',
    },
    {
        id: 2,
        title: 'Site E-commerce',
        description: 'Plateforme e-commerce avec système de paiement, gestion des stocks et interface administrateur.',
        technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Stripe'],
        imageUrl: '/api/placeholder/600/400',
        githubUrl: 'https://github.com/username/projet2',
        liveUrl: 'https://projet2.example.com',
      },
      {
        id: 3,
        title: 'Application Mobile de Fitness',
        description: 'Application mobile pour suivre les exercices, la nutrition et les objectifs fitness.',
        technologies: ['React Native', 'Firebase', 'Redux', 'Chart.js'],
        imageUrl: '/api/placeholder/600/400',
        githubUrl: 'https://github.com/username/projet3',
        liveUrl: null,
      },
      {
        id: 4,
        title: 'Dashboard Analytics',
        description: 'Dashboard interactif avec visualisation de données et rapports personnalisables.',
        technologies: ['Vue.js', 'D3.js', 'Express', 'MySQL'],
        imageUrl: '/api/placeholder/600/400',
        githubUrl: 'https://github.com/username/projet4',
        liveUrl: 'https://projet4.example.com',
      },
  ];

  // Données des compétences
  const skillCategories = [
    {
      category: 'Langages de programmation',
      icon: <FaCode className="w-6 h-6" />,
      color: 'bg-blue-400',
      skills: [
        { name: 'JavaScript', level: 70, icon: <FaJs /> },
        { name: 'TypeScript', level: 60, icon: <SiTypescript /> },
        { name: 'Java', level: 50, icon: <FaJava /> },
        { name: 'Python', level: 50, icon: <FaPython /> },
        { name: 'C/C++', level: 40, icon: <TbBrandCpp /> },
      ],
    },
    {
      category: 'Technologies Front-end',
      icon: <FaReact className="w-6 h-6" />,
      color: 'bg-green-400',
      skills: [
        { name: 'React.js', level: 70, icon: <FaReact /> },
        { name: 'Vue.js', level: 80, icon: <FaVuejs /> },
        { name: 'Tailwind CSS', level: 70, icon: <SiTailwindcss /> },
      ],
    },
    {
      category: 'Technologies Back-end',
      icon: <FaServer className="w-6 h-6" />,
      color: 'bg-purple-400', // Ajouté
      skills: [
        { name: 'Node.js', level: 70, icon: <FaNodeJs /> },
        { name: 'Express.js', level: 70, icon: <SiExpress /> },
      ],
    },
    {
      category: 'Bases de données',
      icon: <FaDatabase className="w-6 h-6" />,
      color: 'bg-orange-400', // Ajouté
      skills: [
        { name: 'MongoDB', level: 65, icon: <SiMongodb /> },
        { name: 'MySQL', level: 60, icon: <SiMysql /> },
        { name: 'PostgreSQL', level: 75, icon: <SiPostgresql /> },
      ],
    },
    {
      category: 'Réseaux & Infrastructure',
      icon: <FaNetworkWired className="w-6 h-6" />,
      color: 'bg-blue-400', // Ajouté
      skills: [
        { name: 'Administration Réseau', level: 65, icon: <FaServer /> },
        { name: 'Protocoles TCP/IP', level: 50, icon: <FaNetworkWired /> },
        { name: 'Sécurité Réseau', level: 50, icon: <FaTools /> },
      ],
    },
    {
      category: 'Outils & Technologies Réseau',
      icon: <FaTools className="w-6 h-6" />,
      color: 'bg-green-400', // Ajouté
      skills: [
        { name: 'Wireshark', level: 40, icon: <SiWireshark /> },
        { name: 'Pare-feu & Proxy', level: 30, icon: <FaTools /> },
        { name: 'Monitoring Réseau', level: 40, icon: <FaNetworkWired /> },
      ],
    }
  ];

  // Données de contact
  const contactData = [
    {
      type: 'phone',
      value: '+261 34 33 928 62',
      icon: <FaPhone />,
      label: 'Téléphone'
    },
    {
      type: 'email',
      value: 'rajaoariminoitokiana@gmail.com',
      icon: <FaEnvelope />,
      label: 'Email'
    },
    {
      type: 'linkedin',
      value: 'https://linkedin.com/in/itokiana-maminiaina-rajaoarimino-790930205',
      icon: <FaLinkedin />,
      label: 'LinkedIn'
    },
    {
      type: 'github',
      value: 'https://github.com/Itokiana03',
      icon: <FaGithub />,
      label: 'GitHub'
    }
  ];

  // Données pour la timeline
  const timelineItems = [
    {
      id: 1,
      date: "2024 - Présent",
      title: "Master en Informatique",
      location: "École Nationale d'Informatique",
      description: "Informatique générale",
      icon: <FaGraduationCap />,
      type: 'education'
    },
    {
      id: 2,
      date: "2019 - 2023",
      title: "Licence en Informatique",
      location: "École Nationale d'Informatique",
      description: "Informatique générale",
      icon: <FaGraduationCap />,
      type: 'education'
    },
    {
      id: 3,
      date: "2022",
      title: "Développeur Backend (stagiaire)",
      location: "Groupe IGP",
      description: "Stage de Développement d'applications web avec Angular JS et Nest.js",
      icon: <FaBriefcase />,
      type: 'internship'
    },
    {
      id: 4,
      date: "2021",
      title: "Développeur mobile (stagiaire)",
      location: "Bucky Burger",
      description: "Développement d'applications mobile pour le suivi de décaissement des points de ventes",
      icon: <FaBriefcase />,
      type: 'internship'
    },
    {
      id: 5,
      date: "2019",
      title: "Bacc",
      location: "Lycees Jules Ferry Faravohitra",
      description: "serie : C",
      icon: <FaGraduationCap />,
      type: 'education'
    },
  ];

  // Trier les éléments par date
  const sortedTimelineItems = timelineItems.sort((a, b) => {
    return a.date < b.date ? 1 : -1; // Tri décroissant
  });

  // Fonction pour filtrer les catégories de compétences
  const filteredSkillCategories = skillCategories.filter(category => {
    if (activeSkillTab === 'development') {
      return ['Langages de programmation', 'Technologies Front-end', 'Technologies Back-end', 'Bases de données'].includes(category.category);
    } else {
      return ['Réseaux & Infrastructure', 'Outils & Technologies Réseau'].includes(category.category);
    }
  });

  const handleCardClick = (value, type) => {
    if (type === 'phone') {
      window.location.href = `tel:${value}`;
    } else if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else {
      window.open(value, '_blank');
    }
  };

  return (
    <div className="flex flex-col">
      {/* Section Hero/Accueil avec effet prisme */}
      <section id="home" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Section texte avec animation */}
            <div className="flex-1 text-center md:text-left relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
                <span className={`block tracking-wide ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Bonjour, je suis
                </span>
                <span className="block bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 bg-clip-text text-transparent animate-gradient font-extrabold tracking-tight">
                  RAJAOARIMINO Itokiana Maminiaina
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl mb-8 font-light leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Étudiant en Master 2 d'Informatique à l'École Nationale d'Informatique, 
                passionné par le développement web et les technologies modernes.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#projects"
                  className="group px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center shadow-lg shadow-emerald-900/20"
                >
                  Voir mes projets 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </a>
                
                <a
                  href="#contact"
                  className={`px-6 py-3 backdrop-blur-sm font-medium border rounded-lg transition-all duration-300 shadow-lg shadow-black/5 ${
                    darkMode 
                      ? 'bg-white/10 text-white border-white/20 hover:bg-white/20' 
                      : 'bg-gray-900/10 text-gray-900 border-gray-900/20 hover:bg-gray-900/20'
                  }`}
                >
                  Me contacter
                </a>
              </div>
            </div>

            {/* Photo de profil avec effet néon */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-black/20 hover:shadow-emerald-600/20 transition-shadow duration-300">
                <img 
                  src={profileImage}
                  alt="Itokiana Maminiaina" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/10 via-gray-900/10 to-transparent"></div>
              </div>
              {/* Cercle décoratif avec animation */}
              <div className="absolute -z-10 top-4 left-4 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Projets avec effet carte en verre */}
      <section id="projects" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Projets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group backdrop-blur-md rounded-xl p-6 border transition-all duration-300 ${
                  darkMode 
                    ? 'bg-gray-900/70 border-white/10 hover:border-emerald-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-emerald-500'
                }`}
              >
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full border font-medium ${
                        darkMode 
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' 
                          : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center font-medium ${
                      darkMode 
                        ? 'text-gray-300 hover:text-emerald-300' 
                        : 'text-gray-600 hover:text-emerald-700'
                    }`}
                  >
                    <FaGithub className="mr-2" /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center font-medium ${
                        darkMode 
                          ? 'text-gray-300 hover:text-emerald-300' 
                          : 'text-gray-600 hover:text-emerald-700'
                      }`}
                    >
                      <ArrowRight className="mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences avec effet néon */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Compétences</span>
          </h2>

          {/* Onglets de catégories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveSkillTab('development')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSkillTab === 'development'
                  ? darkMode
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-emerald-600 hover:bg-gray-200'
              }`}
            >
              Développement
            </button>
            <button
              onClick={() => setActiveSkillTab('network')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeSkillTab === 'network'
                  ? darkMode
                    ? 'bg-emerald-600 text-white'
                    : 'bg-emerald-600 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-emerald-400 hover:bg-gray-700'
                    : 'bg-gray-100 text-emerald-600 hover:bg-gray-200'
              }`}
            >
              Réseaux
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredSkillCategories.map((category, index) => (
              <div 
                key={category.category}
                className={`backdrop-blur-md rounded-xl p-6 border transition-all duration-500 ${
                  darkMode 
                    ? 'bg-gray-900/70 border-white/10 hover:border-emerald-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-emerald-500'
                }`}
              >
                <h3 className={`text-xl font-bold mb-6 flex items-center tracking-wide ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  <span className="text-emerald-500 mr-2">{index + 1}.</span>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="relative group"
                      style={{
                        animation: 'fadeInUp 0.5s ease-out forwards',
                        animationDelay: `${skillIndex * 100}ms`,
                        opacity: 0
                      }}
                    >
                      <div className="flex justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className={`text-xl ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                            {skill.icon}
                          </span>
                          <span className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            {skill.name}
                          </span>
                        </div>
                        <span className={`font-medium ${darkMode ? 'text-emerald-300' : 'text-emerald-600'}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-800/20 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${category.color} rounded-full transition-all duration-1000 group-hover:from-emerald-500 group-hover:to-emerald-300`}
                          style={{ 
                            width: `${skill.level}%`,
                            animation: 'slideIn 1s ease-out forwards',
                            transform: 'translateX(-100%)'
                          }}
                        >
                          <div className="w-full h-full opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgPHBhdGggZD0iTTAgMGgyMHYyMEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xMCAxMEwyMCAwdjIweiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+Cjwvc3ZnPg==')]"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ajout des animations CSS */}
        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideIn {
            from {
              transform: translateX(-100%);
            }
            to {
              transform: translateX(0);
            }
          }
        `}</style>
      </section>

      {/* Nouvelle section Timeline/Expérience */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mon <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Parcours</span>
          </h2>

          <div className="relative">
            {/* Ligne verticale avec animation de gradient */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600 rounded-full animate-pulse"></div>
            
            {/* Points lumineux animés le long de la ligne (visible uniquement en desktop) */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-500/50 animate-bounce"></div>
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 w-3 h-3 rounded-full bg-emerald-600 shadow-lg shadow-emerald-500/50 animate-bounce" style={{ animationDelay: '1s' }}></div>

            {/* Items de la timeline avec des effets améliorés */}
            {sortedTimelineItems.map((item, index) => (
              <div 
                key={item.id} 
                className="mb-12 md:mb-16"
                style={{
                  animation: 'fadeIn 0.8s ease-out forwards',
                  animationDelay: `${index * 150}ms`,
                  opacity: 0
                }}
              >
                <div className={`flex flex-col ${item.type === 'education' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  {/* Contenu */}
                  <div className={`w-full md:w-1/2 ${item.type === 'education' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mb-6 md:mb-0`}>
                    <div className={`p-6 rounded-xl backdrop-blur-md border-2 transition-all duration-500 
                      transform hover:scale-105 hover:shadow-xl
                      ${darkMode 
                        ? `bg-gray-900/50 border-emerald-600/30 hover:border-emerald-500 shadow-emerald-600/10
                           ${index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'}`
                        : `bg-white/80 border-emerald-300/50 hover:border-emerald-500 shadow-emerald-300/20
                           ${index % 2 === 0 ? 'hover:-translate-y-2' : 'hover:translate-y-2'}`
                      }`}
                    >
                      <div className={`text-sm font-semibold mb-2 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        {item.date}
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <div className={`text-sm mb-3 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {item.location}
                      </div>
                      <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Cercle central avec icône */}
                  <div className="z-10 order-first md:order-none mb-4 md:mb-0">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center 
                      ${darkMode ? 'bg-gray-900' : 'bg-white'} 
                      border-4 ${item.type === 'education' ? 'border-emerald-500' : 'border-emerald-600'}
                      shadow-lg ${darkMode ? 'shadow-emerald-500/30' : 'shadow-emerald-500/20'}
                      transform transition-all duration-500 hover:scale-110 hover:rotate-12`}
                    >
                      <span className={`text-2xl ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>
                        {item.icon}
                      </span>
                    </div>
                    {/* Ligne horizontale pour mobile uniquement */}
                    <div className="md:hidden w-0.5 h-6 bg-emerald-500 mx-auto mt-1"></div>
                  </div>
                  
                  {/* Espace pour l'autre côté (pour maintenir l'alignement) */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Style pour les animations */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* Section Soft Skills */}
      <section id="softskills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Mes <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Soft Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Communication */}
            <div className={`p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/50' 
                : 'bg-white/50 border border-gray-200/50 hover:border-emerald-500'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Communication</h3>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Communication claire
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Écoute active
                </li>
              </ul>
            </div>

            {/* Travail d'équipe */}
            <div className={`p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/50' 
                : 'bg-white/50 border border-gray-200/50 hover:border-emerald-500'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Travail d'équipe</h3>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Collaboration 
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Partage des connaissances
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Adaptabilité
                </li>
              </ul>
            </div>

            {/* Résolution de problèmes */}
            <div className={`p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/50' 
                : 'bg-white/50 border border-gray-200/50 hover:border-emerald-500'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Résolution de problèmes</h3>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Pensée analytique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Créativité
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Prise de décision
                </li>
              </ul>
            </div>

            {/* Organisation */}
            <div className={`p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/50' 
                : 'bg-white/50 border border-gray-200/50 hover:border-emerald-500'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Organisation</h3>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Gestion du temps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Planification
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Respect des délais
                </li>
              </ul>
            </div>

            {/* Apprentissage */}
            <div className={`p-6 rounded-xl backdrop-blur-md transition-all duration-300 hover:transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900/50 border border-gray-800/50 hover:border-emerald-500/50' 
                : 'bg-white/50 border border-gray-200/50 hover:border-emerald-500'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-emerald-500/10' : 'bg-emerald-50'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Apprentissage continu</h3>
              </div>
              <ul className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Curiosité intellectuelle
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Veille technologique
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-500">•</span>
                  Auto-formation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Contact avec effet carte en verre */}
      <section id="contact" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Me <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">Contacter</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactData.map((contact, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(contact.value, contact.type)}
                className={`group backdrop-blur-md rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-900/70 border-white/10 hover:border-emerald-500/50' 
                    : 'bg-white/70 border-gray-200 hover:border-emerald-500'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-3xl ${
                    contact.type === 'phone' ? 'text-emerald-500' :
                    contact.type === 'email' ? 'text-emerald-600' :
                    contact.type === 'linkedin' ? 'text-emerald-700' :
                    'text-emerald-800'
                  }`}>
                    {contact.icon}
                  </div>
                  <h3 className={`text-lg font-semibold tracking-wide ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {contact.label}
                  </h3>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-4 rounded-xl w-full text-center transition-all duration-300 ${
                    darkMode ? 'bg-black/30 hover:bg-black/40' : 'bg-gray-100 hover:bg-gray-200'
                  }`}>
                    <p className={`text-sm font-medium break-all ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {contact.value}
                    </p>
                  </div>
                  
                  <div className={`relative group p-4 rounded-xl transition-transform duration-300 ${
                    darkMode ? 'bg-black/30' : 'bg-gray-100'
                  }`}>
                    <QRCodeSVG 
                      value={contact.type === 'phone' ? `tel:${contact.value}` : 
                             contact.type === 'email' ? `mailto:${contact.value}` : 
                             contact.value}
                      size={120}
                      level="H"
                      includeMargin={true}
                      className={`transition-opacity duration-300 ${darkMode ? 'opacity-90' : 'opacity-100'}`}
                    />
                    <div className={`absolute inset-0 flex items-center justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      darkMode ? 'bg-black/60' : 'bg-white/60'
                    }`}>
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Scanner le QR code
                      </span>
                    </div>
                  </div>

                  <button 
                    className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                      darkMode 
                        ? 'bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400' 
                        : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700'
                    }`}
                  >
                    {contact.type === 'phone' ? 'Appeler' :
                     contact.type === 'email' ? 'Envoyer un email' :
                     contact.type === 'linkedin' ? 'Voir le profil' :
                     'Voir GitHub'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 ${darkMode ? 'bg-gray-900/70' : 'bg-gray-100/70'} backdrop-blur-md`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* À propos */}
            <div className="col-span-2">
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                À propos de moi
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionné par le développement web et les réseaux, je combine créativité et expertise technique pour créer des solutions innovantes. Toujours en quête d'apprentissage et d'amélioration continue.
              </p>
            </div>

            {/* Navigation rapide */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Navigation
              </h3>
              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>
                  <a href="#home" className="hover:text-emerald-500 transition-colors">Accueil</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-emerald-500 transition-colors">Projets</a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-emerald-500 transition-colors">Compétences</a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-emerald-500 transition-colors">Parcours</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Me suivre
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/itokiana-maminiaina-rajaoarimino-790930205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-2xl hover:text-emerald-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/Itokiana03" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-2xl hover:text-emerald-500 transition-colors ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className={`pt-8 mt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} RAJAOARIMINO Itokiana. Tous droits réservés.
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mt-2 md:mt-0`}>
                Fait avec <span className="text-emerald-500">♥</span> à Madagascar
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPage; 