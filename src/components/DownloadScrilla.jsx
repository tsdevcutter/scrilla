import React from 'react'
import appleLink from './../assets/appstore.png';
import playsLink from './../assets/play-store.png';

import { Link } from 'react-router-dom';

function DownloadScrilla() {
  return (
    <div className="section-area">
        <div className="container text-center">
            <h2 className="boost1">Download the<br/>Scrilla app today</h2>
            <h3 className="boost3"><strong>625</strong> Cash-Backs fetched 'till date.</h3>
            <div className="ball-play-nav">
                <div className="row">
                    <div className="col-md-6">
                        <div className="place-link-left">
                              <Link to={"#"}>
                                <img src={appleLink} className="logo-download-img" />
                              </Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="place-link-right">
                              <Link to={"#"}>
                                <img src={playsLink} className="logo-download-img" />
                              </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DownloadScrilla