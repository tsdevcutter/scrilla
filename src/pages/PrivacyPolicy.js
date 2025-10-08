import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'

function PrivacyPolicy() {
  return (
    <div className="content-area">
            <NavigationBar />
            <header className="main-header">
              <h1>Privacy Policy of <strong>Scrilla</strong></h1>

              <p>Welcome to the privacy policy of Scrilla. This policy will help you understand what data we collect, why we collect it, and what your rights are in relation to it.</p>
              <p className="main-header__meta">
                Latest update: September 15, 2025
              </p>
            </header>
            <Footer />
        </div>
  )
}

export default PrivacyPolicy