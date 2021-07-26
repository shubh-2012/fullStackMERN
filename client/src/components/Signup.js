import React from 'react'
import picture1 from '../images/picture1.jpg';
import '../App.css';
const Signup = () =>{
    return (
        <>
        
            <section id="home">
  			<div className="row">
  				
  			
	  			<div className="column">
	  				<img className="home-image" src={picture1} alt="picture1" />
	  			</div>

	  			<div className="column">
	  				<div className="row">
				    <div className="col-md-6 mx-auto p-0">
				        <div className="card">
				            <div className="login-box">
				                <div className="login-snip" > <label for="tab" className="tab">Sign Up</label>
				                    <div className="login-space">
				                        
				                        <div className="sign-up-form">
				                            <div className="group"> <label for="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Create your Username"/> </div>
				                            <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password"/> </div>
				                            <div className="group"> <label for="pass" className="label">Repeat Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password"/> </div>
				                            <div className="group"> <label for="pass" className="label">Email Address</label> <input id="pass" type="text" className="input" placeholder="Enter your email address"/> </div>
				                            <div className="group"> <input type="submit" className="button" value="Sign Up"/> </div>
				                            <div className="hr"></div>
				                            <div className="foot"> <label for="tab-1">Already a Member?</label> </div>
				                        </div>
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

export default Signup