import React from "react";
export default function JoinEventSection() {
  return (
    <section className="bg-[#D2C4C4] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
        
        {/* Left Side */}
        <div>
          <p className="text-[#BA727D] font-semibold mb-2">Why join events</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            You should join the event
          </h2>
          <p className="text-gray-700 mb-8">
            Cupidatat sunt excepteur ipsum non. Ex consectetur amet eu commodo incididunt 
            elit incididunt aliqua aliqua irure elit minim voluptate. Sit est nisi labore eiusmod 
            et ad. Anim quis anim adipisicing quis cillum id ullamco officia do culpa voluptate 
            exercitation nisi.
          </p>

          {/* Event Date Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md mb-4 hover:shadow-xl transition">
            <div className="bg-[#BA727D] text-white p-3 rounded-full text-xl">📅</div>
            <div>
              <h3 className="font-semibold text-lg">Event date</h3>
              <p className="text-gray-600 text-sm">
                Dolore aute voluptate laboris sint reprehenderit duis labore exercitation cepteur 
                amet liqua velit exercitation et cupidatat elit.{" "}
                <a href="#" className="text-[#BA727D] hover:text-[#A05A65] hover:underline">
                  Learn more...
                </a>
              </p>
            </div>
          </div>

          {/* Event Venue Card */}
          <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md mb-6 hover:shadow-xl transition">
            <div className="bg-[#BA727D] text-white p-3 rounded-full text-xl">📍</div>
            <div>
              <h3 className="font-semibold text-lg">Event venue</h3>
              <p className="text-gray-600 text-sm">
                Nostrud fugiat minim voluptate ullamco. Consectetur liqua velit exercitation et 
                cupidatat elit quis cillum veniam sit commodo.{" "}
                <a href="#" className="text-[#BA727D] hover:text-[#A05A65] hover:underline">
                  Learn more...
                </a>
              </p>
            </div>
          </div>

          {/* Button */}
        </div>

        {/* Right Side (Image) */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="../src/assets/events.jpg"
            alt="Event"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
}
