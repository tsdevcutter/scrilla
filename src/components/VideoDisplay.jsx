import React from 'react'

function VideoDisplay() {
  return (
    <div className="section-area">
        <div className="container">
            <video autoPlay
                loop
                muted
                playsInline
                className="video-banner img-banner">
                <source src="https://scrillarewards.co.za/assets/videos/scrilla-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
        </div>
    </div>
  )
}

export default VideoDisplay