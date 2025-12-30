import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Terminal,
  PenTool,
  Wrench,
  Database,
  Binary,
  Cpu,
  FileCode,
  Coffee,
  Palette,
  Image as ImageIcon,
  GitBranch,
  Triangle,
  Book,
  Square,
  Code2,
  Smile
} from 'lucide-react';

const skillCategories = [
  {
    title: 'AI',
    icon: <Brain className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'pandas', icon: <Database className="w-4 h-4" /> },
      { name: 'Numpy', icon: <Binary className="w-4 h-4" /> },
      { name: 'Scikit-learn', icon: <Cpu className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Programming',
    icon: <Terminal className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Python', icon: <FileCode className="w-4 h-4" /> },
      { name: 'java', icon: <Coffee className="w-4 h-4" /> },
      { name: 'Sql', icon: <Database className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Creative Design',
    icon: <PenTool className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'Canva', icon: <Palette className="w-4 h-4" /> },
      { name: 'Gimp', icon: <ImageIcon className="w-4 h-4" /> },
    ]
  },
  {
    title: 'Tools',
    icon: <Wrench className="w-6 h-6 text-purple-600" />,
    skills: [
      { name: 'git', icon: <GitBranch className="w-4 h-4" /> },
      { name: 'vercel', icon: <Triangle className="w-4 h-4" /> },
      { name: 'jupyter', icon: <Book className="w-4 h-4" /> },
      { name: 'Vs Code', icon: <Code2 className="w-4 h-4" /> },
      { name: 'Intellij IDEA', icon: <Square className="w-4 h-4" /> },
      { name: 'Hugging face', icon: <Smile className="w-4 h-4" /> },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-100 relative overflow-hidden">
      {/* Lavender flower decorative elements matching Hero */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Skills
          </h2>
          <div className="w-16 h-1.5 bg-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            The technical stack I leverage to transform concepts into reality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/80 backdrop-blur-sm border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 group shadow-md"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-purple-100 group-hover:bg-purple-200 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-50 border border-purple-100 hover:border-purple-300 hover:bg-white transition-all cursor-default group/pill"
                  >
                    <span className="text-purple-600 transition-colors">
                      {skill.icon}
                    </span>
                    <span className="text-sm font-semibold text-gray-700 group-hover/pill:text-purple-700 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}