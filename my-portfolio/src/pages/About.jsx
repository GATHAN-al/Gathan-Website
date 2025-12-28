import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen bg-white py-16 px-4 md:px-6 font-sans flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* JUDUL HALAMAN */}
        <motion.div 
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-12"
        >
           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">About Me</h1>
           <p className="text-gray-500 mt-2">Get to know me better</p>
        </motion.div>

        {/* CONTENT WRAPPER */}
        {/* PERBAIKAN DISINI: 'flex-col-reverse' membuat gambar (elemen kedua) naik ke atas saat di HP */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          
          {/* --- LEFT SIDE (TEXT) --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div>
               <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                 Hi, I'm <span className="text-black underline decoration-wavy decoration-gray-300">Gathan</span> 👋
               </h2>
               <p className="text-lg font-medium text-gray-600 mt-2">
                 Senior Fullstack Developer in training
               </p>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Saya mahasiswa Teknik Informatika semester 5 di Universitas Tarumanagara. 
              Saya memiliki ketertarikan mendalam pada pengembangan aplikasi web dan mobile, 
              serta memiliki passion unik dalam menggabungkan logika pemrograman dengan prinsip akuntansi.
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
               <div className="flex items-center gap-3 justify-center md:justify-start text-gray-600 text-sm">
                  <MapPin size={18} className="text-black" /> Jakarta, Indonesia
               </div>
               <div className="flex items-center gap-3 justify-center md:justify-start text-gray-600 text-sm">
                  <Calendar size={18} className="text-black" /> Semester 5 Student
               </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
               <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform text-sm">
                  Download CV <Download size={16} />
               </button>
               <button className="flex items-center gap-2 bg-gray-100 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors text-sm">
                  Contact Me <Mail size={16} />
               </button>
            </div>
          </motion.div>

          {/* --- RIGHT SIDE (IMAGE) --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full flex justify-center md:justify-end"
          >
            {/* CONTAINER GAMBAR */}
            <div className="relative w-48 h-48 md:w-80 md:h-96">
               {/* Decorative Background Blob/Shape */}
               <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform rotate-6 scale-105 -z-10" />
               
               {/* Image Frame */}
               <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src="/assets/gathan.jpeg" // Pastikan path ini benar
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
               </div>

               {/* Floating Badge (Optional - Senior Touch) */}
               <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-2 text-xs font-bold border border-gray-100"
               >
                  <span>🚀</span> Open to Work
               </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;