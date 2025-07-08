import React from "react";
import "./About.css";
import { FaHandsHelping, FaHospitalAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="about-title"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
      >
        About HealthConnect
      </motion.h1>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        HealthConnect is a platform dedicated to connecting people with trusted healthcare services and ensuring access to vital resources such as organ availability, appointments, and consultations.
      </motion.p>

      <motion.h2 className="about-subtitle" whileInView={{ scale: 1.1 }}>
        Our Mission
      </motion.h2>
      <p className="about-text">
        We aim to bridge the gap between individuals and medical communities by providing easy tools for healthcare services. Our focus is timely help and life-saving access.
      </p>

      <motion.h2 className="about-subtitle" whileInView={{ scale: 1.1 }}>
        Why Choose Us?
      </motion.h2>
      <div className="about-benefits">
        <motion.div className="benefit" whileHover={{ scale: 1.05 }}>
          <FaHandsHelping size={40} color="#43a047" />
          <h3>Trustworthy</h3>
          <p>Partnered with reputed hospitals and healthcare providers to ensure reliable service.</p>
        </motion.div>

        <motion.div className="benefit" whileHover={{ scale: 1.05 }}>
          <FaHospitalAlt size={40} color="#43a047" />
          <h3>Accessible</h3>
          <p>Simple and user-friendly UI/UX, making it easy for everyone to use.</p>
        </motion.div>

        <motion.div className="benefit" whileHover={{ scale: 1.05 }}>
          <FaRocket size={40} color="#43a047" />
          <h3>Fast & Reliable</h3>
          <p>Real-time updates and quick bookings to save critical time.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
