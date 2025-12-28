import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, X, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects'; 

const categories = ['All', 'Website', 'Mobile', 'Others'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Selected Project
          </h1>
          
          {/* Filter Tabs - Animasi Pill Diperbaiki */}
          <div className="bg-gray-100 p-1 rounded-full inline-flex relative">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors duration-200 z-10 ${
                  activeCategory === cat ? 'text-white' : 'text-gray-500 hover:text-black'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-black rounded-full -z-10"
                    // UPDATE: Spring config yang lebih "snappy" dan smooth
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        {/* UPDATE: Hapus prop 'layout' dari div ini untuk mencegah konflik animasi */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// --- Komponen Kartu (UPDATED ANIMATION) ---
const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layout // Properti ini Wajib ada untuk animasi posisi
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      // UPDATE: Transisi layout terpisah agar pergerakan kartu smooth
      transition={{ 
        opacity: { duration: 0.2 },
        layout: { type: "spring", stiffness: 300, damping: 30 } 
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onClick={onClick}
      className={`group cursor-pointer rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden ${project.cardColor}`}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center justify-between h-full">
        
        {/* --- Left Content --- */}
        <div className="flex-1 w-full flex flex-col justify-center space-y-4 z-10">
          
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-1">
             <div className={`w-5 h-5 rounded-full ${project.themeColor}`} />
          </div>

          <div className="space-y-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm md:text-base font-medium">{project.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 bg-white/60 border border-gray-300/50 rounded-lg text-[10px] md:text-xs font-bold text-gray-700 uppercase tracking-wider backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2">
             <button className="flex items-center gap-2 bg-white text-gray-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md hover:bg-black hover:text-white transition-all duration-300 group-hover:scale-105 active:scale-95">
                {project.title} 
                <ArrowRight size={16} />
             </button>
          </div>
        </div>

        {/* --- Right Content --- */}
        <div className="flex-1 w-full h-full flex items-center justify-center md:justify-end">
          <motion.div 
            className="relative w-full rounded-xl overflow-hidden shadow-xl border-[4px] border-white/40 aspect-[16/10] md:aspect-[4/3] transform md:translate-x-6 group-hover:rotate-2 transition-transform duration-500"
          >
             <div className="absolute inset-0 bg-gray-200 animate-pulse" />
             <img 
               src={project.image} 
               alt={project.title} 
               className="relative w-full h-full object-cover"
             />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Komponen Modal (Sama seperti sebelumnya) ---
const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[85vh] overflow-y-auto shadow-2xl relative scrollbar-hide"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-20"
        >
          <X size={20} className="text-gray-700" />
        </button>

        <div className="p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6">
             <div className={`w-3 h-8 rounded-full ${project.themeColor}`} />
             <div>
                <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
                <p className="text-gray-500 text-sm">{project.category}</p>
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-xl text-sm font-bold hover:opacity-80 transition-opacity">
                  Live Demo <ExternalLink size={14} />
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-900 rounded-xl text-sm font-bold hover:bg-gray-200 transition-colors">
                  Code <Github size={14} />
                </a>
              </div>
            </div>

            <div className="relative">
               <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 aspect-video bg-gray-50">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;