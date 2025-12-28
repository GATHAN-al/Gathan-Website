import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal, Code2, Database, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden font-sans pt-20 md:pt-0">
      
      {/* BACKGROUND DECORATION */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-6xl mx-auto px-6 z-10 w-full">
        
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20">
          
          {/* --- LEFT SIDE: TEXT --- */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-600">Available for Internship</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.1]"
            >
              Transforming Complex Logic into <br className="hidden md:block" />
              {/* GANTI BAGIAN SPAN INI */}
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
  Seamless Solutions.
</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto md:mx-0"
            >
              Hi, I'm <span className="font-bold text-gray-900">Gathan</span>. An Informatics Student combining 
              accounting logic with fullstack engineering to build scalable digital products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Link 
  to="/project" 
  className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-black/20"
>
  View Projects <ArrowRight size={20} />
</Link>
              <a href="/cv.pdf" className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 text-gray-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                Download CV <Download size={20} />
              </a>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            className="flex-1 relative w-full max-w-sm md:max-w-md"
          >
             {/* Abstract Background Blob behind Image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[2rem] transform rotate-6 scale-105 -z-10" />
             
             {/* The Image Frame */}
             <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white aspect-[4/5] md:aspect-square">
                <img 
                  src="/assets/gathan.jpeg" // FOTO ANDA DISINI
                  alt="Gathan Profile" 
                  className="w-full h-full object-cover"
                />
                
                {/* Optional: Glass Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-white/50 shadow-sm">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Code2 size={20} className="text-blue-600"/>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Focus</p>
                        <p className="text-sm font-bold text-gray-900">Web & Mobile Dev</p>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>

      </div>

      {/* TECH STACK MARQUEE (Tetap Ada di Bawah) */}
      <div className="mt-20 border-y border-gray-100 bg-gray-50/50 py-6 overflow-hidden">
        <div className="flex w-max animate-infinite-scroll">
          {[...techStack, ...techStack].map((tech, index) => (
            <div key={index} className="flex items-center gap-2 px-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
              {tech.icon}
              <span className="text-lg font-bold text-gray-700">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Data Tech Stack
const techStack = [
  { name: 'ReactJS', icon: <Code2 className="text-blue-500" /> },
  { name: 'Laravel', icon: <Terminal className="text-red-500" /> },
  { name: 'Flutter', icon: <Layout className="text-blue-400" /> },
  { name: 'Python', icon: <Terminal className="text-yellow-500" /> },
  { name: 'Tailwind', icon: <Layout className="text-teal-400" /> },
  { name: 'MySQL', icon: <Database className="text-blue-600" /> },
  { name: 'Figma', icon: <Layout className="text-purple-500" /> },
];

export default Home;