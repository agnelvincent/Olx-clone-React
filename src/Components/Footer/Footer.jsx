import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading">
            <p>Trending LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Mumbai</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>Tech@OLX</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>OLXPeople</li>
            </ul>
          </div>
        </div>

        <div className='h'>
          <div className="heading ">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Blog</li>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
    
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>Free Classifieds in India. © 2006-2021 OLX</p>
      </div>
    </div>
  );
}

export default Footer;
