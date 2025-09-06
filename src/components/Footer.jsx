import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logoFoot from '../assets/logo-box.png';

function Footer() {
  return (
    <div className="section-area">
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <div className="foot-logo-box">
                        <img src={logoFoot} className="img-logo" />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-socials-box">
                         <ul className="social-work">
                            <li><Link to="#"><FaFacebookF /></Link> </li>
                            <li><Link to="#"><FaLinkedinIn /></Link> </li>
                            <li><Link to="#"><FaYoutube /></Link> </li>
                            <li><Link to="#"><FaInstagram /></Link> </li>
                         </ul>
                         <div className="copy-content">
                            Copyright Scrilla Rewards {new Date().getFullYear()}
                         </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="foot-navi-menu-box">
                        <ul className="menu-foot">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms and Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer