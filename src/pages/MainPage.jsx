import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import ProjectCard from '../components/ProjectCard';
import SkillBar from '../components/SkillBar';
import ContactForm from '../components/ContactForm';

const MainPage = () => {
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
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 60 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 50 },
        { name: 'C/C++', level: 50 },
      ],
    },
    {
        category: 'Technologies Front-end',
        skills: [
          { name: 'React.js', level: 70 },
          { name: 'Vue.js', level: 80 },
          { name: 'Tailwind CSS', level: 80 },
        ],
      },
      {
        category: 'Technologies Back-end',
        skills: [
          { name: 'Node.js', level: 85 },
          { name: 'Express.js', level: 85 },
        ],
      },
      {
        category: 'Bases de données',
        skills: [
          { name: 'MongoDB', level: 85 },
          { name: 'MySQL', level: 80 },
          { name: 'PostgreSQL', level: 75 },
        ],
      },
  ];

  // Ajoutez les données de contact
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
    <div className="flex flex-col min-h-screen">
      

      {/* Section Projets */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mes <span className="text-indigo-600 dark:text-indigo-400">Projets</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Mes <span className="text-indigo-600 dark:text-indigo-400">Compétences</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={category.category} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
                  <span className="text-indigo-600 dark:text-indigo-400 mr-2">{index + 1}.</span>
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Me <span className="text-indigo-600 dark:text-indigo-400">Contacter</span>
          </h2>
          
          {/* Cartes de contact avec QR codes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactData.map((contact, index) => (
              <div 
                key={index}
                onClick={() => handleCardClick(contact.value, contact.type)}
                className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className={`text-2xl ${
                    contact.type === 'phone' ? 'text-green-500' :
                    contact.type === 'email' ? 'text-yellow-500' :
                    contact.type === 'linkedin' ? 'text-blue-500' :
                    'text-gray-700 dark:text-gray-300'
                  }`}>
                    {contact.icon}
                  </div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {contact.label}
                  </h3>
                </div>
                
                <div className="bg-gray-100 dark:bg-gray-600 p-2 rounded-lg flex justify-center">
                  <QRCodeSVG 
                    value={contact.type === 'phone' ? `tel:${contact.value}` : 
                           contact.type === 'email' ? `mailto:${contact.value}` : 
                           contact.value}
                    size={100}
                    level="H"
                    includeMargin={true}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire de contact */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-8">
              Ou envoyez-moi un message directement
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage; 