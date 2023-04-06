import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)({
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
  textTransform: 'none',
  transition: 'color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'hsl(274deg 53% 50%)',
  },
});

const NotFound = () => {
  return (
    <div style={{ color: 'black', textAlign: 'center' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{textDecoration: 'none'}}>
        <StyledButton variant="contained">Go to Artistic Innovations</StyledButton>
      </Link>
    </div>
  );
};

export default NotFound;
