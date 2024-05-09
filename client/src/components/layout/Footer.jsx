import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/policy">Policy</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Help</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Craft-Suplies Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;