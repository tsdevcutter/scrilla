import React from 'react'

function LatestFind() {
  return (
    <div id="how-it-works" className="section-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="part-video">
                <video autoPlay
                    loop
                    muted
                    playsInline
                    className="video-banner">
                    <source src="https://scrillarewards.co.za/assets/videos/Scrilla_Hero_Image.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="col-md-8">
              <div className="view-section">
                <h2 className="title-pt">How it works</h2>
                <h2 className="boost2 colorblack">How do I get money<br/> back from purchase </h2>
                <div className="questions">
                   <ol className="dash-part boost5">
                    <li><div className="list-item-hm">Download the Scrilla App.</div></li>
                    <li><div className="list-item-hm">Shop Cash-Back items at participating pharmacies.</div></li>
                    <li><div className="list-item-hm">Scan your receipt or QR.</div></li>
                    <li><div className="list-item-hm">We fetch your cash-back into your bank.</div></li>
                   </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LatestFind