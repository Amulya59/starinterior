import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Very good services. 3D design was superb and the quality was excellent.",
    name: "Rahul M.",
    role: "Homeowner"
  },
  {
    text: "Premium quality products with timely delivery and installation. Highly recommended.",
    name: "Sneha V.",
    role: "New Apartment Owner"
  },
  {
    text: "Excellent service and professional team. They transformed my office completely.",
    name: "Karthik Gowda",
    role: "Business Owner"
  }
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h4 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl font-serif text-primary">What Our Clients Say</h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              variants={itemVariant}
              className="bg-background p-10 rounded-sm hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="flex gap-1 mb-6 text-accent">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-primary-light font-medium italic mb-8 text-lg">"{review.text}"</p>
              <div>
                <h5 className="font-serif text-primary font-semibold text-lg">{review.name}</h5>
                <p className="text-sm text-gray-500 font-light">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
