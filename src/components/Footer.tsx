import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-to-b from-gray-900 to-purple-950 text-white py-16 relative overflow-hidden">
      {/* Lavender glow effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors border border-purple-700">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors border border-purple-700">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors border border-purple-700">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center hover:bg-purple-600 transition-colors border border-purple-700">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Business Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Data Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Have a Questions?</h3>
            <div className="space-y-4 text-gray-400">
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
              <p className="text-purple-400">+2 392 3929 210</p>
              <p className="text-purple-400">info@yourdomain.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-900 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} All rights reserved | This
            template is made with <span className="text-purple-400">♥</span> by
            Magic Patterns
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button onClick={scrollToTop} className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:from-purple-700 hover:to-purple-600 transition-all focus:outline-none hover:scale-110" aria-label="Back to top">
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>;
}