import React from 'react';
import { Briefcase } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "S.A.R. Associates",
      role: "Discount Auditor (Coca‑Cola Terai)",
      period: "Jan 2022 - Present"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              Experience
            </h2>
          </div>
        </RevealOnScroll>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 100}>
                <div className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-md transform -translate-x-1/2 md:-translate-x-1/2 z-10"></div>

                  {/* Content Card */}
                  <div className="w-[calc(100%-4rem)] md:w-5/12 ml-16 md:ml-0 p-5 md:p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-primary">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-primary bg-orange-50 rounded-full">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800">{exp.company}</h3>
                    <div className="flex items-center mt-1 text-gray-600">
                       <Briefcase size={16} className="mr-2" />
                       <span className="text-sm font-medium">{exp.role}</span>
                    </div>
                  </div>

                  {/* Spacer for other side */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="text-center mt-16">
             <RevealOnScroll delay={200}>
               <button className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-orange-600 transition-colors">
                 View All
               </button>
             </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;