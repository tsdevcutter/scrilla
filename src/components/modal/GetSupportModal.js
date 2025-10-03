import React, { useState } from 'react'

function GetSupportModal({showSupport, setShowSupport}) {

    const [formSupport, setFormSupport]                         = useState({
            firstName: "",
            lastName: "",
            emailAddress: "",
            message: ""    
        });
        
    if(showSupport === false) {
        return
    }

    const handleChange = (e) => {
        setFormSupport({ ...formSupport, [e.target.name]: e.target.value });
    };

    const handleSupport = async () => {
        try{

        }catch(err){
            console.log(err);
        }
    }

  return (
    <div className={showSupport ? 'modal fade show' : "modal fade " }>
        <div class="modal-dialog">
            <div class="modal-content">
                
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Support</h1>
                    <button onClick={() => setShowSupport(false)} type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div className="pd10 frm-edit">
                        <form onSubmit={handleSupport}>
                            <div className="form-group">
                                <div className="label">
                                    Name:
                                </div>
                                <input type="text"
                                    className="form-control" 
                                    name="firstName" 
                                    value={formSupport.firstName} 
                                    onChange={handleChange} 
                                    required/>
                            </div>
                            <div className="form-group">
                                <div className="label">
                                    Surname:
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="lastName" 
                                    value={formSupport.lastName} 
                                    onChange={handleChange} 
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <div className="label">
                                    Message:
                                </div>
                                <textarea 
                                    className="form-control hite2" 
                                    name="message" 
                                    value={formSupport.message} 
                                    onChange={handleChange} 
                                    required
                                    ></textarea>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary"  onClick={() => setShowSupport(false)}>Close</button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default GetSupportModal