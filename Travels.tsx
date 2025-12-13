import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import ParticleNetwork from './ParticleNetwork';

const Travels: React.FC = () => {
  const travels = [
    {
      title: 'Janakpurdham',
      subtitle: 'Janakpur | Ramjanaki Mandir',
      date: '2023 | June',
      image: 'https://picsum.photos/600/400?random=10'
    },
    {
      title: 'RARA',
      subtitle: 'Mugu | Thakurnath',
      date: '2023 | August',
      image: 'https://picsum.photos/600/400?random=11'
    },
    {
      title: 'Tilicho | Manang',
      subtitle: 'Manang | Tilicho Base Camp',
      date: '2023 | June',
      image: 'https://picsum.photos/600/400?random=12'
    }
  ];

  return (
    <section id="travels" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <ParticleNetwork />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              My Travels
            </h2>
            <p className="mt-6 text-gray-600 italic max-w-2xl mx-auto text-lg">
              "Embark on a journey where every step writes a new chapter in the story of your life."
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {travels.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="h-56 md:h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center shadow-sm">
                    <Calendar size={12} className="mr-1" /> {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin size={16} className="mr-1 text-primary" />
                    {item.subtitle}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Travels;