import React, { useState } from 'react';

const TechEventGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: "AI & Machine Learning Summit",
      category: "speakers",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Leading experts discuss the future of AI",
      date: "March 15, 2025",
      location: "Tech Hub Center"
    },
    {
      id: 2,
      title: "Blockchain Revolution",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop",
      description: "Hands-on blockchain development workshop",
      date: "March 16, 2025",
      location: "Innovation Lab"
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      category: "competitions",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      description: "Young entrepreneurs showcase their ideas",
      date: "March 17, 2025",
      location: "Main Auditorium"
    },
    {
      id: 4,
      title: "Cloud Computing Masterclass",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Advanced cloud architecture patterns",
      date: "March 18, 2025",
      location: "Workshop Room A"
    },
    {
      id: 5,
      title: "Tech Leadership Panel",
      category: "speakers",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      description: "Industry leaders share their insights",
      date: "March 19, 2025",
      location: "Executive Lounge"
    },
    {
      id: 6,
      title: "Cybersecurity Challenge",
      category: "competitions",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      description: "Ethical hacking competition",
      date: "March 20, 2025",
      location: "Security Lab"
    },
    {
      id: 7,
      title: "Mobile App Development",
      category: "workshops",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      description: "Build your first mobile application",
      date: "March 21, 2025",
      location: "Mobile Dev Studio"
    },
    {
      id: 8,
      title: "Innovation Showcase",
      category: "speakers",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      description: "Latest tech innovations and demos",
      date: "March 22, 2025",
      location: "Exhibition Hall"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events' },
    { id: 'speakers', label: 'Speakers' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'competitions', label: 'Competitions' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#D2C4C4] p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#BA727D] mb-4">
            Tech 2025
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join us for the ultimate technology event featuring cutting-edge workshops, 
            inspiring speakers, and exciting competitions that shape the future.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#BA727D] text-white shadow-lg'
                    : 'bg-white text-[#BA727D] hover:bg-[#D2BDA2] hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#BA727D] opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-8 h-8 mx-auto mb-2 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-lg">👁</span>
                    </div>
                    <p className="font-semibold">View Details</p>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-[#D2BDA2] text-white px-3 py-1 rounded-full text-sm font-semibold capitalize opacity-90">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#BA727D] mb-3 group-hover:text-[#D2BDA2] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                
                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-2 text-[#D2BDA2]">📅</span>
                    {item.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-4 h-4 mr-2 text-[#D2BDA2]">📍</span>
                    {item.location}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-[#D2BDA2] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#BA727D] transform hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-[#BA727D] mb-2">No Events Found</h3>
            <p className="text-gray-600">Try selecting a different category to see more events.</p>
          </div>
        )}

        {/* Footer Stats */}
       
      </div>
    </div>
  );
};

export default TechEventGallery;