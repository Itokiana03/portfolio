// pages/Skills.jsx

import React from 'react';
import SkillBar from '../components/SkillBar';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Langages de programmation',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 60 },
        { name: 'Python', level: 80 },
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

  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Mes <span className="text-indigo-600 dark:text-indigo-400">Compétences</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div 
            key={category.category} 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">{index + 1}.</span>
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
          <span className="text-indigo-600 dark:text-indigo-400 mr-2">+</span>
          Autres compétences
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            'Git', 'Docker', 'RESTful API', 
            'Agile/Scrum', 'Linux',
            'UX/UI Design', 'Responsive Design'
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900 cursor-pointer"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;