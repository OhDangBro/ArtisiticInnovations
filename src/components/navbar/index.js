const styles = {
  container: {
    width: '100%',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '2px solid black',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  link: {
    display: 'flex',
    color: 'black',
    padding: '20px 40px',
    textDecoration: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1em',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.2s ease-in-out',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkActive: {
    fontWeight: 'bold',
    color: '#FF4D4D',
  }
};

const NavBar = ({ currentPage, handleClick }) => {
  return (
    <div style={styles.container}>
      <a href="#artistic-innovations" style={currentPage === 'Home' ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => handleClick("Home")}>Artistic Innovations</a>
      <a href="#murals" style={currentPage === 'Murals' ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => handleClick("Murals")}>Murals</a>
      <a href="#commercialwindowart" style={currentPage === 'CommercialWindowArt' ? { ...styles.link, ...styles.linkActive } : styles.link} onClick={() => handleClick("CommercialWindowArt")}>Commercial Window Art</a>
      <a href="#custom-and-commercial" style={styles.link} onClick={() => handleClick("CustomAndCommercial")}>Custom</a>
      <a href="#contact" style={styles.link} onClick={() => handleClick("Contact")}>Contact</a>
    </div>
  );
};

export default NavBar;