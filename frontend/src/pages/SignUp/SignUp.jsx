import React, { useState } from "react";
import "./SignUp.css";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [role, setRole] = useState("user");

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="signup-container">
      <motion.div
        className="signup-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="signup-title">Sign Up as {role === "user" ? "User" : "Admin"}</h2>

        <div className="role-toggle">
          <button
            className={role === "user" ? "active" : ""}
            onClick={() => handleRoleChange("user")}
          >
            User
          </button>
          <button
            className={role === "admin" ? "active" : ""}
            onClick={() => handleRoleChange("admin")}
          >
            Admin
          </button>
        </div>

        <form className="signup-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <motion.button
            type="submit"
            className="signup-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up as {role === "user" ? "User" : "Admin"}
          </motion.button>
        </form>

        {/* Already have an account section */}
        <p className="signup-switch">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Signup;
