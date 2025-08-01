import React, { useState } from 'react';
import './SolarSystem.css';
import solar from '../video/sss3_intro_720p_2-5b.mp4';
import music from "../audios/milky-way-ambient-space-music-1395.mp3"

function SolarSystem() {
  const [showIframe, setShowIframe] = useState(false);
  const [audio] = useState(new Audio(music)); 
  const handleStartClick = () => {
    setShowIframe(true);
    audio.play();
  };

  return (
    <div className="solar-container">
      {!showIframe ? (
        <div className="video-overlay">
          <video className="background-video" autoPlay loop muted>
            <source src={solar} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button 
            className="start-button" 
            onClick={handleStartClick}
            aria-label="Start Solar System Exploration"
            tabIndex="0" 
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleStartClick(); 
              }
            }}
          >
            START NOW
          </button>
        </div>
      ) : (
        <iframe
          className="solar"
          src="https://www.solarsystemscope.com/iframe"
          width="99.9%"
          height="520"
          title="Solar System Exploration"
          allowFullScreen 
        ></iframe>
      )}
    </div>
  );
}

export default SolarSystem;
