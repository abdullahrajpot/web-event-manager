import React from 'react';

const SpeakersSection = () => {
  const speakers = [
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Senior Cloud Architect",
      company: "CloudScale Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Pioneering cloud infrastructure solutions for Fortune 500 companies and startups alike.",
      expertise: ["Cloud Computing", "DevOps", "Infrastructure"]
    },
    {
      id: 3,
      name: "Elena Kowalski",
      title: "Cybersecurity Expert",
      company: "SecureNet Inc.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Cybersecurity specialist focused on protecting digital infrastructures from emerging threats.",
      expertise: ["Cybersecurity", "Threat Analysis", "Digital Privacy"]
    },
    {
      id: 4,
      name: "David Kim",
      title: "Blockchain Developer",
      company: "CryptoTech",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Blockchain architect building the next generation of decentralized applications and smart contracts.",
      expertise: ["Blockchain", "Smart Contracts", "DeFi"]
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#D2C4C4' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#BA727D' }}>
            Meet Our Speakers
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: 'grey' }}>
            Industry leaders and innovators sharing their expertise at TechForward 2024. 
            Get ready for inspiring talks and cutting-edge insights from the brightest minds in technology.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer transform"
              style={{ 
                backgroundColor: '#FFFFFF',
                boxShadow: '0 4px 20px rgba(186, 114, 125, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(186, 114, 125, 0.3)';
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(186, 114, 125, 0.1)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Card Background Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: '#BA727D' }}
              ></div>

              {/* Speaker Image */}
              <div className="relative overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ 
                    background: `linear-gradient(45deg, rgba(186, 114, 125, 0.3) 0%, rgba(210, 189, 162, 0.2) 100%)`
                  }}
                ></div>
                
                {/* Hover Info Tag */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0"
                     style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                  <span className="text-xs font-semibold" style={{ color: '#BA727D' }}>Featured Speaker</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 relative z-10">
                <h3 
                  className="text-xl font-bold mb-2 group-hover:text-opacity-90 transition-colors duration-300 relative"
                  style={{ color: '#BA727D' }}
                >
                  {speaker.name}
                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 rounded-full" 
                        style={{ backgroundColor: '#D2BDA2' }}></span>
                </h3>
                
                <p 
                  className="font-semibold mb-1 group-hover:text-opacity-80 transition-colors duration-300"
                  style={{ color: '#D2BDA2' }}
                >
                  {speaker.title}
                </p>
                
                <p 
                  className="text-sm mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: '#D2BDA2' }}
                >
                  {speaker.company}
                </p>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {speaker.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2">
                  {speaker.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 group-hover:shadow-md transform cursor-pointer"
                      style={{ 
                        backgroundColor: '#D2C4C4', 
                        color: '#BA727D' 
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#BA727D';
                        e.target.style.color = '#FFFFFF';
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 4px 12px rgba(186, 114, 125, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#D2C4C4';
                        e.target.style.color = '#BA727D';
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div 
                className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-30 rounded-2xl transition-all duration-500 pointer-events-none"
                style={{ borderColor: '#BA727D' }}
              ></div>

              {/* Floating Action Indicator */}
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0"
                   style={{ backgroundColor: '#BA727D' }}>
                <div className="w-3 h-3 border-r-2 border-b-2 border-white transform rotate-45"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default SpeakersSection;