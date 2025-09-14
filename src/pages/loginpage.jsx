// components/Login.jsx
import { useState } from "react";

export default function Login({ setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@test.com" && password === "admin123") {
      setIsAdmin(true);
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-lg rounded-lg p-6 w-80"
      >
        <h2 className="text-lg font-bold text-[#BA727D] mb-4">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-[#BA727D] text-white py-2 rounded hover:opacity-90"
        >
          Login
        </button>
      </form>
    </div>
  );
}
