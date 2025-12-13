import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Travels from './components/Travels';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="antialiased text-gray-800 bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Travels />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;