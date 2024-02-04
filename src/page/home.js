// home.js
import React from 'react';
import Header from '../Components/header';
import MainPageComponent from '../Components/Main/MainPageComponent';

function Home() {
  return (
    <div style={styles.mainPage}>
      <Header />
      <div style={styles.overlay}></div>
        <div style={styles.appContainer}>
            <MainPageComponent />
        </div>
        <div style={styles.imageContainer}>
        
        <img
          src="https://s3-alpha-sig.figma.com/img/a9d2/4e09/58f8380bea79db48d9a8f369bd370b51?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YLie-e13j5QXYKLCu6cCru30nzPwC5~jH-tKCYd0ePnGW9H-3OcrRYPgUyldT2HNesPqXWQ~9kxoPeCoKXSHJ9LWttuIrz0BhvAk6SkAn3VEnlC~9O36AKQZDyGnSXbRI21SKsMnC167GmRFMwn1jphKIrmSbQ~5PTasAjwCUZYb2JSBf9zaM34CVrk1NwbKOHCiixCEF6glxGid0t-k7Kojgrzv3cWmAB92n3NbNi36~WJQoe-bIk5Iug27yDghMivUDx4Nyf6F0wyJe1qediEYj55K0602ZT2bh6JzDyk0HBjdJBlyPnIxfcvBeTDCEQ0lNymicNHV6k-sqp3dHQ__"
          alt="grafiti"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
        <div style={textStyle}>
      We are one people but we live as if
    </div>
    <div style={textStyle2}>
    Divided … everything is connected
    </div>
    
    </div>
  );
}

const textStyle = {
    transform: 'rotate(-90deg)',
    transformOrigin: 'left top',
    position: 'absolute',
    left: '10px', 
    bottom: '0%', 
    fontSize: '2vw',
    whiteSpace: 'nowrap',
    color: 'white', 
  };

  const textStyle2 = {
    transform: 'rotate(-90deg)', 
    transformOrigin: 'left top', 
    position: 'absolute',
    left: '50px', 
    bottom: '10%', 
    fontSize: '2vw', 
    whiteSpace: 'nowrap', 
    color: 'red', 
  };

  

const styles = {
    appContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      marginTop: '-10px',
      padding: '0 10px', 
      boxSizing: 'border-box', 
      zIndex: 2,
      
    },
   

      mainPage: {
        width: '100%',
        background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://s3-alpha-sig.figma.com/img/907a/6b85/071fd2fe6f6f96eca94973bfbb64cfeb?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bGecEdcC5TuvewMOC2zYtA3s5QgSSNlJ7yrze4lMYca-dCV1rInlTHuOW40ym175YWsWYwIFcd0tITiBlRbnlIpOAhowWQxireegrruuACZ0vHgOYvXBYeZYVUlT-11NDvyh~avmpyvTNKIuum~FhPTVh8~1UiOPBk28in59EqHxxHDCopsBlHTjkMq00y3TaZb~4b-kADQMMKA4mV7DC7WGKOLepUvm6JsbpnpJWubtHWGMdcn3SnHGayg6PxxGU6THkmrlm-wPwd3tCrKH7bP~N07DCu0bNhqTUVWsqUP4a6AUBl1dDTQ7IP~VLj3zRCwiavYWP7lNxRlSOo4MGg__)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
     
     
      imageContainer: {
        width: '50%', 
        height: '100%', 
        position: 'absolute',
    left: '50%', 
    top:'10px', 
    zIndex: 0,
   
    
      },
  };

export default Home;
