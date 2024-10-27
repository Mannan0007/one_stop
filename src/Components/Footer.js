import React from 'react';
import '../styles/footer.css'; // Import your footer styles

function Footer  ()  {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2024 1Stop. All rights reserved.</p>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
