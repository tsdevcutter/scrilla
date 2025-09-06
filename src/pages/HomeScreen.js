import React from 'react'
import NavigationBar from '../components/NavigationBar'
import VideoDisplay from '../components/VideoDisplay'
import LatestFind from '../components/LatestFind'
import StoreFinder from '../components/StoreFinder'
import DownloadScrilla from '../components/DownloadScrilla'
import FrequentlyAsked from '../components/FrequentlyAsked'
import ContactSupport from '../components/ContactSupport'
import Footer from '../components/Footer'

function HomeScreen() {
  return (
    <div className="content-area">
        <NavigationBar />
        <VideoDisplay />
        <LatestFind />
        <StoreFinder />
        <DownloadScrilla />
        <FrequentlyAsked />
        <ContactSupport />
        <Footer />
    </div>
  )
}

export default HomeScreen