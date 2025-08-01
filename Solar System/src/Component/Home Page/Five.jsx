import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import "./Five.css"
import antro from "../images/Antro.jpg"
import img1 from "../images/imgshop1.jpg"
import img2 from "../images/imgshop2.jpg"
import img3 from "../images/imgshop3.jpg"
import img4 from "../images/imgshop4.jpg"
import img5 from "../images/imgshop5.jpg"
import img6 from "../images/imgshop6.jpg"

function Five() {
  const navigate = useNavigate();
  const naviHandle = () =>[
    navigate('/shop')
  ]
    return (
        <div className='bodyfive'>
            <div className='cont51'>
                <div className='cont511'>
                   <img src={antro} alt="" />
                </div>
                <div className='cont512'>
                  <h1>MERCHANDISE!</h1>
                  <p>We've launched new Solar System Scope: SPACE SHOP - to bring you your own SOLAR SPACE GEAR. Btw by purchasing anything from our SPACE SHOP, you greatly support development of new features for Solar System Scope app!</p> <br />
                  <div>
                    <img src={img1} alt="" /><img src={img2} alt="" /><img src={img3} alt="" /><img src={img4} alt="" /><img src={img5} alt="" /><img src={img6} alt="" />
                  </div> <br /> <br />
                  <div className='clickhere4' onClick={naviHandle}>
                    GET YOUR SOLAR GEAR HERE! 
                  </div>
                </div>
            </div>
          <br /> <br /> <br /> <br />  <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
         <div className='cont52'>
            <h1>News</h1>
            <p>We're always trying to improve and add new features both to Solar System Scope Application and Website, as well as listen to your ideas - so together we can make the best Space model ever! :&#41;</p>
         </div>
        </div>
    )
}

export default Five