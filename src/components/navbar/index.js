import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = (section) => {
    handleClick(section);
    closeNav();
  };

  return (
    <nav
      style={{
        height: '10vh',
        display: 'flex',
        top: 0,
        width: '70vw',
        zIndex: 1,
        margin: '0 auto',
      }}
    >
      <button className="hamburger" onClick={toggleNav}>
        &#9776;
      </button>
      <div
        className={`navbar-collapse ${isOpen ? 'show' : ''}`}
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <Link
          className="navLink"
          to="/"
          onClick={() => handleNavLinkClick('Home')}
          style={{
            fontSize: '1.3rem',
            fontFamily: 'segoeFont',
            textDecoration: 'none',
            color: 'black',
            flex: '1',
            textAlign: 'center',
            padding: '20px',
            display: 'block',
          }}
        >
          Artistic Innovations
        </Link>
        <Link
          className="navLink"
          to="/murals"
          onClick={() => handleNavLinkClick('Murals')}
          style={{
            fontSize: '1.3rem',
            fontFamily: 'segoeFont',
            textDecoration: 'none',
            color: 'black',
            flex: '1',
            textAlign: 'center',
            padding: '20px',
            display: 'block',
          }}
        >
          Murals
        </Link>
        <Link
          className="navLink"
          to="/commercial-window-art"
          onClick={() => handleNavLinkClick('CommercialWindowArt')}
          style={{
            fontSize: '1.3rem',
            fontFamily: 'segoeFont',
            textDecoration: 'none',
            color: 'black',
            flex: '1',
            textAlign: 'center',
            padding: '20px',
            display: 'block',
          }}
        >
          Commercial Window Art
        </Link>
        <Link
          className="navLink"
          to="/custom"
          onClick={() => handleNavLinkClick('Custom')}
          style={{
            fontSize: '1.3rem',
            fontFamily: 'segoeFont',
            textDecoration: 'none',
            color: 'black',
            flex: '1',
            textAlign: 'center',
            padding: '20px',
            display: 'block',
          }}
        >
          Custom
        </Link>
        <Link
          className="navLink"
          to="/contact"
          onClick={() => handleNavLinkClick('Contact')}
          style={{
            fontSize: '1.3rem',
            fontFamily: 'segoeFont',
            textDecoration: 'none',
            color: 'black',
            flex: '1',
            textAlign: 'center',
            padding: '20px',
            display: 'block',
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
  
};

export default Navbar;
