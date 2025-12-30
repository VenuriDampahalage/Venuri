import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
const stats = [{
  label: 'Years Experience',
  value: '5+'
}, {
  label: 'Projects Done',
  value: '120+'
}, {
  label: 'Awards Won',
  value: '12'
}];
export function About() {
  return <section id="about" className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Lavender flower decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-purple-300 rounded-full blur-3xl"></div>
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
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border-2 border-purple-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">Name:</span>
                <span className="text-gray-600">Clark Thompson</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">
                  Date of birth:
                </span>
                <span className="text-gray-600">January 01, 1987</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">Address:</span>
                <span className="text-gray-600">
                  San Francisco CA 97987 USA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">Zip code:</span>
                <span className="text-gray-600">1000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">Email:</span>
                <span className="text-purple-600">clark@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 w-32">Phone:</span>
                <span className="text-purple-600">+1-2234-5678-9-0</span>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-purple-600">
                {stats[1].value}
              </span>
              <span className="text-gray-600">Projects complete</span>
            </div>

            <div className="mt-8">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-300">
                Download CV <Download className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-xl text-center border-2 border-purple-200 shadow-md">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
}