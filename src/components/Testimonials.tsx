import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
const testimonials = [{
  name: 'Roger Scott',
  role: 'Marketing Manager',
  image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
}, {
  name: 'Sarah Jones',
  role: 'CEO at TechCorp',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
}, {
  name: 'Michael Brown',
  role: 'Product Designer',
  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.'
}];
export function Testimonials() {
  return <section id="testimonials" className="py-24 bg-white">
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
            Happy Clients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-purple-50/50 p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-purple-200 h-10 w-10 rotate-180" />

              <div className="flex items-center gap-4 mb-6">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md" />
                <div>
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-sm text-purple-600">{item.role}</p>
                </div>
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-6">
                "{item.text}"
              </p>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}