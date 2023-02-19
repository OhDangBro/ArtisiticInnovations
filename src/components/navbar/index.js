const styles = {
  container: {
    height: '100%',
    width: '15vh',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
  },
  link: {
    display: 'block',
    color: 'black',
    padding: '40px',
    textDecoration: 'none',
    fontFamily: 'Arial, sans-serif',
    fontSize: '1em',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    transition: 'all 0.2s ease-in-out',
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
      <a href="#custom-and-commercial" style={styles.link} onClick={() => handleClick("CustomAndCommercial")}>Custom & Commercial</a>
      <a href="#faux" style={styles.link}>Faux</a>
    </div>
  );
};

export default NavBar;