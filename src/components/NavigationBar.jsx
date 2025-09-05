import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from './../assets/scrilla-logo.png';
function NavigationBar() {
  return (
   <div className="nav-row">
        <div
            className="container">
            <div className="d-flex space-bet">
                <div className="logo-box">
                <img src={mainLogo} className="top-logo" />
                </div>  
                <div className="navigation-figure">
                    <ul className="navigate-area">
                        <li><Link to={'#'} className="nav-tp-item">Latest Finds</Link></li>
                        <li><Link to={'#'} className="nav-tp-item">Store Finder</Link></li>
                        <li><Link to={'#'} className="nav-tp-item">Contact Support</Link></li>
                        <li><Link to={'#'} className="nav-bt btn-position">Download</Link></li>
                    </ul>
                </div>
            </div>
        </div>
   </div>
  )
}

export default NavigationBar