import React from 'react'
import appleLink from './../assets/appstore.png';
import playsLink from './../assets/play-store.png';
import dogScroll from './../assets/scrilldog.png';

import { Link } from 'react-router-dom';

function DownloadScrilla() {
  return (
    <div id="download" className="section-area ">
        <div className="container access-background curver pd30 enlarge">
          
            <div className="ball-play-nav">
                <div className="row">
                    <div className="col-md-7">
                        <h2 className="title-pt">Download Scrilla</h2>
                        <h2 className="boost3 colorblack">Join Scrilla today and get Fetched.</h2>
                        <div className="app-downloading">
                            <div className="place-link-left">
                                <Link to={"#"} target="_blank">
                                  <img src={appleLink} className="logo-download-img opa" />
                                </Link>
                          </div>
                          <div className="place-link-right">
                                <Link to={"https://play.google.com/store/apps/details?id=com.ads.scrilla&hl=en"} target="_blank">
                                  <img src={playsLink} className="logo-download-img" />
                                </Link>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-5">                        
                        <div className="side-dog">
                          <img src={dogScroll} className="dog-show" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadScrilla