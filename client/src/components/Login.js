import React from 'react'
import picture1 from '../images/picture1.jpg';
import '../App.css';
const Login=()=>{
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
				                        
                                    <div className="login">
				                            <div className="group"> <label for="user" className="label">Username</label> <input id="user" type="text" className="input" placeholder="Enter your username"/> </div>
				                            <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password"/> </div>
				                            <div className="group"> <input id="check" type="checkbox" className="check" checked/> <label style={{color:"black"}} for="check"><span className="icon"></span> Keep me Signed in</label> </div>
				                            <div className="group"> <input type="submit" className="button" value="Sign In"/> </div>
				                            <div className="hr"></div>
				                            <div className="foot"> <a href="#">Forgot Password?</a> </div>
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

export default Login