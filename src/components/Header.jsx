import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? 'text-primary' : 'text-white drop-shadow-md'}`}>
          STAR <span className="text-accent">INTERIORS</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium hover:text-accent transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-accent text-white font-medium hover:bg-primary transition-colors duration-300">
            Consultation
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-primary z-50 flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-3 bg-accent text-white font-medium hover:bg-white hover:text-primary transition-colors duration-300"
              >
                Get Free Consultation
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
