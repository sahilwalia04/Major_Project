import React from 'react'
import './Seven.css'
import solarlab from "../images/solar_lab_art_1.png"
import lab from "../images/lab.jpg"
function Seven() {
    return (
        <div className='bodyseven'>
            <div className='cont71'>
                <div className="inner71">
                    <div>
                        <h1>Solar Lab</h1>
                         <img src={lab} alt="" />
                    </div>
                    <div>
                        <p>We've created SolarLab to share ideas and inspiration. You can vote here for the best ideas, find all news, releases, as well as things we're currently working on.</p>
                    </div>
                </div>
                <div className="inner72">
                    <img src={solarlab} alt="" />
                </div>
            </div> <br /> <br /> <br /> <br /><br /> <br />
            <div className='buttomnav'>
                <div> <b>Home</b></div>
                <div> <b>Textures</b></div>
                <div> <b>SkyDairy</b></div>
                <div> <b>SolarLab</b></div>
                <div> <b>Merchandise</b></div>
                <div> <b>Download</b></div>
            </div>
        </div>
    )
}

export default Seven