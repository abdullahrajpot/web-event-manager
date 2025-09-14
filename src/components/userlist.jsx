import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const UserList = () => {
  const [users, setUsers] = useState([]);

  // Fetch registered users
  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "registrations"));
    setUsers(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 text-left">
          <thead>
            <tr className="bg-[#BA727D] text-white">
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Phone</th>
              <th className="p-2">Event</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-2">{u.name}</td>
                <td className="p-2">{u.email}</td>
                <td className="p-2">{u.phone}</td>
                <td className="p-2">{u.eventTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
