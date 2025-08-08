import React from 'react'
import logohead from "../images/header_logo.png"
import './Navbar2.css'
import menu from "../images/menologo.png"
import india from "../images/india logo.png"

function Navbar2() {
  return (
    <div className='bodynav2'>
      <div className="n2ctn1">
        <img src={logohead} alt="" />
      </div>
      <div className="n2ctn">
        <div className="inner-n21">
          <div className='india'><img src={india} alt="" /></div>
          <div>
            <span className='span1'><b> SolarSystemScop.DE</b></span>
            <p>5-in-1 Bundle</p>
          </div>
        </div>
        <div className="inner-n22">DOWNLOAD APP</div>
        <div className="inner-n23">EXPLORE <img src={menu} alt="" /></div>
      </div>
    </div>
  )
}

export default Navbar2


