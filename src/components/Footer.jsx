import React, { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logoFoot from '../assets/foot-logo.png';
import appleLink from '../assets/appstore.png';
import playsLink from '../assets/play-store.png';
import TermsConditionsModal from './modal/TermsConditionsModal';
import PrivacyPolicyModal from './modal/PrivacyPolicyModal';

function Footer() {

    const [showTermsCondition, setShowTermsCondition]                                   = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy]                                     = useState(false);
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
                    <div className="foot-menu-box">
                        <h4>Cash-Back</h4>
                         <ul className="list-foot-work">
                            <li><a href="#how-it-works">How it works</a> </li>
                            <li><a href="#store-finder">Participating Pharmacies</a> </li>
                         </ul>
                         
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="foot-menu-box">
                         <h4>Join Us</h4>
                         <ul className="list-foot-work">
                            <li> </li>
                            <li> </li>
                         </ul>
                         
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="foot-navi-menu-box foot-menu-box">
                        <h4>Download the app</h4>
                        <p>Scrilla is available on Google Play and App Store</p>
                        <div className="row unrow">
                            <div className="col-md-6">
                                <Link to={"#"} target="_blank">
                                  <img src={appleLink} className="logo-download-img" />
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link to={"https://play.google.com/store/apps/details?id=com.ads.scrilla&hl=en"} target="_blank">
                                  <img src={playsLink} className="logo-download-img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">

                </div>
                <div className="col-md-10">
                    <ul className="menu-flex-low">
                        <li><Link 
                                className="bottom-copy" 
                                to={"https://www.iubenda.com/privacy-policy/31609770#additional-info-on-collection-and-processing"}
                                target="_blank">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link 
                                className="bottom-copy" 
                                to={"https://www.iubenda.com/terms-and-conditions/31609770"}>
                                Terms & Conditions
                            </Link>
                        </li>
                        <li><div className="bottom-copy">Copyright Scrilla Rewards {new Date().getFullYear()}</div></li>
                    </ul>

                    {
                        <TermsConditionsModal 
                            showTermsCondition={showTermsCondition}
                            setShowTermsCondition={setShowTermsCondition} />
                    }

                    {
                        <PrivacyPolicyModal 
                            showPrivacyPolicy={showPrivacyPolicy}
                            setShowPrivacyPolicy={setShowPrivacyPolicy}
                            />
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer