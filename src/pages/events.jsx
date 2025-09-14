import React, { useState, useEffect } from "react";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
} from "firebase/firestore";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [isRegistered, setIsRegistered] = useState(false);

  // 🔹 Predefined events
  const defaultEvents = [
    {
      title: "Tech Conference 2025",
      desc: "Join industry leaders discussing the future of technology.",
      date: "2025-10-15",
      time: "10:00 AM",
      location: "Expo Center, Lahore",
    },
    {
      title: "Music Night",
      desc: "An evening filled with soulful music and performances.",
      date: "2025-10-20",
      time: "07:00 PM",
      location: "Alhamra Hall, Lahore",
    },
    {
      title: "Art & Craft Workshop",
      desc: "Hands-on art and craft workshop for beginners and professionals.",
      date: "2025-11-05",
      time: "02:00 PM",
      location: "Community Center, Karachi",
    },
    {
      title: "Food Festival",
      desc: "Taste delicious cuisines from around the world.",
      date: "2025-11-10",
      time: "12:00 PM",
      location: "Beach View Park, Karachi",
    },
    {
      title: "Startup Pitch Day",
      desc: "Young entrepreneurs pitch their startup ideas to investors.",
      date: "2025-11-15",
      time: "09:00 AM",
      location: "NIC, Islamabad",
    },
    {
      title: "Book Fair 2025",
      desc: "Explore thousands of books and meet famous authors.",
      date: "2025-11-25",
      time: "11:00 AM",
      location: "Library Complex, Islamabad",
    },
  ];

  // 🔹 Load events from Firestore (if none, use defaults)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "events"), (snapshot) => {
      const eventsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      if (eventsData.length === 0) {
        setEvents(defaultEvents);
      } else {
        setEvents(eventsData);
      }
    });
    return () => unsub();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone (10–15 digits).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit registration
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "registrations"), {
        eventId: selectedEvent.id || null,
        eventTitle: selectedEvent.title,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        timestamp: serverTimestamp(),
      });

      setFormData({ name: "", email: "", phone: "" });
      setIsModalOpen(false);
      setIsRegistered(true);
    } catch (error) {
      console.error("❌ Error saving registration:", error);
      alert("Something went wrong. Try again.");
    }
  };

  // ✅ Success Page
  if (isRegistered) {
    return (
      <section className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-r from-[#BA727D] via-[#D2BDA2] to-[#D2C4C4]">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-10 text-center max-w-md w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-[#BA727D] mb-4">
            🎉 Registration Successful!
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Thank you for registering for{" "}
            <span className="font-semibold">{selectedEvent?.title}</span>. We’ll
            contact you soon with more details.
          </p>
          <button
            onClick={() => setIsRegistered(false)}
            className="px-5 py-2 sm:px-6 sm:py-2 bg-[#BA727D] text-white rounded-lg hover:bg-[#a45d68] transition"
          >
            Back to Events
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-r from-[#BA727D] via-[#D2BDA2] to-[#D2C4C4] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#2D1E1F] mb-8 sm:mb-12">
          Upcoming Events 2025
        </h2>

        {/* Events List */}
        {events.length === 0 ? (
          <p className="text-center text-gray-700">No events found.</p>
        ) : (
          <div className="space-y-6">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white text-[#2D1E1F] rounded-xl p-5 sm:p-6 flex flex-col gap-4 sm:gap-6 
                md:flex-row md:items-center md:justify-between shadow-md hover:shadow-2xl transition"
              >
                {/* Left: Title, Date, Location */}
                <div className="md:w-1/3 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#BA727D]">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-2 text-sm">{event.date}</p>
                  <div className="flex justify-center md:justify-start items-center text-gray-600 mb-2 text-sm sm:text-base">
                    <ClockIcon className="h-5 w-5 text-[#BA727D] mr-2" />
                    {event.time}
                  </div>
                  <div className="flex justify-center md:justify-start items-center text-gray-600 text-sm sm:text-base">
                    <MapPinIcon className="h-5 w-5 text-[#D2BDA2] mr-2" />
                    {event.location}
                  </div>
                </div>

                {/* Center: Description */}
                <div className="md:w-1/2 text-gray-700 text-sm sm:text-base text-center md:text-left">
                  {event.desc}
                </div>

                {/* Right: Button */}
                <div className="md:w-auto text-center">
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setIsModalOpen(true);
                    }}
                    className="px-5 py-2 sm:px-6 sm:py-2 bg-[#BA727D] hover:bg-[#a45d68] 
                    text-white font-semibold rounded-lg transition w-full sm:w-auto"
                  >
                    Register
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white rounded-xl p-5 sm:p-6 w-full max-w-sm sm:max-w-md shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-center text-[#BA727D]">
              Register for {selectedEvent?.title}
            </h3>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#BA727D]"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#BA727D]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone (10–15 digits)"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#BA727D]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              {/* Auto-filled event title */}
              <input
                type="text"
                value={selectedEvent?.title || ""}
                disabled
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-600"
              />

              <button
                type="submit"
                className="w-full bg-[#BA727D] text-white py-2 rounded-lg hover:bg-[#a45d68] transition"
              >
                Confirm Registration
              </button>
            </form>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-[#D2C4C4] text-black py-2 rounded-lg hover:bg-[#b3a8a8] transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsPage;
