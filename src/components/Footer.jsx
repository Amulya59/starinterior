import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block text-2xl font-serif font-bold tracking-wider text-white mb-6">
              STAR <span className="text-accent">INTERIORS</span>
            </a>
            <p className="text-gray-400 font-light leading-relaxed mb-6">
              Transforming spaces with premium interiors and craftsmanship. We build elegant environments that truly feel like home.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Home Interior Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Custom Furniture</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">3D Visualization</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Office Interiors</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Connect</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li><a href="#" className="hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Houzz</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:text-left text-gray-500 font-light text-sm">
          <p>&copy; {new Date().getFullYear()} Star Interiors N Furnitures. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
