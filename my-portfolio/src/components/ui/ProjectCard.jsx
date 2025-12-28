import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projects';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Website', 'Mobile', 'Others'];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10"
        >
          Selected Project
        </motion.h1>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat ? 'text-white' : 'text-gray-400 hover:text-black'
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-black rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Thumbnail */}
                <div className="w-full md:w-48 h-32 bg-gray-100 rounded-2xl overflow-hidden shrink-0">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.title} mini-clone</p>
                  <div className="flex gap-2 justify-center md:justify-start mb-4">
                     {project.tags.map(tag => (
                       <span key={tag} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 font-medium">{tag}</span>
                     ))}
                  </div>
                </div>

                {/* Button */}
                <a href={project.link} className="hidden md:flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-xl text-sm font-semibold hover:bg-black hover:text-white transition-colors">
                  {project.title} <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;