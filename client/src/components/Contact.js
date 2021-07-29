import React,{ useEffect,useState} from 'react'
import '../App.css';
const Contact=()=>{

    
        const [userData,setUserData]=useState({name:"",email:"",phone:"",message:""});

        const userContact =async () =>{
            try{
               const res = await fetch('/getdata',{
                   method:"GET",
                   headers:{
                       
                       "Content-Type":"application/json"
                   }
               });
   
               const data = await res.json();
               console.log(data);
               setUserData({...userData,name:data.name,email:data.email,phone:data.phone});
              

               if(!res.status=== 200){
                   const error= new Error(res.error);
                   throw error;
               }
   
            }catch(err){
               console.log(err);
            }
        }   
        
        useEffect(()=>{
            userContact();
        },[]);

        const handleInputs=(e)=>{
            const name = e.target.name;
            const value= e.target.value;

            setUserData({...userData,[name]:value});
        }

        //send data to database

        const contactForm =async (e) =>{
            e.preventDefault();
            const{name,email,phone,message}=userData;
            const res= await fetch('/contact',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name,email,phone,message
                })
            });

            const data= await res.json();

            if(!data){
                console.log("message not sent");
            }else{
                    alert("message sent");
                    setUserData({...userData,message:""});
            }
        }
        

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
                                <span>Address</span>
                                <p> Gadarpur, U.S.Nagar ,Uttarakhand , 263152</p>
                            </div>
                        </div>

                    </div>

                    <div className="row1">
                            <div className="contact-form">
                                <form method="POST" id="contact_form" >
                                    <div className="row1">
                                        <div className="w-50">
                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="nameField"  type="text" name="name" value={userData.name} onChange={handleInputs} placeholder="Name" className="input-control"/>	
                                            </div>	

                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="emailField"  type="text" name="email" value={userData.email} onChange={handleInputs} placeholder="E-mail" className="input-control"/>	
                                            </div>	

                                            <div className="input-group outer-shadow hover-in-shadow">
                                            <input id="mobField"  type="text" name="phone" value={userData.phone} onChange={handleInputs} placeholder="Mobile" className="input-control"/>	
                                            </div>	


                                    </div>
                                        <div className="w-50">	
                                            <div className="input-group outer-shadow hover-in-shadow">
                                                <textarea id="message"  className="input-control" name="message" value={userData.message}  onChange={handleInputs} placeholder="message">
                                                </textarea>	
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row1">
                                        <div className="submit-btn">
                                            <button id="send" onClick={contactForm} type="submit" className="btn-1 outer-shadow hover-in-shadow"> 
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