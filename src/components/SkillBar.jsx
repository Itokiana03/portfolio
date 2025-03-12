import React from 'react';

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${level}%`,
            animation: 'growWidth 1s ease-out'
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes growWidth {
          from { width: 0% }
          to { width: ${level}% }
        }
      `}</style>
    </div>
  );
};

export default SkillBar;