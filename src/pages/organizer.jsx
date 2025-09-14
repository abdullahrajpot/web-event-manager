import React from "react";
import { useState } from "react";

export default function MembersPage() {
  const [members] = useState([
    {
      id: 2,
      name: "Michael Chen",
      role: "General seceratory",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Building scalable applications with a focus on performance and clean architecture.",
      joinDate: "Mar 2022"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Joint seceratory",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Crafting intuitive designs that bridge the gap between users and technology.",
      joinDate: "Jun 2023"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Head",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Specializing in robust server-side solutions and database optimization.",
      joinDate: "Sep 2021"
    },
  ]);

  return (
    <div className="min-h-screen bg-[#faf9f8]" > 
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(186, 114, 125, 0.05)' }}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: '#6B4C57' }}>
              Meet Our <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(45deg, #BA727D, #A0626C)' }}>Amazing Team</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#8B7355' }}>
              Talented individuals working together to create exceptional digital experiences
            </p>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              className="group relative backdrop-blur-sm rounded-2xl p-6 border transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                backgroundColor: '#D2C4C4',
                borderColor: '#BA727D',
                borderWidth: '2px',
                boxShadow: '0 4px 6px -1px rgba(186, 114, 125, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D2BDA2';
                e.currentTarget.style.borderColor = '#BA727D';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(186, 114, 125, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D2C4C4';
                e.currentTarget.style.borderColor = '#BA727D';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(186, 114, 125, 0.1)';
              }}
            >
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" style={{ background: 'radial-gradient(circle, rgba(186, 114, 125, 0.3), transparent)' }}></div>
              
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 transition-all duration-300" style={{ ringColor: '#BA727D' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Status Indicator */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 group-hover:animate-pulse" style={{ backgroundColor: '#BA727D', borderColor: '#D2C4C4' }}></div>
              </div>

              {/* Member Info */}
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-xl font-bold group-hover:transition-colors duration-300" style={{ color: '#6B4C57' }}>
                    {member.name}
                  </h3>
                  <p className="font-medium" style={{ color: '#BA727D' }}>{member.role}</p>
                </div>

                <p className="text-sm leading-relaxed group-hover:transition-colors duration-300" style={{ color: '#8B7355' }}>
                  {member.bio}
                </p>

                {/* Skills */}
                {/* <div className="flex flex-wrap justify-center gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium rounded-full border transition-all duration-300 group-hover:scale-105"
                      style={{
                        color: '#6B4C57',
                        backgroundColor: '#D2BDA2',
                        borderColor: '#BA727D'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}

                {/* Join Date */}
                <div className="pt-4 border-t" style={{ borderColor: '#BA727D' }}>
                  <p className="text-sm" style={{ color: '#8B7355' }}>
                    Joined <span className="font-medium" style={{ color: '#BA727D' }}>{member.joinDate}</span>
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-3 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0">
                  <button 
                    className="px-5 py-2 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
                    style={{ backgroundColor: '#BA727D' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#A0626C';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#BA727D';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}>
                    View Profile
                  </button>
                  <button 
                    className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg active:scale-95"
                    style={{ 
                      backgroundColor: '#D2BDA2',
                      color: '#6B4C57',
                      border: `1px solid #BA727D`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#BA727D';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#D2BDA2';
                      e.currentTarget.style.color = '#6B4C57';
                      e.currentTarget.style.transform = 'translateY(0px)';
                    }}>
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      {/* <div className="backdrop-blur-sm border-t" style={{ backgroundColor: '#D2BDA2', borderColor: '#BA727D', borderWidth: '2px 0 0 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#6B4C57' }}>
            Want to Join Our Team?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto" style={{ color: '#8B7355' }}>
            We're always looking for talented individuals to join our growing team.
          </p>
          <button 
            className="px-8 py-3 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg"
            style={{ backgroundColor: '#BA727D' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#A0626C';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#BA727D';
              e.currentTarget.style.transform = 'scale(1)';
            }}>
            View Open Positions
          </button>
        </div>
      </div> */}
    </div>
  );
}