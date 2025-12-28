import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/project', label: 'Project' },
  { path: '/about', label: 'About' },
];

const FloatingMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Optional, kalau mau klik luar untuk close) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-white/50 backdrop-blur-sm z-40"
          />

          {/* Menu Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20, x: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-8 right-8 z-50 bg-white shadow-2xl rounded-2xl p-6 min-w-[200px] border border-gray-100"
          >
            <motion.div className="flex justify-end mb-4">
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </motion.div>

            <nav className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={`px-4 py-3 rounded-xl text-lg font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100 text-gray-600'
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
  );
};

export default FloatingMenu;