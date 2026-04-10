import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { img: `${import.meta.env.BASE_URL}/images/hall.jpg`, title: "Living Room Interiors", colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
  { img: `${import.meta.env.BASE_URL}/images/kit.jpg`, title: "Modular Kitchens", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { img: `${import.meta.env.BASE_URL}/images/rooom.jpg`, title: "Bedroom Interiors", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { img: `${import.meta.env.BASE_URL}/images/decor.jpg`, title: "Office Interiors", colSpan: "col-span-1", rowSpan: "row-span-1" },
  { img: `${import.meta.env.BASE_URL}/images/room.jpg`, title: "Custom Furniture", colSpan: "col-span-1", rowSpan: "row-span-1" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div className="max-w-2xl text-left">
            <h4 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">Portfolio</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-primary">Discover Our Recent Work</h2>
          </div>
          <a href="#contact" className="hidden md:inline-flex mt-6 md:mt-0 font-medium text-accent hover:text-primary transition-colors uppercase tracking-wider text-sm border-b-2 border-accent hover:border-primary pb-1">
            Start Your Project
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[800px]">
          {projects.map((project, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index} 
              className={`relative overflow-hidden group cursor-pointer ${project.colSpan} ${project.rowSpan} h-full min-h-[250px] rounded-sm`}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <h3 className="text-2xl font-serif text-white">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
