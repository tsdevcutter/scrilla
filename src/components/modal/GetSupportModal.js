import axios from 'axios';
import React, { useState } from 'react'

function GetSupportModal({showSupport, setShowSupport}) {

    const [loading, setLoading]                                 = useState(false);

    const [messageAlert, setMessageAlert]                       = useState("");
    const [classType, setClassType]                            = useState("");

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

    const handleSupport = async (e) => {
        e.preventDefault();

        try{
            setLoading(true);
            console.log(formSupport);
        
             const response = await axios.post("https://scrillarewards.co.za/mailing/simple_mail.php", formSupport, {
                 headers: { 
                        'Content-Type': 'application/json'
                    },
             });
             console.log(response);
             setMessageAlert("Thank you your message wass added");
             setClassType("alert alert-success");
            setLoading(false);
            setFormSupport({
                firstName: "",
                lastName: "",
                emailAddress: "",
                message: ""    
            });
        }catch(err){
            setMessageAlert("Something went wrong, please try again later.");
             setClassType("alert alert-danger");
            setLoading(false);
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
                            <div className="form-group  mb-2">
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
                            <div className="form-group  mb-2">
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
                            <div className="form-group mb-2">
                                <div className="label">
                                    Email:
                                </div>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="emailAddress" 
                                    value={formSupport.emailAddress} 
                                    onChange={handleChange} 
                                    required
                                    />
                            </div>
                            <div className="form-group mb-2">
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
                            <div className="form-group">
                                <button className="btn btn-position mt-2" disabled={loading} >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    {
                        messageAlert.length > 1 && (
                            <div className="mt-3">
                                <div className={classType}>
                                    {messageAlert}
                                </div>
                            </div>
                        )
                    }
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