import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-[90vh] md:h-screen w-full mt-[60px] sm:mt-[80px]">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/biryani.jpg')", // Fixed the missing closing quote here
          backgroundSize: 'cover',
          // backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4 px-4">
          <span className="block mb-2">HBT CATERING</span>
          <span className="block">For Every Occasion</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 px-4">
        Make your event special with amazing food and service. From small parties to large events, we bring the perfect mix of taste and elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 px-4">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-burgundy hover:bg-burgundy-dark text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Explore Menus
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
