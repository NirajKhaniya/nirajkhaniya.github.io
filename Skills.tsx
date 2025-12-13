import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Skills: React.FC = () => {
  const skills = [
    { 
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg', 
      title: 'Excel', 
      desc: 'Data Analysis, Pivots, Advanced Formulas',
      borderColor: 'group-hover:border-green-500',
      shadowColor: 'group-hover:shadow-green-100'
    },
    { 
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg', 
      title: 'PowerPoint', 
      desc: 'Professional Presentations, Visual Design',
      borderColor: 'group-hover:border-orange-500',
      shadowColor: 'group-hover:shadow-orange-100'
    },
    { 
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg', 
      title: 'MS Word', 
      desc: 'Documentation, Reports, Formatting',
      borderColor: 'group-hover:border-blue-500',
      shadowColor: 'group-hover:shadow-blue-100'
    },
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              Skills & Abilities
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="h-full">
              <div 
                className={`bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-transparent hover:border-2 transition-all duration-300 group transform hover:-translate-y-2 flex flex-col items-center h-full ${skill.borderColor} ${skill.shadowColor}`}
              >
                <div className="w-24 h-24 mb-6 p-4 bg-gray-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  <img 
                    src={skill.image} 
                    alt={skill.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600 text-sm">{skill.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;