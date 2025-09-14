import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("addEvent");
  const [events, setEvents] = useState([]);
  const [registrations, setRegistrations] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    description: "",
  });

  // Fetch Events
  const fetchEvents = async () => {
    const snapshot = await getDocs(collection(db, "events"));
    setEvents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Fetch Registrations
  const fetchRegistrations = async () => {
    const snapshot = await getDocs(collection(db, "registrations"));
    setRegistrations(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchEvents();
    fetchRegistrations();
  }, []);

  // Add Event
  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.date || !newEvent.description) {
      alert("Please fill all fields!");
      return;
    }
    await addDoc(collection(db, "events"), newEvent);
    setNewEvent({ title: "", date: "", description: "" });
    fetchEvents();
    alert("Event added successfully!");
  };

  // Delete Event
  const handleDeleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  // Update Event (simple example: only update title)
  const handleUpdateEvent = async (id, updatedTitle) => {
    const eventRef = doc(db, "events", id);
    await updateDoc(eventRef, { title: updatedTitle });
    fetchEvents();
  };

  return (
    <div className="p-6 bg-gradient-to-br from-[#BA727D] via-[#D2BDA2] to-[#D2C4C4] min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Admin Dashboard
      </h1>

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("addEvent")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "addEvent"
              ? "bg-white text-[#BA727D]"
              : "bg-[#BA727D] text-white"
          }`}
        >
          Add Event
        </button>
        <button
          onClick={() => setActiveTab("viewUsers")}
          className={`px-4 py-2 rounded-lg font-semibold ${
            activeTab === "viewUsers"
              ? "bg-white text-[#BA727D]"
              : "bg-[#BA727D] text-white"
          }`}
        >
          View Users
        </button>
      </div>

      {/* Add Event Section */}
      {activeTab === "addEvent" && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-[#BA727D]">Add New Event</h2>
          <input
            type="text"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="w-full p-2 border rounded mb-2"
          />
          <textarea
            placeholder="Event Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            className="w-full p-2 border rounded mb-2"
          ></textarea>
          <button
            onClick={handleAddEvent}
            className="bg-[#BA727D] text-white px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Add Event
          </button>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-[#BA727D]">
            Existing Events
          </h3>
          <ul>
            {events.map((event) => (
              <li
                key={event.id}
                className="border-b py-2 flex justify-between items-center"
              >
                <span>
                  <b>{event.title}</b> ({event.date})
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      handleUpdateEvent(event.id, prompt("New Title:", event.title))
                    }
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDeleteEvent(event.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* View Users Section */}
      {activeTab === "viewUsers" && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto overflow-x-auto">
          <h2 className="text-xl font-semibold mb-4 text-[#BA727D]">
            Registered Users
          </h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-[#BA727D] text-white">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Event</th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.phone}</td>
                  <td className="p-2 border">{user.eventTitle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
