import React from 'react'
import NavigationBar from '../components/NavigationBar'
import VideoDisplay from '../components/VideoDisplay'
import DownloadScrilla from '../components/DownloadScrilla'
import FrequentlyAsked from '../components/FrequentlyAsked'

function HomeScreen() {
  return (
    <div className="content-area">
        <NavigationBar />
        <VideoDisplay />
        <DownloadScrilla />
        <FrequentlyAsked />
    </div>
  )
}

export default HomeScreen