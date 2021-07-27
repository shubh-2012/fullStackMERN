import React from 'react'
import '../App.css';
const Contact=()=>{
    return (
        <>
        
            <section className="contact-section section contact_section_body" id="contact">
                <div className="container">
                    <div className="row1">
                        <div className="section-title">
                            <h2 data-heading="contact">get in touch</h2>
                        </div>
                 </div>
                <div className="row1">
                        
                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <i className="fas fa-phone"></i>
                                <span>phone</span>
                                <p>7017925938</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <i className="fas fa-envelope"></i>
                                <span>email</span>
                                <p>shubh62012@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-inner outer-shadow">
                                <i className="fas fa-envelope"></i>
                                <span>address</span>
                                <p>C/o, B.D.Singh , Aryanagar , Gadarpur, U.S.Nagar ,Uttarakhand , 263152</p>
                            </div>
                        </div>

                    </div>

                    <div className="row1">
                            <div className="contact-form">
                                <form id="form" target="_self" onsubmit="return postToGoogle();" action="">
                                    <div className="row1">
                                        <div className="w-50">
                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="nameField" name="entry.2005620554" type="text" placeholder="Name" className="input-control"/>	
                                            </div>	

                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="emailField" name="entry.1045781291" type="text" placeholder="E-mail" className="input-control"/>	
                                            </div>	

                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="mobField" name= "entry.1166974658" type="text" placeholder="Mobile" className="input-control"/>	
                                            </div>	


                                    </div>
                                        <div className="w-50">	
                                            <div className="input-group outer-shadow hover-in-shadow">
                                                <textarea id="message" name="entry.839337160" className="input-control" placeholder="message">
                                                </textarea>	
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row1">
                                        <div className="submit-btn">
                                            <button id="send" type="submit" className="btn-1 outer-shadow hover-in-shadow"> 
                                                send message
                                            </button>
                                        </div>
                                    </div>

                                </form>
                                <h3 id="success-msg" className="contact_success_msg"> Your Request has been posted</h3>
                            </div>
                        </div>
                    </div>
            </section> 
            
        </>
    )
}

export default Contact