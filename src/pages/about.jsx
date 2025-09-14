import React from "react";
export default function EventIntro() {
  return (
    <section className="py-12 px-6 md:px-20 bg-[#faf9f8]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left side images */}
        <div className="grid grid-cols-2 gap-4 relative">
          <img
            src="../src/assets/about-1.jpeg"
            alt="concert"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="../src/assets/about-2.jpeg"
            alt="band"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="../src/assets/about-3.jpeg"
            alt="dj"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <img
            src="../src/assets/about-4.jpeg"
            alt="singer"
            className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />

          {/* 20+ badge */}
         {/* <div className="absolute left-1/2 top-1/2 bg-white px-5 py-3 rounded-xl shadow-xl border-2 border-[#BA727D] transform -translate-x-1/2 -translate-y-1/2">
            <p className="text-[#BA727D] font-bold text-xl">20+</p>
            <p className="text-gray-600 text-sm">Years of experience</p>
          </div> */}
        </div> 

        {/* Right side text */}
        <div>
          <p className="text-[#BA727D] font-semibold mb-2">Top events</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to the world’s largest Tech festival
          </h2>
          <p className="text-gray-700 mb-4">
            Laboris anim duis sunt aliqua tempor qui. Est in nulla eiusmod ad aliqua laboris jugni
            lol occaecat excepteur voluptate. Eiusmod enim ea minim occaecat in occaecat occaecat.
          </p>

          {/* Bullet points */}
          <ul className="grid grid-cols-2 gap-3 mb-4 text-gray-800">
            <li>✔ Est in nulla eiusmod ad aliqua</li>
            <li>✔ Eiusmod in nulla ead aliqua blui</li>
            <li>✔ Non pariatur sint culpa</li>
            <li>✔ Culpa nisi ullamco reprehenderit</li>
          </ul>

          <p className="text-gray-600 mb-6">
            Est in nulla eiusmod ad aliqua laboris jugni lol occaecat excepteur voluptate. Eiu Fredoka
            rel more denim ea minim occaecat in occaecat occaecat occaecat.
          </p>

          {/* Signature */}
          <div>
            <p className="font-bold text-lg">Bishop Homicon</p>
            <p className="text-sm text-gray-600">Chairman and Organizer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
