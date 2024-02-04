// Header.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <div style={styles.header}>
      <button style={styles.button}>LISTEN LIVE</button>
      <button style={styles.button}>CONTACT US</button>
      <button style={styles.button}>GET THE APP</button>
      <div style={styles.iconContainer}>
        <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
        <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
        <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
      </div>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ff4500',
    color: 'white',
    padding: '10px 20px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    margin: '0 10px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    fontSize: '24px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default Header;
