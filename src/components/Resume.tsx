import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
const experience = [{
  date: '2019 - Present',
  title: 'Senior Web Designer',
  company: 'Tech Solutions Inc.',
  description: 'Leading the design team, creating user-centered designs for web and mobile applications.'
}, {
  date: '2017 - 2019',
  title: 'Web Developer',
  company: 'Creative Agency',
  description: 'Developed responsive websites using HTML, CSS, and JavaScript. Collaborated with UX designers.'
}, {
  date: '2015 - 2017',
  title: 'UI/UX Designer',
  company: 'StartUp Hub',
  description: 'Designed intuitive user interfaces and conducted user research to improve product usability.'
}];
const education = [{
  date: '2013 - 2015',
  title: 'Master in Computer Science',
  school: 'Stanford University',
  description: 'Specialized in Human-Computer Interaction and Software Engineering.'
}, {
  date: '2009 - 2013',
  title: 'Bachelor in Design',
  school: 'Parsons School of Design',
  description: 'Focused on graphic design, typography, and visual communication.'
}, {
  date: '2008 - 2009',
  title: 'Diploma in Web Development',
  school: 'Tech Institute',
  description: 'Learned the fundamentals of web development including HTML, CSS, and PHP.'
}];
export function Resume() {
  return <section id="resume" className="py-24 bg-purple-50/30">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Resume</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-purple-600 h-8 w-8" />
              <h3 className="text-2xl font-bold text-gray-900">Experience</h3>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-white p-8 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow relative">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-4">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-purple-600 font-medium mb-4">
                    {item.company}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>)}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-600 h-8 w-8" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} className="bg-white p-8 rounded-xl shadow-sm border border-purple-100 hover:shadow-md transition-shadow relative">
                  <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full mb-4">
                    {item.date}
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-purple-600 font-medium mb-4">
                    {item.school}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}