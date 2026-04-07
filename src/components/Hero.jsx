import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}/images/hall.jpg)` }}
      >
        <div className="absolute inset-0 bg-primary/60"></div> {/* Dark overlay for text readability */}
      </div>

      <div className="container-custom relative z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-white max-w-4xl leading-tight mb-6"
        >
          Designing Elegant Interiors That Feel Like <span className="text-accent italic">Home</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 font-light"
        >
          Premium interior design and custom furniture solutions crafted with precision, quality materials, and expert installation across Karnataka.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#contact" className="btn-primary">
            Get Free Consultation
          </a>
          <a href="#gallery" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
