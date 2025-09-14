import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const EventManager = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",       // added
    location: "",   // added
    description: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch events
  const fetchEvents = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    setEvents(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Add or update event
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await updateDoc(doc(db, "events", editId), form);
      setEditId(null);
    } else {
      await addDoc(collection(db, "events"), form);
    }
    setForm({ title: "", date: "", time: "", location: "", description: "" });
    fetchEvents();
  };

  // Delete event
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Manage Events</h2>

      {/* Event Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
        <input
          type="text"
          placeholder="Event Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="time"
          value={form.time}
          onChange={(e) => setForm({ ...form, time: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Event Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#BA727D] text-white px-4 py-2 rounded hover:bg-[#D2BDA2] transition"
        >
          {editId ? "Update Event" : "Add Event"}
        </button>
      </form>

      {/* Event List */}
      <ul className="space-y-4">
        {events.map((event) => (
          <li
            key={event.id}
            className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center"
          >
            <div>
              <h3 className="text-lg font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.date} {event.time}</p>
              <p className="text-gray-600">{event.location}</p>
              <p>{event.description}</p>
            </div>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <button
                className="px-3 py-1 bg-yellow-500 text-white rounded"
                onClick={() => {
                  setForm(event);
                  setEditId(event.id);
                }}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded"
                onClick={() => handleDelete(event.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventManager;
