const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    header: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: '2em',
      color: 'hsl(274deg 53% 63%)',
      fontFamily: 'segoeFont',
    },
    h2: {
      fontSize: '3.2em',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'segoeFont',
    },
    h3: {
      fontSize: '1.4em',
      textAlign: 'center',
      margin: '1em 0',
      fontFamily: 'segoeFont',
      paddingBottom: "5%",
      width: "90%"
    },
    h4: {
      fontSize: '3em',
      margin: '1em 0',
      fontFamily: 'segoeFont',
      color: 'hsl(274deg 53% 63%)',
      
    },
    p: {
      fontSize: '1.6em',
      margin: '1em 0',
      fontFamily: 'segoeFont',
      width: '100%',
    },
    text: {
      marginRight: '1em',
      width: '100%',
      margin: '5em 0',
    },
    image: {
      marginLeft: '1em',
      maxWidth: '10vw%',
      maxHeight: '100%',
      width: '100%',
      margin: '5em 0',
      
    },
    button: {
      backgroundColor: 'hsl(274deg 53% 63%)',
      color: 'white',
      padding: '0.5em 1em',
      borderRadius: '2em',
      border: 'none',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '2em',
      fontFamily: 'segoeFont',
      fontWeight: 'bold',
      fontSize: '1em',
      textDecoration: "none",
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'hsl(274deg 53% 50%)',
      },
  
    },
    '@media (max-width: 800px)': {
      container: {
        padding: '1em',
      },
      '.MuiGrid-container': {
        flexDirection: 'column',
      },
      image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '300px',
        maxHeight: '300px',
        width: 'auto',
        height: 'auto',
        margin: '1em 0',
      },
      text: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '90%',
        margin: '1em 0',
      },
      h2: {
        fontSize: '2.2em',
      },
      h3: {
        fontSize: '1.2em',
        paddingBottom: "2%",
      },
      h4: {
        fontSize: '2.5em',
      },
      p: {
        fontSize: '1.2em',
      },
      button: {
        fontSize: '1em',
      },
      
    },
  };

  export default styles;