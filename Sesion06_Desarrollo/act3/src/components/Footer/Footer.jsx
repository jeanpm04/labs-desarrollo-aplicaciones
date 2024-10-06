import React from 'react';
import './Footer.css';

function Footer({ message }) {
  return (
    <footer className="footer">
      <p>{message}</p>
    </footer>
  );
}

export default Footer;
