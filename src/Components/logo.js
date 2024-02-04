// Logo.js
import React from 'react';
import logo from '../assets/images/logo.png';

const Logo = () => {
  return (
    <img
      src={logo} 
      alt="Logo"
      style={styles.logo}
    />
  );
};

const styles = {
  logo: {
    width: '100px', 
    height: 'auto', 
    position: 'absolute',
    left: '20px',
    top: '50px',
  },
};

export default Logo;
