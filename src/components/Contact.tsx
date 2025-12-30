import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Send } from 'lucide-react';
export function Contact() {
  return <section id="contact" className="py-24 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Lavender decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info Cards */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="flex items-center p-6 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl border-2 border-purple-200 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Address</h4>
                <p className="text-gray-600 text-sm">
                  198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.1
          }} className="flex items-center p-6 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl border-2 border-purple-200 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Contact Number</h4>
                <p className="text-gray-600 text-sm">+ 1235 2355 98</p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="flex items-center p-6 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl border-2 border-purple-200 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Email Address</h4>
                <p className="text-gray-600 text-sm">info@yoursite.com</p>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="flex items-center p-6 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl border-2 border-purple-200 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Website</h4>
                <p className="text-gray-600 text-sm">yoursite.com</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} className="lg:w-2/3 bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border-2 border-purple-200 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white" />
              </div>
              <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white" />
              <textarea rows={6} placeholder="Message" className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all resize-none bg-white"></textarea>
              <button type="button" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold rounded-full hover:from-purple-700 hover:to-purple-600 transition-all shadow-lg shadow-purple-300 hover:shadow-xl">
                Send Message <Send className="ml-2 h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>;
}