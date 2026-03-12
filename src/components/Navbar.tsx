import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Hjem', path: '/' },
    { name: 'Om os', path: '/om-os' },
    { name: 'Cases', path: '/cases' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-sm border-bison-dark/5' : 'bg-transparent py-5 border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 15, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`w-10 h-10 ${scrolled ? 'bg-bison-dark text-white' : 'bg-white text-bison-dark'} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300`}
          >
            <span className="font-black text-xl">B</span>
          </motion.div>
          <span className={`text-2xl font-black tracking-tighter ${scrolled ? 'text-bison-dark' : 'text-white'} font-display uppercase group-hover:text-bison-brown transition-colors duration-300`}>Bison Company</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-semibold relative py-1 overflow-hidden group ${location.pathname === item.path ? 'text-bison-brown' : (scrolled ? 'text-bison-dark/70 hover:text-bison-dark' : 'text-white/80 hover:text-white')} transition-colors duration-300`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-bison-brown origin-left transition-transform duration-300 ease-out ${location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/book-et-opkald" className={`relative group overflow-hidden ${scrolled ? 'bg-bison-dark text-white' : 'bg-white text-bison-dark'} px-7 py-3 rounded-full text-sm font-bold shadow-md hover:shadow-xl transition-all duration-300 flex items-center`}>
              <span className="relative z-10 transition-colors group-hover:text-white">Book et opkald</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-bison-brown to-bison-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-bison-dark bg-bison-dark/5 hover:bg-bison-dark/10' : 'text-white bg-white/10 hover:bg-white/20'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-bison-dark/5 flex flex-col overflow-hidden md:hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-bold p-3 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-bison-dark/5 text-bison-brown' : 'text-bison-dark hover:bg-bison-dark/5'}`}
                >
                  {item.name}
                </Link>
              ))}
              <motion.div whileTap={{ scale: 0.95 }} className="mt-2">
                <Link to="/book-et-opkald" className="bg-bison-dark text-white px-6 py-4 rounded-xl text-base font-bold text-center block shadow-lg">
                  Book et opkald
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
