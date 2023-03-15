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
        display: 'flex',
        top: 0,
        width: '70vw',
        zIndex: 1,
        margin: '0 auto',

        }}>
      <button className="hamburger" onClick={toggleNav}>&#9776;</button>
      <div className={`navbar-collapse ${isOpen ? "show" : ""}`} style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          flex: 1,
  
        }}>
        <a className="navLink" href="#top"  style={{ 
            fontSize: "1.3rem",
            fontFamily: "segoeFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Home'); closeNav(); }}>Artistic Innovations</a>
        <a className="navLink" href="#top" style={{ 
            fontSize: "1.3rem",
            fontFamily: "segoeFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Murals'); closeNav(); }}>Murals</a>
        <a className="navLink" href="#top" style={{ 
            fontSize: "1.3rem",
            fontFamily: "segoeFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('CommercialWindowArt'); closeNav(); }}>Commercial Window Art</a>
        <a className="navLink" href="#top" style={{ 
            fontSize: "1.3rem",
            fontFamily: "segoeFont",
            textDecoration: "none",
            color: "black",
            flex: "1",
            textAlign: "center",
            padding: "20px",
            display: "block",
          }} onClick={() => { handleClick('Custom'); closeNav(); }}>Custom</a>
        <a className="navLink" href="#top" style={{ 
            fontSize: "1.3rem",
            fontFamily: "segoeFont",
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
