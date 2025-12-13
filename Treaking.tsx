import React from 'react';
import RevealOnScroll from './RevealOnScroll';

const Treaking: React.FC = () => {
  // Assuming a similar grid layout for Trekking highlights as specifically requested "Same layout as original"
  const treks = [
    { title: 'Gosaikunda', loc: 'Rasuwa', img: 'https://picsum.photos/600/400?random=20' },
    { title: 'Mardi Himal', loc: 'Kaski', img: 'https://picsum.photos/600/400?random=21' },
    { title: 'Kalinchowk', loc: 'Dolakha', img: 'https://picsum.photos/600/400?random=22' }
  ];

  return (
    <section id="treaking" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 relative inline-block after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mx-auto after:mt-2">
              Trekking
            </h2>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treks.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                 <div className="h-64 overflow-hidden relative group">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                    <h3 className="text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                    <p className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.loc}</p>
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

export default Treaking;