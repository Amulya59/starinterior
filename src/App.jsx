import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactArea from './components/ContactArea';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Gallery />
        <Testimonials />
        <ContactArea />
      </main>
      <Footer />
    </div>
  );
}

export default App;
