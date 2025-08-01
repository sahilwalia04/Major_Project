import React, { useEffect, useState, useRef } from 'react';
import './MySolarSystem.css';
import sun from '../images/plannat/sun.png';

function MySolarSystem() {
    const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const starContainerRef = useRef(null);
  const starContainerRefh = useRef(null);

  useEffect(() => {
    function createStars() {
      const container = starContainerRef.current;
      const containerh = starContainerRefh.current;

      if (container) {
        for (let i = 0; i < 100; i++) {  
          const star = document.createElement('div');
          star.className = 'star';
          star.style.width = '1px';  // Increased size to 2px
          star.style.height = '1px';  // Increased size to 2px
          star.style.top = Math.random() * 100 + '%';
          star.style.left = Math.random() * 100 + '%';
          container.appendChild(star);
        }
      }
      if (containerh) {
        for (let j = 0; j < 100; j++) {  
          const star = document.createElement('div');
          star.className = 'star';
          star.style.width = '1px'; 
          star.style.height = '1px'; 
          star.style.top = Math.random() * 100 + '%';
          star.style.left = Math.random() * 100 + '%';
          containerh.appendChild(star);
        }
      }
    }
    createStars();
  }, []);




  // Data for typing effect
  const textToType = "WELCOME TO GALAXY";
  const typingSpeed = 100; // Speed in milliseconds
  const deletingSpeed = 50; // Speed for deleting in milliseconds
  const delayBeforeDelete = 2000; // Delay before deleting

  useEffect(() => {
    const typeWriterEffect = () => {
      if (!isDeleting && charIndex < textToType.length) {
        setTypedText(textToType.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedText(textToType.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (charIndex === textToType.length) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (charIndex === 0 && isDeleting) {
        setIsDeleting(false);
      }
    };
    const timeoutId = setTimeout(typeWriterEffect, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutId);
  }, [charIndex, isDeleting]);

  return (
    <>
    <div className='bodyhead' ref={starContainerRefh} >
    <div className="typing-container">
         <p>{typedText}</p> 
        </div>
    </div>
    <div className="bodymy" ref={starContainerRef}>
        
      <div className="containermy">
        <div className="sun">
          <img src={sun} alt="sun" />
        </div>
        <div className="mercury"></div>
        <div className="venus"></div>
        <div className="earth">
          <div className="moon"></div>
        </div>
        <div className="mars"></div>
        <div className="jupiter"></div>
        <div className="saturn"></div>
        <div className="uranus"></div>
        <div className="neptune"></div>
        <div className="pluto"></div>
      </div>
    </div>
    </>
  );
}

export default MySolarSystem;
