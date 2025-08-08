import React from 'react'
import "./ShopFooter.css"
import comp from "../images/companies.png"
function ShopFooter() {
    return (
        <div className='SFbody'>
            <div className='sf1'>
                <div>
                    <a href="#">
                        Privacy
                    </a> <br /> <br />  
                    <a href="#">
                        Legal Info
                    </a>
                </div>
                <div>
                    <a href="#">
                        Tracking
                    </a> <br /> <br />
                    <a href="#">
                        United States
                       
                    </a>
                </div>
                <div>
                    <a href="#">
                        Copyright information
                    </a> <br /> <br />
                    <a href="#">
                        Terms &amp; Conditions
                    </a>
                </div>
                <div>
                    <a href="#">
                        Help
                    </a> <br /> <br />
                    <a href="#">
                        Shipping costs and shipping times
                    </a>
                </div>
                <div>
                    <a href="">service@spreadshirt.com</a> <br /> <br />    
                    <a href=""> +1 800 381 0815 (Mon - Fri: 8am - 7pm ET)</a>
                </div>
            </div> <br /> <br /> <br /> <br />
            <div className='sf2'>
                <img src={comp} alt="" />
            </div>
            <div className='sf3'>
                <a href=""> Open Your Free Spreadshop Now</a>
            </div>
        </div>
    )
}

export default ShopFooter
