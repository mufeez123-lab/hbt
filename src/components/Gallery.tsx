import React, { useState } from 'react';

const categories = [
  'All',
  'Weddings',
  'Corporate',
  'Private Parties',
  'Food Display'
];

const galleryItems = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
    category: 'Weddings',
    title: 'Elegant Wedding Reception'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/5799004/pexels-photo-5799004.jpeg',
    category: 'Corporate',
    title: 'Business Luncheon'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg',
    category: 'Food Display',
    title: 'Gourmet Appetizer Spread'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/5409009/pexels-photo-5409009.jpeg',
    category: 'Private Parties',
    title: 'Birthday Celebration'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg',
    category: 'Weddings',
    title: 'Wedding Dessert Table'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/5779181/pexels-photo-5779181.jpeg',
    category: 'Food Display',
    title: 'Premium Dining Experience'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    category: 'Corporate',
    title: 'Corporate Gala Dinner'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg',
    category: 'Private Parties',
    title: 'Family Gathering'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(filteredItems[newIndex].id);
  };

  return (
    <section id="gallery" className="py-20">
        {/* Video Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-4">Watch Our Video</h3>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your own video link
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Gallery</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Browse through our portfolio of past events and culinary creations that showcase our expertise and attention to detail.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-all ${
                activeCategory === category
                  ? 'bg-burgundy text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(item.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-4">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center" onClick={closeLightbox}>
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              {filteredItems.find(item => item.id === selectedImage) && (
                <img
                  src={filteredItems.find(item => item.id === selectedImage)?.image}
                  alt={filteredItems.find(item => item.id === selectedImage)?.title}
                  className="max-h-[80vh] max-w-full object-contain"
                />
              )}
              
              <button 
                className="absolute top-0 right-0 m-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={closeLightbox}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <button 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 m-4 text-white bg-black bg-opacity-50 rounded-full p-2"
                onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 text-center text-white bg-black bg-opacity-60 py-2">
                {filteredItems.find(item => item.id === selectedImage)?.title}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
