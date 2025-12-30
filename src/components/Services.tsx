import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Globe, Smartphone, Camera, Code, BarChart } from 'lucide-react';
const services = [{
  icon: <Palette className="h-10 w-10" />,
  title: 'Web Design',
  description: 'Creating visually stunning and user-friendly designs that represent your brand identity effectively.'
}, {
  icon: <Code className="h-10 w-10" />,
  title: 'Web Development',
  description: 'Building robust, scalable, and high-performance websites using the latest technologies.'
}, {
  icon: <Smartphone className="h-10 w-10" />,
  title: 'App Development',
  description: 'Developing native and cross-platform mobile applications for iOS and Android devices.'
}, {
  icon: <Camera className="h-10 w-10" />,
  title: 'Photography',
  description: 'Professional photography services to capture high-quality images for your business needs.'
}, {
  icon: <BarChart className="h-10 w-10" />,
  title: 'SEO Marketing',
  description: 'Optimizing your online presence to improve search engine rankings and drive organic traffic.'
}, {
  icon: <Globe className="h-10 w-10" />,
  title: 'Branding',
  description: 'Crafting unique brand strategies and visual identities to stand out in the market.'
}];
export function Services() {
  return <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Lavender decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="group p-8 bg-gradient-to-br from-purple-50 to-white rounded-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-200 hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 group-hover:from-purple-600 group-hover:to-purple-500 group-hover:text-white transition-all duration-300 shadow-md">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-purple-200 mx-auto mt-6 group-hover:bg-purple-600 group-hover:w-20 transition-all duration-300 rounded-full"></div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}