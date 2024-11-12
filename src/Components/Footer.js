import React from 'react';
import './Footer.css'; 

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Manaan&CO.</h1>
        </div>
        <div className="footer-nav">
          <h2>Navigate</h2>
          <a href="#" onClick={scrollToTop} className="footer-link">Home</a>
          <a href="/products" className="footer-link">Products</a>
          <a href="/designs" className="footer-link">Designs</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact Us</a>
        </div>
        <div className="social-links">
          <h2>Follow Us</h2>
          <a href="Facebook.com" className="social-link facebook"><i className="fab fa-facebook"></i></a>
          <a href="Insta.com" className="social-link instagram"><i className="fab fa-instagram"></i></a>
          <a href="Twitter.com" className="social-link twitter"><i className="fab fa-twitter"></i></a>
          <a href="Linkedin.com" className="social-link linkedin"><i className="fab fa-linkedin"></i></a>
        </div>
        <div className="footer-terms">
          <a href="term" className="footer-link">Terms of Service</a>
          <a href="privacy" className="footer-link">Privacy Policy</a>
        </div>
        <p className="footer-copy">&copy; 2024 Manaan&CO. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
