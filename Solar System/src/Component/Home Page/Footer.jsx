import React from 'react';
import './Footer.css';
import facelogo from "../images/factbook.png"
import twitter from "../images/icons8-twitter-30.png"
import youtub from "../images/you.png"
import sahillogo from "../images/sahil logo.webp"
function Footer() {
    return (
        <div className="bodyfoot">
            <div className="footer">
                <div className="contact-us">
                    <h3>CONTACT US</h3>
                    <address>
                        <a href="mailto:contact@solarsystemscope.com">contact@solarsystemscope.com</a>
                    </address> <br />
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f">
                            </i>
                        </a>
                        <a  href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter ">
                            </i>
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube">
                            </i>
                        </a>
                    </div>
                </div>
                <div className="logo">
                    <img
                        alt="Solar System Scope Logo"
                        height="100"
                        src={sahillogo}
                        width="100"
                    />
                    <p>Invented and Developed by Sahil</p>
                </div>
                <div className="popular-links">
                    <h3>POPULAR SPACEPEDIA</h3>
                    <ul  className="popular-list">
                        <li>Orbital and rotational characteristics...</li>
                        <li>Handbook - The Sun</li>
                        <li>Handbook - Mars</li>
                        <li>Handbook - Jupiter</li>
                    </ul>
                </div>
            </div>

            <div className="lastfoot">
                Embed - Privacy policy - Sitemap - 2019 INOVE
            </div>
        </div>
    );
}

export default Footer;
