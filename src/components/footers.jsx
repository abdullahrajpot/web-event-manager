import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    event: [
      { name: "About Event", href: "#about" },
      { name: "Speakers", href: "#speakers" },
      { name: "Schedule", href: "#schedule" },
      { name: "Tickets", href: "#tickets" },
      { name: "Venue", href: "#venue" }
    ],
    resources: [
      { name: "Code of Conduct", href: "#conduct" },
      { name: "FAQ", href: "#faq" },
      { name: "Travel Guide", href: "#travel" },
      { name: "Sponsorship", href: "#sponsors" },
      { name: "Press Kit", href: "#press" }
    ],
    connect: [
      { name: "Newsletter", href: "#newsletter" },
      { name: "Community", href: "#community" },
      { name: "Blog", href: "#blog" },
      { name: "Podcast", href: "#podcast" },
      { name: "Livestream", href: "#stream" }
    ]
  };

  const socialMedia = [
    { name: "Twitter", icon: "𝕏", href: "#twitter" },
    { name: "LinkedIn", icon: "in", href: "#linkedin" },
    { name: "GitHub", icon: "⚡", href: "#github" },
    { name: "Discord", icon: "💬", href: "#discord" },
    { name: "YouTube", icon: "▶", href: "#youtube" }
  ];

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#BA727D' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-16 h-16 rounded-full opacity-10 animate-pulse" 
             style={{ backgroundColor: '#D2BDA2' }}></div>
        <div className="absolute top-20 right-20 w-12 h-12 rounded-full opacity-15 animate-bounce" 
             style={{ backgroundColor: '#D2C4C4' }}></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 rounded-full opacity-20 animate-ping" 
             style={{ backgroundColor: '#D2BDA2' }}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/3 right-16 w-0 h-0 opacity-10" 
             style={{ 
               borderLeft: '20px solid transparent',
               borderRight: '20px solid transparent',
               borderBottom: '30px solid #D2BDA2'
             }}>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                TechForward 2024
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#D2C4C4' }}>
                The premier technology conference bringing together innovators, 
                developers, and thought leaders to shape the future of tech.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border-none outline-none text-sm transition-all duration-300 focus:ring-2"
                  style={{ 
                    backgroundColor: '#D2C4C4',
                    color: '#BA727D',
                    focusRingColor: '#D2BDA2'
                  }}
                />
                <button
                  className="px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{ backgroundColor: '#D2BDA2', color: '#BA727D' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#D2C4C4';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#D2BDA2';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Event Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Event
                <span className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full" 
                      style={{ backgroundColor: '#D2BDA2' }}></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.event.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{ color: '#D2C4C4' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#D2BDA2';
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#D2C4C4';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Resources
                <span className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full" 
                      style={{ backgroundColor: '#D2BDA2' }}></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{ color: '#D2C4C4' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#D2BDA2';
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#D2C4C4';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 relative">
                Connect
                <span className="absolute bottom-0 left-0 w-8 h-0.5 rounded-full" 
                      style={{ backgroundColor: '#D2BDA2' }}></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.connect.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                      style={{ color: '#D2C4C4' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = '#D2BDA2';
                        e.target.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = '#D2C4C4';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-opacity-20 border-white my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Social Media */}
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: '#D2C4C4' }}>Follow us:</span>
            <div className="flex gap-3">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
                  style={{ backgroundColor: 'rgba(210, 196, 196, 0.2)' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#D2BDA2';
                    e.target.style.transform = 'scale(1.1) rotate(5deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(210, 196, 196, 0.2)';
                    e.target.style.transform = 'scale(1) rotate(0deg)';
                  }}
                >
                  <span className="text-white text-sm font-bold group-hover:text-gray-800">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Event Info */}

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-sm" style={{ color: '#D2C4C4' }}>
              © {currentYear} TechForward. All rights reserved.
            </p>
            <div className="flex gap-4 mt-2 justify-center lg:justify-end">
              <a
                href="#privacy"
                className="text-xs transition-colors duration-300"
                style={{ color: '#D2C4C4' }}
                onMouseEnter={(e) => e.target.style.color = '#D2BDA2'}
                onMouseLeave={(e) => e.target.style.color = '#D2C4C4'}
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-xs transition-colors duration-300"
                style={{ color: '#D2C4C4' }}
                onMouseEnter={(e) => e.target.style.color = '#D2BDA2'}
                onMouseLeave={(e) => e.target.style.color = '#D2C4C4'}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="absolute bottom-8 right-8">
          <button
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group"
            style={{ backgroundColor: '#D2BDA2' }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#D2C4C4';
              e.target.style.transform = 'scale(1.1) translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#D2BDA2';
              e.target.style.transform = 'scale(1) translateY(0)';
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-4 h-4 border-t-2 border-r-2 transform -rotate-45 group-hover:-translate-y-0.5 transition-transform duration-300" 
                 style={{ borderColor: '#BA727D' }}></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;