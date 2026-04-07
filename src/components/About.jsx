import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src={`${import.meta.env.BASE_URL}/images/bedroom.png`} 
                alt="Luxury Bedroom Design by Star Interiors" 
                className="relative z-10 w-full h-full object-cover rounded-sm shadow-xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col justify-center"
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">About Us</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              Crafting Beautiful Spaces With Passion
            </h2>
            
            <div className="space-y-6 text-primary-light font-light text-lg">
              <p>
                Star Interiors N Furnitures is a trusted interior design and furniture solution provider based in Chitradurga.
              </p>
              <p>
                We specialize in designing elegant living spaces through custom furniture, thoughtful design planning, and high-quality materials.
              </p>
              <p>
                From concept to installation, every project is handled with meticulous attention to detail to ensure homes and spaces reflect both beauty and functionality. With a strong commitment to quality, timely delivery, and customer satisfaction, our team focuses on creating interiors that truly feel like home.
              </p>
            </div>
            
            <div className="mt-10">
               <img src="/images/logo-placeholder.png" alt="" className="h-12 opacity-0" /> {/* Placeholder spacing */}
               <p className="font-serif text-xl italic text-primary">"Transforming spaces with premium interiors and craftsmanship."</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
