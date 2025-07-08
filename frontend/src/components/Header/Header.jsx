import React from 'react';
import './Header.css';
import { MdHealthAndSafety } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/services'); // redirects to the services page
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">HealthConnect: Your Health, Our Priority</h1>
        <p className="header-subtitle">Connecting people with trusted healthcare services</p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="header-image">
        <MdHealthAndSafety />
      </div>
    </header>
  );
};

export default Header;
