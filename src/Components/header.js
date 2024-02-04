// Header.js
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './logo';

const scrollVariants = {
  animate: {
    x: [300, -10000], 
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 100, 
        ease: "linear"
      }
    }
  }
};

const Header = () => {
  const liveText = 'WE ARE LIVE! '.repeat(100); 
  return (
    <div style={styles.headerContainer}>
      <div style={styles.breakingNewsContainer}>
        <div style={styles.breakingNewsLabel}>BREAKING NEWS</div>
        <motion.div
          style={styles.scrollingText}
          variants={scrollVariants}
          animate="animate"
        >
          {liveText}
        </motion.div>
      </div>
      <Logo />
    </div>
    
  );
};

const styles = {
  headerContainer: {
    backgroundColor: '#ff4500',
    color: 'black',
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  },
  breakingNewsContainer: {
    display: 'flex',
    width: '100%',
    overflow: 'hidden'
  },
  breakingNewsLabel: {
    fontWeight: 'bold',
    paddingRight: '20px',
    fontSize: '18px',
    whiteSpace: 'nowrap'
  },
  scrollingText: {
    whiteSpace: 'nowrap'
  }
};

export default Header;
