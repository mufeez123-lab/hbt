import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

import Contact from '../components/Contact';


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
    
      <Gallery />
   
      <Contact />
    </div>
  );
};

export default HomePage;