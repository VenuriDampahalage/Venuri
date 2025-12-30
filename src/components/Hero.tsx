import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
export function Hero() {
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 pt-20 overflow-hidden">
      {/* Lavender flower decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Content */}
        <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="flex-1 text-center md:text-left space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-200 text-purple-800 text-sm font-semibold tracking-wide uppercase mb-2">
            Hello!
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
            I'm a <span className="text-purple-600">Web Designer</span> based in
            London
          </h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
            I create clean, professional, and responsive websites that help
            businesses grow and succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full hover:from-purple-700 hover:to-purple-600 hover:shadow-lg hover:shadow-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600">
              Hire Me
            </a>
            <a href="#projects" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-purple-700 transition-all duration-200 bg-white border-2 border-purple-300 rounded-full hover:bg-purple-50 hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-300">
              My Works <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Image Content */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="flex-1 relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
            <div className="absolute inset-0 bg-purple-300 rounded-full opacity-30 blur-3xl transform translate-y-4"></div>
            <div className="absolute inset-0 bg-purple-400 rounded-full opacity-20 blur-2xl transform -translate-x-4"></div>
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" alt="Portrait" className="relative w-full h-full object-cover rounded-full border-8 border-white shadow-2xl shadow-purple-200 z-10" />
          </div>
        </motion.div>
      </div>
    </section>;
}