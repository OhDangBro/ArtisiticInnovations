import React, { useState } from 'react';
import "./navbar.css"

const Navbar = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <nav style={{
        height: '10vh',
        background: '#F5F5F5',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1
        }}>
      <button className="hamburger" onClick={toggleNav}>&#9776;</button>
      <div className={`navbar-collapse ${isOpen ? "show" : ""}`} style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
  
        }}>
        <a className="navLink" href="#Home" style={{ 
            fontSize: "1.3rem",
            fontFamily: "regularFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Home'); closeNav(); }}>Artistic Innovations</a>
        <a className="navLink" href="#Services" style={{ 
            fontSize: "1.3rem",
            fontFamily: "regularFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Murals'); closeNav(); }}>Murals</a>
        <a className="navLink" href="#About" style={{ 
            fontSize: "1.3rem",
            fontFamily: "regularFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('CommercialWindowArt'); closeNav(); }}>Commercial Window Art</a>
        <a className="navLink" href="#About" style={{ 
            fontSize: "1.3rem",
            fontFamily: "regularFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Custom'); closeNav(); }}>Custom</a>
        <a className="navLink" href="#Contact" style={{ 
            fontSize: "1.3rem",
            fontFamily: "regularFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Contact'); closeNav(); }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
