import React from 'react';
import { motion } from 'framer-motion';
const skills = [{
  name: 'Photoshop',
  percentage: 90
}, {
  name: 'jQuery',
  percentage: 85
}, {
  name: 'HTML5',
  percentage: 95
}, {
  name: 'CSS3',
  percentage: 90
}, {
  name: 'WordPress',
  percentage: 70
}, {
  name: 'SEO',
  percentage: 80
}];
export function Skills() {
  return <section id="skills" className="py-24 bg-purple-50/30">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => <div key={index} className="mb-4">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-gray-900 text-lg">
                  {skill.name}
                </span>
                <span className="text-purple-600 font-semibold">
                  {skill.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div initial={{
              width: 0
            }} whileInView={{
              width: `${skill.percentage}%`
            }} viewport={{
              once: true
            }} transition={{
              duration: 1,
              delay: 0.2
            }} className="bg-purple-600 h-2.5 rounded-full"></motion.div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}