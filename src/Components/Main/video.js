import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const VideoComponent = ({ videoHeight, videoWidth }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const containerStyle = {
    width: videoWidth,
    height: '200px',
    position: 'relative',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <video ref={videoRef} controls={false} style={videoStyle}>
        <source src="https://firebasestorage.googleapis.com/v0/b/fir-oc-313e3.appspot.com/o/Design%20sans%20titre.mp4?alt=media&token=375b69a9-8ccf-42da-b6cd-a2e1948c1989" />
      </video>
      {!isPlaying && (
        <div style={buttonStyle} onClick={togglePlay}>
          <FontAwesomeIcon icon={faPlayCircle} size="5x" />
        </div>
      )}
    </div>
  );
};

export default VideoComponent;