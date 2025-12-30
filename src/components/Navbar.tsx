import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [{
  name: 'Home',
  href: '#home'
}, {
  name: 'About',
  href: '#about'
}, {
  name: 'Resume',
  href: '#resume'
}, {
  name: 'Services',
  href: '#services'
}, {
  name: 'Skills',
  href: '#skills'
}, {
  name: 'Projects',
  href: '#projects'
}, {
  name: 'Blog',
  href: '#blog'
}, {
  name: 'Contact',
  href: '#contact'
}];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-gray-900 tracking-tighter">
          CLARK<span className="text-purple-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-purple-600 ${isScrolled ? 'text-gray-700' : 'text-gray-900'}`}>
              {link.name}
            </a>)}
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-gray-900 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="text-gray-700 hover:text-purple-600 font-medium py-2 block" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.name}
                </a>)}
            </div>
          </motion.div>}
      </AnimatePresence>
    </nav>;
}