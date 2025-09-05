import React from 'react'
import tempBanner from './../assets/video-banner.png';
import sideImage from './../assets/side-scroll.png';

function VideoDisplay() {
  return (
    <div className="section-area">
        <div className="container">
            <img src={tempBanner} className="img-banner" />
            <div className="access-background enlarge-2 mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="nav-left-part">
                            <h2>How it works</h2>
                            <ul>
                                <li>Download the Scrilla App and nominate your bank account.</li>
                                <li>Shop Cash-Back items at participating stores.</li>
                                <li>Scan your receipt or QR at check-out to verify your purchase.</li>
                                <li><strong>Wefetch</strong> your cash-back and deposit it straight into your bank account.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={sideImage} className="side-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoDisplay