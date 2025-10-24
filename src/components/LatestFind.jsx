import React, { useState } from 'react'

function LatestFind() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
    const handleVideoLoad = () => {
      setVideoLoaded(true);
    };
  return (
    <div id="how-it-works" className="section-area">
        <div className="container">
          <div className="row">
            <div className="col-md-8 order-md-2">
              <div className="view-section">
                <h2 className="title-pt">How do I get my Cash Back?</h2>
                <h2 className="boost2 colorblack">How do I get money<br/> back from purchase </h2>
                <div className="questions">
                   <ol className="dash-part boost5">
                    <li><div className="list-item-hm">Download the Scrilla App.</div></li>
                    <li><div className="list-item-hm">Shop Cash-Back items at participating pharmacies.</div></li>
                    <li><div className="list-item-hm">Scan your receipt.</div></li>
                    <li><div className="list-item-hm">Get Fetched! We will get your cash back into your wallet.</div></li>
                   </ol>
                </div>
              </div>
            </div>

            <div className="col-md-4 order-md-1">
              <div className="part-video outer-second-video">
                {/* 1. Conditionally Render the Spinner */}
                  {!videoLoaded && (
                    <div className="loading-spinner">
                      <div className="loader"></div>
                    </div>
                  )
                }
                <video autoPlay
                    loop
                    muted
                    playsInline
                    className="video-banner mb-second-video"
                    // Add the event listener
                    onCanPlayThrough={handleVideoLoad} 
                    // Hide video until loaded to prevent a flickering blank box 
                    // (You'll likely use CSS classes to handle the actual visual hiding/showing)
                    style={{ display: videoLoaded ? 'block' : 'none' }}
                    >
                    <source src="https://scrillarewards.co.za/assets/videos/Scrilla_Hero_Image.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default LatestFind