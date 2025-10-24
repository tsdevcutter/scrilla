import React from 'react'
import NavigationBar from '../components/NavigationBar'
import VideoDisplay from '../components/VideoDisplay'
import LatestFind from '../components/LatestFind'
import StoreFinder from '../components/StoreFinder'
import DownloadScrilla from '../components/DownloadScrilla'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'
import AboutArea from '../components/AboutArea'

function HomeScreen() {
  return (
    <div className="content-area">
        <NavigationBar />
        <VideoDisplay />
        <LatestFind />
        <AboutArea />
        <StoreFinder />
        <DownloadScrilla />
        <ContactSupport />
        <Footer />
    </div>
  )
}

export default HomeScreen