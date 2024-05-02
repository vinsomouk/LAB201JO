import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/cgu">CGU</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;