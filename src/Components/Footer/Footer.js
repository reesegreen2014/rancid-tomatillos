import React from 'react';
import './Footer.css';

function Footer() {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <footer className="footer" onClick={scrollToTop}>
        <h1>Rancid Tomatillos</h1>
      </footer>
    );
  }
  
  export default Footer;
