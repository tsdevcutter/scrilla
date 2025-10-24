import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GetSupportModal from './modal/GetSupportModal'

function ContactSupport() {
    const [showSupport, setShowSupport]                        = useState(false);

  return (
    <div id="contact-support" className="section-area access-background">
        <div className="container">
            <div className="row">
                <div className="col-md-9 strong">
                    <h2 className="boost3 strong2">Contact Support </h2>
                    <h2 className="boost3 colorblack">Need a Hand? </h2>
                    <p className="colorwhite">Give us a shout, we're waiting to help.</p>
                </div>
                <div className="col-md-3">
                    <div className="button-interaction">
                        <button
                            onClick={() => setShowSupport(true)}
                            className="btn-position">
                            Get Support
                        </button> 

                        <GetSupportModal
                            showSupport={showSupport}
                            setShowSupport={setShowSupport} />               
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSupport