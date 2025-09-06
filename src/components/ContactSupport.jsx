import React from 'react'
import { Link } from 'react-router-dom'

function ContactSupport() {
  return (
    <div id="contact-support" className="section-area access-background">
        <div className="container">
            <div className="row">
                <div className="col-md-8 strong">
                    <h2 className="boost3 strong2">Contact Support </h2>
                    <p>Have trouble with your Scrilla Exprience? Reach out to us.</p>
                </div>
                <div className="col-md-4">
                    <div className="button-interaction">
                        <button className="btn-position">
                            Online Form
                        </button>
                        <Link className="btn-position-alter">
                        WhatsApp
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSupport