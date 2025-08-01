import React, { useState } from 'react';
import './Third.css';
import like from '../images/icons8-like-25 (1).png'
import img1 from "../images/sss3_screenshot_01_s.jpg"
import img2 from "../images/sss3_screenshot_02_s.jpg"
import img3 from "../images/sss3_screenshot_03_s.jpg"
import img4 from "../images/sss3_screenshot_04_s.jpg"

function Third() {
  const data = [
    {
      id: 1,
      qoute: "There are as many atoms in a single molecule of your DNA as there are stars in the typical galaxy. We are, each of us, a little universe.",
      like: 2671,
      writer: "Neil deGrasse Tyson"
    },
    {
      id: 2,
      qoute: "When we look up at night and view the stars, everything we see is shining because of distant nuclear fusion.",
      like: 12671,
      writer: "Carl Sagan"
    },
    {
      id: 3,
      qoute: "The universe is a pretty big place. If it's just us, seems like an awful waste of space.",
      like: 22671,
      writer: "Carl Sagan"
    },
    {
      id: 4,
      qoute: "By looking far out into space we are also looking far back into time, back toward the horizon of the universe, back toward the epoch of the Big Bang.",
      like: 2671,
      writer: "Carl Sagan"
    },
    
    {
      id: 5,
      qoute: "The lifetime of a human being is measured by decades, the lifetime of the Sun is a hundred million times longer. Compared to a star, we are like mayflies, fleeting ephemeral creatures who live out their lives in the course of a single day.",
      like: 32671,
      writer:"Carl Sagan"
    },
    {
      id: 6,
      qoute: "Across the sea of space, the stars are other suns.",
      like: 52671,
      writer:"Carl Sagan"
    },
    {
      id: 7,
      qoute: "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself.",
      like: 671,
      writer:"Carl Sagan"
    },
    {
      id: 8,
      qoute: "Exploration is in our nature. We began as wanderers, and we are wanderers still. We have lingered long enough on the shores of the cosmic ocean. We are ready at last to set sail for the stars.",
      like: 71,
      writer:"Carl Sagan"
    },
    {
      id: 9,
      qoute: "We make our world significant by the courage of our questions and the depth of our answers.",
      like: 671,
      writer:"Carl Sagan"
    },
    {
      id: 10,
      qoute: "Cosmos is a Greek word for the order of the universe. It is, in a way, the opposite of Chaos. It implies the deep interconnectedness of all things. It conveys awe for the intricate and subtle way in which the universe is put together.",
      like: 52671,
      writer:"Carl Sagan"
    },
    {
      id: 11,
      qoute: "We are stardust brought to life, then empowered by the universe to figure itself out and we have only just begun.",
      like: 52671,
      writer:"Carl Sagan"
    },
    {
      id: 12,
      qoute: "Not explaining science seems to me perverse. When you're in love, you want to tell the world.",
      like: 12671,
      writer:"Carl Sagan"
    },
    {
      id: 13,
      qoute: "The visions we offer our children shape the future.",
      like: 52671,
      writer:"Carl Sagan"
    },
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const handleNextQuote = () => {
    setCurrentQuoteIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="hrdiv"></div>
      <div className="bodythird">
        <div className="inner31">
          <p>"{data[currentQuoteIndex].qoute}"</p>
          <div>
            <div>
              <div className="like"><img src={like} alt="" /><b>{data[currentQuoteIndex].like}</b></div>
              <div className="next" onClick={handleNextQuote}><b>Next Quote</b></div>
            </div>
            <div>
              - {data[currentQuoteIndex].writer}
            </div>
          </div>
        </div>
   <br /> <br />  <br /> <br /> <br /> <br /> 
        <div className="inner32">
        <h1>Welcome space explorer!</h1>
         <p>Solar System Scope is a model of Solar System, Night sky and Outer Space in real time, with accurate positions of objects and lots of interesting facts.</p> <br /> 
         <div>
              <span className='n321'>:&#41;</span>
              <div className='n322'>We hope you will have as much fun exploring the universe with our app as do we while making it :&#41;</div>
         </div>
        </div> <br />
        <div className="inner33">
          <img src={img1} alt="" /><img src={img2} alt="" /><img src={img3} alt="" /><img src={img4} alt="" />
        </div>
      </div>
    </>
  );
}

export default Third;
