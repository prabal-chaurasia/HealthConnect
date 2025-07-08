import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserAlt, FaUserPlus } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.div
      className="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 80 }}
    >
      <div className="logo">
        <Link to="/">
          <img src="Favicon.png" alt="HealthConnect Logo" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/hospitals">Hospitals</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="auth-buttons">
        {/* Updated Link for Login */}
        <Link to="/login">
          <motion.button
            className="login-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserAlt style={{ marginRight: '8px' }} />
            Login
          </motion.button>
        </Link>

        <Link to="/signup">
          <motion.button
            className="signup-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUserPlus style={{ marginRight: '8px' }} />
            Sign Up
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;

















// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src="Favicon.png" alt="" />
//       </div>
//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//       <div className="auth-buttons">
//         <button className="login-btn">Login</button>
//         <button className="signup-btn">Sign Up</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar