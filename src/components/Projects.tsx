import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
const projects = [{
  title: 'Branding Design',
  category: 'Branding',
  image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80'
}, {
  title: 'Web Application',
  category: 'Development',
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
}, {
  title: 'Mobile Interface',
  category: 'UI/UX Design',
  image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
}, {
  title: 'E-commerce Site',
  category: 'Web Design',
  image: 'https://images.unsplash.com/photo-1523206485973-2795a30a0bc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
}, {
  title: 'Marketing Dashboard',
  category: 'Analytics',
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1630&q=80'
}, {
  title: 'Travel App',
  category: 'Mobile App',
  image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1642&q=80'
}];
export function Projects() {
  return <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <motion.div key={index} initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <div className="aspect-w-4 aspect-h-3">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-purple-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <p className="text-purple-200 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {project.category}
                </p>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  <ExternalLink className="text-white h-6 w-6" />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}