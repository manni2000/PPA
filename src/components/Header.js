import React from 'react';
import '../styles/Header.css';
import logo from '../assets/icon1.png'; // Use your actual path

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Nexcent Logo" className="logo" />
      <nav className="nav">
        <a href="#home">Home</a>
        <a href="#service">Service</a>
        <a href="#feature">Feature</a>
        <a href="#product">Product</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
