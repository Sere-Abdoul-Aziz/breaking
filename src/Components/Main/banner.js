// FollowBanner.js
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

const FollowBanner = () => {
  const controls = useAnimation();

  const scrollVariants = {
    animate: {
      x: [300, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 10, 
          ease: "linear"
        }
      }
    }
  };

  
  const followText = 'FOLLOW FOR MORE '.repeat(100);

  return (
    <div style={styles.headerContainer}>
      
        <motion.div
          style={styles.scrollingText}
          variants={scrollVariants}
          animate="animate"
        >
          {followText}
        </motion.div>
      </div>
   
  );
};

const styles = {
    headerContainer: {
        backgroundColor: 'white',
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

export default FollowBanner;
