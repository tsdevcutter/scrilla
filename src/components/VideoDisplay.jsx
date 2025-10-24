import React, { useState } from 'react'

function VideoDisplay() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="section-area">
        <div className="container">
       
            {/* 1. Conditionally Render the Spinner */}
              {!videoLoaded && (
                <div className="loading-spinner">
                  <div className="loader"></div>
                </div>
              )
            }

              {/* 2. Conditionally Render the Video (and hide it until loaded) */}
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="video-banner img-banner"
                // Add the event listener
                onCanPlayThrough={handleVideoLoad} 
                // Hide video until loaded to prevent a flickering blank box 
                // (You'll likely use CSS classes to handle the actual visual hiding/showing)
                style={{ display: videoLoaded ? 'block' : 'none' }}
              >
                <source src="https://scrillarewards.co.za/assets/videos/scrilla-hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
        </div>
    </div>
  )
}

export default VideoDisplay