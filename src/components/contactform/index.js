import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import emailjs from 'emailjs-com';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin: '1em 0',
    border: '3px solid hsl(274deg 53% 63%)', // Add this line to add a border
    padding: '15px',
    borderRadius: '10px',
    backgroundColor: 'hsl(274deg 53% 73%)'
  },
  h3: {
    fontSize: '1.6em',
    textAlign: 'center',
    margin: '1em 0',
    fontFamily: 'segoeFont',
  },
  input: {
    width: '100%',
    padding: '12px 20px', // Add padding here

    margin: '8px 0',
    display: 'inline-block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontFamily: 'segoeFont',
  },
  label: {
    fontFamily: 'segoeFont',
    textAlign: 'left',
    display: 'block',
 
    textTransform: 'uppercase',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    backgroundColor: 'hsl(274deg 53% 63%)',
    border: 'none',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontFamily: 'segoeFont',
  },
};

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_7p1py1l',
        'template_3vy91zb',
        e.target,
        '7W0LA4WeclaDYG5Gr'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true); // Set the sent state to true
          window.alert('Message Sent! We will reach out to you shortly!'); // Display the window alert
        },
        (error) => {
          console.log(error.text);
        }
      );
  
    e.target.reset();
  }
  return (
  <>
    <Box style={styles.container}>
    <Typography variant="h3" style={styles.h3}>
  Contact Us:
</Typography>
      <form onSubmit={sendEmail}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="from_name" style={styles.input} required />
        <label style={styles.label}>Contact Info:</label>
        <input type="text" name="reply_to" style={styles.input} required />
        <label style={styles.label}>Message:</label>
        <textarea name="message" style={{ ...styles.input, height: '150px' }} required />
        <input type="submit" value="Send" style={styles.button} />
      </form>
    </Box>
    </>
  );
};

export default ContactForm;
