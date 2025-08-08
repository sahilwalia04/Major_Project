import React, { useEffect, useState } from 'react';
import './Navbar.css';
import facelogo from '../images/factbook.png';
import msg from '../images/message.png';
import embed from '../images/icons8-embed-24.png';
import { useNavigate } from 'react-router-dom';
import person from "../images/icons8-person-30.png";

const Navbar = () => {
  const [storedEmail, setStoredEmail] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    setStoredEmail(email); // If email exists in localStorage, store it in state
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('email');
    setStoredEmail(null);
  };

  return (
    <div className='bodynavbar'>
      <div className='ncontainer1'>
        <div>
          CONTACT US
          <a href="mailto:contact@solarsystemcope.com" aria-label="Contact Email">
            contact@solarsystemcope.com
          </a>
        </div>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page">
            <img src={facelogo} alt="Facebook Logo" /> Facebook
          </a>
        </div>
        <div>
          <img src={msg} alt="Newsletter Icon" /> Newsletter
        </div>
        <div>
          <img src={embed} alt="Embed Icon" /> Embed
        </div>
      </div>
      
      {storedEmail ? (
        <div className='emaildivacco'>
          <img src={person} alt="User Icon" aria-hidden="true" />
          <span>{storedEmail}</span>
          <div className='logoutemail' onClick={handleLogout} role="button" tabIndex={0} aria-label="Logout">
            Logout
          </div>
        </div>
      ) : (
        <div 
          className='ncontainer' 
          onClick={handleLogin} 
          role="button" 
          tabIndex={0} 
          aria-label="Account Login"
        >
          Account
        </div>
      )}
    </div>
  );
};

export default Navbar;
