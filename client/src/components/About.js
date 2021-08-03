import React, { useEffect,useState} from 'react'
import picture2 from '../images/profile-pic1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink, useHistory} from 'react-router-dom';
import '../App.css';
import picture1 from '../images/picture1.jpg';

     

    const About=()=>{

        const history= useHistory();
        const [userData,setUserData]=useState({});

        const callAboutPage =async () =>{
            try{
               const res = await fetch('/About',{
                   method:"GET",
                   headers:{
                       Accept:"application/json",
                       "Content-Type":"application/json"
                   },
                   credentials: "include"
               });
   
               const data = await res.json();
               console.log(data);
               setUserData(data);
   
               if(!res.status=== 200){
                   const error= new Error(res.error);
                   throw error;
               }
   
            }catch(err){
               console.log(err);
               history.push('/Login');
            }
        }   
        
        useEffect(()=>{
            callAboutPage();
        },[]);

    return (
        <>
            <section id="login">
  			<div className="row">
  				
  			
              <div className="column">
	  				<img className="home-image" src={picture1} alt="picture1" />
	  			</div>

	  			<div className="column">
	  				<div className="row">
				    <div className="col-md-6 mx-auto p-0">
				        <div className="card">
				            <div className="login-box">
				                <div className="login-snip" > 
				                    <div className="login-space">
				                        
                                    <form method="POST" className="login">
                                            <div class="group"> <label for="barber" className="label">Barber</label> <select  id="barber" type="select" className="input"><option>Barber1 </option><option>Barber2</option><option>Barber3</option></select> </div>
				                            <div className="group"> <label for="barber fee" className="label">Barber Fee</label> <input  id="barber-fee" type="text" className="input" placeholder="Rs 300"/> </div>
				                            <div className="group"> <label for="appointment-date" className="label">Appointment Date</label> <input id="appointment-date" type="date" className="input" /> </div>
				                            <div className="group"> <label for="appointment-time" className="label">Appointment Time</label> <input id="appointment-time" type="time" className="input" /> </div>
				                            <div className="group"> <button className="dashboard_form" type="submit" className="button" value="Book Appointment">Book Appointment</button>  </div>
				                        </form>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>

  			</div>
  				
			</div> 
  		</section>
        
        </>
    )
}

export default About