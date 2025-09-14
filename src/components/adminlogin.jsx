// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AdminLogin = ({ setIsAdmin }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === "admin@example.com" && password === "admin123") {
//       setIsAdmin(true);
//       navigate("/dashboard");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-lg w-80">
//         <h2 className="text-2xl font-bold mb-4 text-center text-[#BA727D]">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-3"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-2 border border-gray-300 rounded mb-3"
//         />
//         <button
//           type="submit"
//           className="w-full bg-[#BA727D] text-white py-2 rounded font-semibold hover:bg-[#a86b70] transition duration-300"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AdminLogin;

