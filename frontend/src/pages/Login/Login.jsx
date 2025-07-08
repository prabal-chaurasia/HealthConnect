import React, { useState } from "react";
import "./Login.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("user");

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="login-container">
      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="login-title">Login as {role === "user" ? "User" : "Admin"}</h2>

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

        <form className="login-form">
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
            className="login-submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login as {role === "user" ? "User" : "Admin"}
          </motion.button>
        </form>

        <p className="login-switch">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
