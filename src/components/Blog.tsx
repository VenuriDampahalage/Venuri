import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
const posts = [{
  title: 'Why Lead Generation is Key for Business Growth',
  date: 'Sept. 12, 2023',
  comments: 3,
  image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80',
  excerpt: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.'
}, {
  title: 'How to Start a Web Design Business in 2024',
  date: 'Aug. 28, 2023',
  comments: 5,
  image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80',
  excerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.'
}, {
  title: 'Top 10 Tools for Modern Web Developers',
  date: 'July 15, 2023',
  comments: 8,
  image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80',
  excerpt: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
}];
export function Blog() {
  return <section id="blog" className="py-24 bg-purple-50/30">
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-purple-600 font-semibold mb-3 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="flex items-center">
                    <MessageSquare className="w-3 h-3 mr-1" /> {post.comments}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
}