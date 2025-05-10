import React, { useState } from 'react';

const services = [
  {
    id: 1,
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our exquisite wedding menus. From elegant cocktail hours to lavish receptions, we create culinary experiences that celebrate your love story.',
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with professional catering services tailored to your business needs. From breakfast meetings to gala dinners, we handle every detail with precision.',
    image: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg',
  },
  {
    id: 3,
    title: 'Private Parties',
    description: 'Transform your home gatherings into extraordinary experiences with our personalized catering services. We bring restaurant-quality cuisine directly to your door for birthdays, anniversaries, and special celebrations.',
    image: 'https://images.pexels.com/photos/5638748/pexels-photo-5638748.jpeg',
  },
  {
    id: 4,
    title: 'Outdoor Events',
    description: 'Enjoy gourmet dining in any outdoor setting. Our specialized equipment and experienced staff ensure perfect execution of your menu, whether at parks, beaches, or backyard venues.',
    image: 'https://images.pexels.com/photos/3887985/pexels-photo-3887985.jpeg',
  },
];

const cuisines = [
  { name: 'North Indian', specialties: ['Butter Chicken', 'Paneer Tikka', 'Dal Makhani'] },
  { name: 'South Indian', specialties: ['Dosa', 'Idli Sambhar', 'Rasam'] },
  { name: 'Chinese', specialties: ['Hakka Noodles', 'Manchurian', 'Spring Rolls'] },
  { name: 'Continental', specialties: ['Pasta', 'Risotto', 'Grilled Vegetables'] },
  { name: 'Mediterranean', specialties: ['Hummus', 'Falafel', 'Greek Salad'] },
  { name: 'Desserts', specialties: ['Pastries', 'Ice Cream', 'Indian Sweets'] },
];

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('services');

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Services & Cuisine</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Discover our comprehensive catering solutions and diverse culinary offerings designed to make your event exceptional.
          </p>
          
          {/* Tabs */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setActiveTab('services')}
              className={`px-6 py-2 mx-2 rounded-md transition-all ${
                activeTab === 'services' 
                  ? 'bg-burgundy text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => setActiveTab('cuisines')}
              className={`px-6 py-2 mx-2 rounded-md transition-all ${
                activeTab === 'cuisines' 
                  ? 'bg-burgundy text-white' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Cuisines
            </button>
          </div>
        </div>
        
        {/* Services Tab Content */}
        {activeTab === 'services' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-burgundy mb-3">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Cuisines Tab Content */}
        {activeTab === 'cuisines' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <h3 className="text-xl font-serif font-bold text-burgundy mb-4 text-center">{cuisine.name}</h3>
                <ul className="space-y-2">
                  {cuisine.specialties.map((specialty, specIndex) => (
                    <li key={specIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                      <span className="text-gray-700">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-3 rounded-md transition-all duration-300"
          >
            Request Custom Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;