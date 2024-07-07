import React from 'react';
import '../styles/Footer.css';
import nexcentLogo from '../assets/Icon.png'; // Use your actual path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={nexcentLogo} alt="Nexcent Logo" className="nexcent-logo" />
        <p>Copyright © 2020 Nexcent ltd. All rights reserved</p>
        <div className="footer-social-icons">
          <a href="#!" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-instagram"></i></a>
          <a href="#!" className="social-icon"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#!">About us</a></li>
            <li><a href="#!">Blog</a></li>
            <li><a href="#!">Contact us</a></li>
            <li><a href="#!">Pricing</a></li>
            <li><a href="#!">Testimonials</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#!">Help center</a></li>
            <li><a href="#!">Terms of service</a></li>
            <li><a href="#!">Legal</a></li>
            <li><a href="#!">Privacy policy</a></li>
            <li><a href="#!">Status</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Stay up to date</h4>
          <div className="footer-subscribe">
            <input type="email" placeholder="Your email address" />
            <button><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
