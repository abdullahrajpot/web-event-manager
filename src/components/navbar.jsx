import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isAdmin, setIsAdmin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle admin logout
  const handleLogout = () => {
    setIsAdmin(false);
    navigate("/");
  };

  // Shadow effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#BA727D] sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-lg md:text-xl">
            Event Management System
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6 text-white font-medium">
            <Link to="/" className="hover:text-[#D2BDA2] transition duration-300">Home</Link>
            <Link to="/about" className="hover:text-[#D2BDA2] transition duration-300">About</Link>
            <Link to="/events" className="hover:text-[#D2BDA2] transition duration-300">Events</Link>
            <Link to="/gallery" className="hover:text-[#D2BDA2] transition duration-300">Gallery</Link>
            <Link to="/speakers" className="hover:text-[#D2BDA2] transition duration-300">Speakers</Link>
            <Link to="/organizers" className="hover:text-[#D2BDA2] transition duration-300">Organizers</Link>
          </div>

          {/* Admin Section */}
          <div className="hidden md:flex gap-3">
            {!isAdmin ? (
              <button
                onClick={() => navigate("/admin")}
                className="px-3 md:px-4 py-2 rounded-lg bg-[#D2BDA2] text-[#BA727D] font-semibold hover:bg-[#D2C4C4] transition duration-300"
              >
                Admin Login
              </button>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="px-3 md:px-4 py-2 rounded-lg bg-[#D2BDA2] text-[#BA727D] font-semibold hover:bg-[#D2C4C4] transition duration-300"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-3 md:px-4 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <span className="text-2xl">&#10005;</span> : <span className="text-2xl">&#9776;</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#BA727D] text-white px-4 pb-4 flex flex-wrap gap-2">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">About</Link>
          <Link to="/events" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">Events</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">Gallery</Link>
          <Link to="/speakers" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">Speakers</Link>
          <Link to="/organizers" onClick={() => setIsOpen(false)} className="px-2 py-1 hover:text-[#D2BDA2]">Organizers</Link>

          {!isAdmin ? (
            <button
              onClick={() => { navigate("/admin"); setIsOpen(false); }}
              className="w-full text-left bg-[#D2BDA2] text-[#BA727D] rounded px-4 py-2 mt-2"
            >
              Admin Login
            </button>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setIsOpen(false)} className="block bg-[#D2BDA2] text-[#BA727D] rounded px-4 py-2 mt-2">Dashboard</Link>
              <button onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full text-left bg-red-500 text-white rounded px-4 py-2 mt-2">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
