import React from "react";
import { FaCalendarAlt, FaHeartbeat, FaStethoscope } from "react-icons/fa"; // Importing the icons
import { motion } from "framer-motion"; // Import Framer Motion
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">
      <motion.h1
        className="services-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="services-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        HealthConnect provides a variety of services to ensure a smooth and
        efficient healthcare experience. Explore the different services below:
      </motion.p>

      <div className="services-cards">
        {/* Card 1: Appointments */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster scale transition
        >
          <FaCalendarAlt className="service-icon" />
          <h3>Appointments</h3>
          <p>
            Book your appointments with trusted healthcare professionals quickly
            and easily.
          </p>
        </motion.div>

        {/* Card 2: Organ Availability */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster scale transition
        >
          <FaHeartbeat className="service-icon" />
          <h3>Organ Availability</h3>
          <p>
            Stay informed about the availability of critical organs in
            real-time.
          </p>
        </motion.div>

        {/* Card 3: Consultation */}
        <motion.div
          className="service-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster scale transition
        >
          <FaStethoscope className="service-icon" />
            <h3>Consultation</h3>
            <p>
              Get online consultations with healthcare experts at your
              convenience.
            </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
