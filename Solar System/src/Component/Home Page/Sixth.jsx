import React, { useEffect, useRef } from 'react';
import "./Sixth.css"
import img3 from '../images/img3.png'
function Sixth() {
    const starContainerRef = useRef(null);
    const starContainerRefh = useRef(null);
    useEffect(() => {
        function createStars() {
            const container = starContainerRef.current;
            const containerh = starContainerRefh.current;

            if (container) {
                for (let i = 0; i < 1000; i++) {
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
    return (
        <div className='bodysixth' ref={starContainerRefh}>
            <div className='cont510'>
<<<<<<< HEAD
                <div className="container6">
                    <div className="content6">
                        <div className="recent-releases">
                            <h2>
                                Recent Releases
                            </h2>
                            <div className="column">
                                <div>
                                    <p className="date">
=======
                <div class="container6">
                    <div class="content6">
                        <div class="recent-releases">
                            <h2>
                                Recent Releases
                            </h2>
                            <div class="column">
                                <div>
                                    <p class="date">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                                        2018 December - App Release
                                    </p>
                                    <p>
                                        Added Messier Objects Explorer
                                    </p>
                                    <p>
                                        Improved Night Sky view
                                    </p>
                                    <p>
                                        Added Milky Way Galaxy
                                    </p>
                                    <p>
                                        Added More Objects to the Search List
                                    </p>
                                    <p>
                                        Added Distance Meter
                                    </p>
                                    <p>
                                        Added More Options
                                    </p>
                                    <p>
                                        Added Fluent Movement through Cosmos
                                    </p>
                                    <p>
                                        Added Manual Search for objects
                                    </p>
<<<<<<< HEAD
                                    <p className="date">
                                        2018 June - Web Release
                                    </p>
                                    <p className="link">
=======
                                    <p class="date">
                                        2018 June - Web Release
                                    </p>
                                    <p class="link">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                                        [link] Added Astronomy Places page
                                    </p>
                                </div>
                                <div>

<<<<<<< HEAD
                                    <p className="date">
                                        2018 March - Web Release
                                    </p>
                                    <p className="link">
                                        [link] Added Paper Models page
                                    </p>
                                    <p className="link">
                                        [link] Improved Layout for SkyDiary page
                                    </p>
                                    <p className="date">
                                        2018 February - Web Release
                                    </p>
                                    <p className="link">
                                        [link] Added Spacepedia page
                                    </p>
                                    <p className="date">
                                        2018 January - Web Release
                                    </p>
                                    <p className="link">
                                        [link] Online Models page functional again
                                    </p>
                                    <p className="date">
=======
                                    <p class="date">
                                        2018 March - Web Release
                                    </p>
                                    <p class="link">
                                        [link] Added Paper Models page
                                    </p>
                                    <p class="link">
                                        [link] Improved Layout for SkyDiary page
                                    </p>
                                    <p class="date">
                                        2018 February - Web Release
                                    </p>
                                    <p class="link">
                                        [link] Added Spacepedia page
                                    </p>
                                    <p class="date">
                                        2018 January - Web Release
                                    </p>
                                    <p class="link">
                                        [link] Online Models page functional again
                                    </p>
                                    <p class="date">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                                        2017 December - App Release
                                    </p>
                                    <p>
                                        Added manual search
                                    </p>
                                    <p>
                                        Added nav menu
                                    </p>
<<<<<<< HEAD
                                    <p className="link">
=======
                                    <p class="link">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                                        [link] Find more in SolarLab
                                    </p>
                                </div>
                            </div>
                        </div>
<<<<<<< HEAD
                        <div className="latest">
=======
                        <div class="latest">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                            <h2>
                                Latest
                            </h2>
                            <img alt="Image of a galaxy and other celestial objects" src={img3} />
<<<<<<< HEAD
                            <p className="update">
=======
                            <p class="update">
>>>>>>> 4cdad99aa030d0ab8c1c919b9fcdd804d2365916
                                Major App Update!
                            </p>
                            <p className='abt'>
                                We’ve Released tons of new Features and Views, check them all out in Solar System Scope application
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br /> <br /> <br /><br /> <br />
        </div>
    )
}

export default Sixth