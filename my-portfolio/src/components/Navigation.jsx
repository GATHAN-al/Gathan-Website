import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Menu Items
  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/project', label: 'Project' },
    { path: '/about', label: 'About' },
  ];

  return (
    <>
      {/* Fixed Header Buttons */}
      <div className="fixed top-0 left-0 right-0 p-8 flex justify-between items-start z-50 pointer-events-none">
        
        {/* Back Button (Hanya muncul jika bukan di Home) */}
        <div className="pointer-events-auto">
          {location.pathname !== '/' && (
            <button 
              onClick={() => navigate(-1)}
              className="bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform text-gray-700"
            >
              <ArrowLeft size={20} />
            </button>
          )}
        </div>

        {/* Menu Button (Selalu muncul) */}
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform text-gray-700"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 100, opacity: 0 }}
              className="fixed top-8 right-8 z-[60] bg-white rounded-2xl shadow-2xl p-6 min-w-[200px]"
            >
              <div className="flex justify-end mb-2">
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-black text-white'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;