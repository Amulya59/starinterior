import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactArea = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 pr-0 lg:pr-8"
          >
            <h4 className="text-accent font-medium tracking-widest uppercase mb-4 text-sm">Service Area & Contact</h4>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Let's Discuss Your Dream Project</h2>
            
            <p className="text-primary-light mb-12">
              <strong className="text-primary font-medium">Serving Across Karnataka</strong><br/>
              Star Interiors N Furnitures proudly provides interior design and furniture services across Karnataka, delivering beautiful spaces with quality craftsmanship.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Office Address</h4>
                  <p className="text-primary-light font-light text-sm">
                    Kelgote Industrial Area Service Road,<br/>
                    Bangalore Road, Chitradurga<br/>
                    577501
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-accent mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-semibold text-primary mb-1">Office Hours</h4>
                  <p className="text-primary-light font-light text-sm">Monday – Sunday<br/>Open until 7 PM</p>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6">
                <a href="tel:+910000000000" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Phone size={20} />
                </a>
                <a href="mailto:info@starinteriors.com" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-7/12"
          >
            <form className="bg-white p-10 md:p-14 shadow-sm border border-gray-100 rounded-sm">
              <h3 className="text-2xl font-serif text-primary mb-8">Schedule a Consultation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-400" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-400" placeholder="Your Phone" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Email</label>
                  <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-400" placeholder="Your Email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">Project Type</label>
                  <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors text-primary bg-transparent">
                    <option>Home Interior</option>
                    <option>Custom Furniture</option>
                    <option>Office Interior</option>
                    <option>Installation</option>
                  </select>
                </div>
              </div>
              <div className="mb-10">
                <label className="block text-sm font-medium text-primary mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-accent transition-colors bg-transparent placeholder-gray-400" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="w-full btn-primary hover:bg-primary-light">
                Send Request
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactArea;
