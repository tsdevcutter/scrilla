import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import mainLogo from './../assets/scrilla-logo.png';
import { FaBars } from 'react-icons/fa';
function NavigationBar() {
    const [dropMenu, setDroppedMenu]                    = useState(true);

    useEffect(() => {
        // Define the breakpoint value
        const breakpoint = 768;

        // Function to check the screen width and update the state
        const checkWidth = () => {
        // window.innerWidth gives the current width in pixels
        if (window.innerWidth <= breakpoint) {
            // If 768px or less, set dropMenu to false
            setDroppedMenu(false);
        } else {
            // If greater than 768px, set dropMenu to true
            setDroppedMenu(true);
        }
        };

        // 1. Initial check when the component mounts
        checkWidth();
        // 2. Add an event listener to re-run the check whenever the window is resized
        window.addEventListener('resize', checkWidth);
        // 3. Cleanup function: This is crucial for performance.
        // It removes the event listener when the component unmounts or before the effect runs again.
        return () => {
        window.removeEventListener('resize', checkWidth);
        };
  }, []);

  return (
   <div className="nav-row">
        <div
            className="container">
            <div className="d-flex space-bet">
                <div className="logo-box">
                <img src={mainLogo} className="top-logo" />
                </div>  
                <div className="navigation-figure">
                    <button className="mobil-menu-show"
                        onClick={() => setDroppedMenu(!dropMenu)}>
                        <FaBars />
                    </button>
                    <ul className={"navigate-area show" + dropMenu}>
                        {/* <li><a href="/#latest-finds" className="nav-tp-item">Our Founders</a></li> */}
                        <li><a href="/#store-finder" className="nav-tp-item">Store Finder</a></li>
                        <li><a href="/#contact-support" className="nav-tp-item">Contact Support</a></li>
                        <li><a href={'/#download'} className="nav-bt btn-position">Download</a></li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
  )
}

export default NavigationBar