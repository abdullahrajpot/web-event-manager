import React, { useState } from "react";
import EventManager from "./eventmanager";
import UserList from "./userlist";

const Dashboard = () => {
  const [activeView, setActiveView] = useState(""); // "" | "events" | "users"

  return (
    <div className="flex flex-col items-center justify-start min-h-screen gap-6 p-6">
      <h1 className="text-3xl font-bold text-[#BA727D]">Admin Dashboard</h1>
      <div className="flex gap-4">
        <button
          onClick={() => setActiveView("events")}
          className="px-6 py-3 bg-[#D2BDA2] text-[#BA727D] rounded-lg hover:bg-[#D2C4C4] transition"
        >
          Add Event
        </button>
        <button
          onClick={() => setActiveView("users")}
          className="px-6 py-3 bg-[#D2BDA2] text-[#BA727D] rounded-lg hover:bg-[#D2C4C4] transition"
        >
          View Users
        </button>
      </div>

      <div className="w-full mt-6">
        {activeView === "events" && <EventManager />}
        {activeView === "users" && <UserList />}
      </div>
    </div>
  );
};

export default Dashboard;
