import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: "Premium Quality Materials",
    description: "We use high-grade materials that ensure durability and elegance."
  },
  {
    title: "Expert Craftsmanship",
    description: "Skilled professionals deliver precision and attention to detail."
  },
  {
    title: "3D Design Visualization",
    description: "Visualize your interiors before the project begins."
  },
  {
    title: "Timely Delivery",
    description: "Projects completed within promised timelines."
  },
  {
    title: "Personalized Service",
    description: "Each design is customized according to your needs."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-secondary font-medium tracking-widest uppercase mb-4 text-sm">Why Choose Us</h4>
            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
              A Trusted Partner For Your Home Interiors
            </h2>
            <p className="text-gray-300 font-light text-lg mb-12">
              Choosing the right interior design partner decides the longevity and aesthetics of your home. We combine beautiful conceptual design with rigid, reliable execution.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={index} 
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-medium mb-1">{feature.title}</h3>
                    <p className="text-gray-400 font-light">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                src="/images/kitchen.png" 
                alt="Modular Kitchen" 
                className="w-full h-64 object-cover rounded-sm mt-12"
              />
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src="/images/bedroom.png" 
                alt="Living Room" 
                className="w-full h-80 object-cover rounded-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
