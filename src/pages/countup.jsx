import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    id: 1,
    icon: "fas fa-microphone",
    value: 50,
    label: "Speakers",
    gradient: "from-[#BA727D] to-[#D2BDA2]",
  },
  {
    id: 2,
    icon: "fas fa-chalkboard-teacher",
    value: 25,
    label: "Workshops",
    gradient: "from-[#D2BDA2] to-[#BA727D]",
  },
  {
    id: 3,
    icon: "fas fa-users",
    value: 1000,
    label: "Attendees",
    gradient: "from-[#BA727D] to-[#D2BDA2]",
  },
  {
    id: 4,
    icon: "fas fa-calendar-day",
    value: 3,
    label: "Days",
    gradient: "from-[#D2BDA2] to-[#BA727D]",
  },
];

const StatsSection = () => {
  return (
    <div className="h-50">

    <div className="mt-16 px-4 sm:px-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat) => (
            <div
            key={stat.id}
            className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-2 hover:bg-gradient-to-r hover:${stat.gradient} hover:text-white flex flex-col items-center justify-center`}
            >
            <div className="text-4xl sm:text-5xl mb-3 text-[#BA727D] hover:text-white">
              <i className={`${stat.icon}`}></i>
            </div>
            <div className="text-3xl sm:text-4xl font-bold mb-1 text-[#BA727D] hover:text-white">
              <CountUp
                end={stat.value}
                duration={2}
                suffix={stat.label === "Attendees" ? "+" : ""}
                />
            </div>
            <div className="text-gray-600 font-medium hover:text-white transition-colors duration-300 text-sm sm:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
        </div>
  );
};

export default StatsSection;
