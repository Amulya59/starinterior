import React from 'react';
import { Home, Armchair, Box, Briefcase, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Home size={32} className="text-accent" />,
    title: "Home Interior Design",
    description: "Complete interior solutions for living rooms, bedrooms, kitchens, and wardrobes designed for style and comfort."
  },
  {
    icon: <Armchair size={32} className="text-accent" />,
    title: "Custom Furniture",
    description: "High-quality custom furniture crafted to match your space, style, and functional needs."
  },
  {
    icon: <Box size={32} className="text-accent" />,
    title: "3D Interior Design",
    description: "Professional 3D design visualization allowing clients to see their space before execution."
  },
  {
    icon: <Briefcase size={32} className="text-accent" />,
    title: "Office Interiors",
    description: "Functional and stylish office interiors that improve productivity and aesthetics."
  },
  {
    icon: <Wrench size={32} className="text-accent" />,
    title: "Furniture Installation",
    description: "Professional installation ensuring precision, structural integrity, and durability."
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">What We Do</h4>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Our Premium Services</h2>
          <p className="text-primary-light font-light text-lg">
            We offer end-to-end interior and furniture solutions tailored precisely to your requirements.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariant}
              className="bg-background p-10 group hover:bg-primary transition-colors duration-500 rounded-sm border border-transparent hover:border-accent"
            >
              <div className="mb-6 bg-white w-16 h-16 flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-primary-light group-hover:text-gray-300 font-light leading-relaxed transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
