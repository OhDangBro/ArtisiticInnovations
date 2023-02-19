const styles = {
    container: {
      height: '8vh',
      backgroundColor: '#F5F5F5',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1em',
      borderBottom: '2px solid black',
    },
    link: {
      display: 'block',
      color: 'black',
      padding: '1em',
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
  
  const NavBar2 = ({ currentPage, handleClick }) => {
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
  
  export default NavBar2;