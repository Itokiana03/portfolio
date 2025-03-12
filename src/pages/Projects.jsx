// pages/Projects.jsx

import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
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

  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Mes <span className="text-indigo-600 dark:text-indigo-400">Projets</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;