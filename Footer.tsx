import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            
            {/* About Column */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-4">Niraj's Portfolio</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Thank you for visiting my personal portfolio website. Connect with me over socials.
                <br />
                Keep Rising . Connect with me over live chat!
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#travels" className="hover:text-primary transition-colors">Travels</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact info</h3>
              <div className="space-y-4 text-sm text-gray-400">
                <p className="text-lg text-white font-semibold">+977 9843-298530</p>
                <p>[email protected]</p>
                <p>Nuwakot, Bagmati Nepal</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p className="flex items-center justify-center">
              Designed with <Heart size={16} className="mx-1 text-red-500 fill-current" /> by Niraj Khaniya
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
};

export default Footer;