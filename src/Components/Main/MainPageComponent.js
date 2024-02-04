// MainPageComponent.js
import React from 'react';
import Header from './headermain';
import Slider from './slider';
import FollowBanner from './banner';
import VideoComponent from './video';


function MainPageComponent() {
  return (
    <div style={styles.mainPage}>
      <Header />
      <div style={styles.sliderContainer}>
        <Slider />
      </div>
      <FollowBanner />
      <VideoComponent  />
      {/* <FollowBanner />
      <VideoPlayer />  */}
    </div>
  );
}

const styles = {
    mainPage: {
      width: '50%', // Utilisation de 100% pour la largeur pour le rendre réactif
      
      maxWidth: '1000px', // Ajoute une largeur maximale pour éviter une trop grande largeur sur les grands écrans
      margin: '0 auto', // Centre le contenu horizontalement
      padding: '20px', // Ajoute un peu d'espace autour du contenu
      zIndex: 3,
    },
    sliderContainer: {
      height: 'auto', // Hauteur automatique pour s'adapter au contenu
      width: '100%', // 100% de largeur
      overflow: 'hidden',
    }
  };

export default MainPageComponent;
