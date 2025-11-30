import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Inicio', path: '/inicio' },
  { name: 'Precios', path: '/precios' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'Webs realizadas', path: '/webs-realizadas' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path || (path === '/inicio' && location.pathname === '/');

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/' || location.pathname === '/inicio') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrolled && !isOpen ? 'bg-brand-bg/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="text-2xl font-bold tracking-tighter z-50 relative group"
        >
          RHEON<span className="text-brand-primary group-hover:text-white transition-colors">®</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide transition-colors relative hover:text-brand-primary ${isActive(link.path) ? 'text-white' : 'text-gray-400'
                }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-brand-primary hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Realizar cotización
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed inset-0 bg-[#0E0B1E] z-40 flex flex-col items-center justify-center md:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-3xl font-bold tracking-tight ${isActive(link.path) ? 'text-brand-primary' : 'text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contacto"
                  className="mt-8 px-8 py-4 bg-brand-primary text-white text-xl rounded-full font-bold"
                >
                  Realizar cotización
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;