import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Resume } from '../components/Resume';
import { Services } from '../components/Services';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function Portfolio() {
  return <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Services />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>;
}