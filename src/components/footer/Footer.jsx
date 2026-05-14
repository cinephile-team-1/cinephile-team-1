import React from 'react'
import globeIcon from '../../assets/icons/globe-icon.svg';
import shareIcon from '../../assets/icons/share-icon.svg';

function Footer() {
  return (
    <footer className='ct-footer'>
        <p className='ct-footer_logo'>CINEPHILE.<span> PRECISION ENGINEERED SRTEAMING</span></p>
        
        <ul className='ct-footer_info'>
          <li>PRIVACY POLICY</li>
          <li>TERMS OF SERVICE</li>
          <li>HELP CENTER</li>
          <li>API</li>
        </ul>
        <ul className='ct-footer_icons'>
          <li><img src={globeIcon} alt="globe icon" /></li>
          <li><img src={shareIcon} alt="share icon" /></li>
        </ul>
    </footer>
  );
}

export default Footer;
