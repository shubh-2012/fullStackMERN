import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import picture1 from '../images/picture1.jpg';
import { NavLink, useHistory} from 'react-router-dom';
import '../App.css';

const Login=()=>{
	const history=useHistory();
	const[email,setEmail] =useState('');
	const [password,setPassword]= useState('');

	const loginUser = async(e)=>{
		e.preventDefault();
		const res = await fetch('/signin',{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
				body:JSON.stringify(
					{
						email,password
					}
				)
			});

			const data= await res.json();

			if(res.status=== 400 || !data){
				window.alert("Invlaid credentials");
				console.log("Invalid credentials");
			}
			else{
				window.alert("Login Successfull");
				console.log("Login Successfull");
	
				history.push("/");
			}
	}
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
				                <div className="login-snip" > <label for="tab" className="tab">Sign Up</label>
				                    <div className="login-space">
				                        
                                    <form method="POST"className="login">
				                            <div className="group"> <label for="user" className="label">Username</label> <input id="user" type="text" className="input" value={email}
											onChange={(e) => setEmail(e.target.value)} placeholder="Enter your username"/> </div>
				                            <div className="group"> <label for="pass" className="label">Password</label> <input id="pass" type="password" className="input" data-type="password" value={password}
											onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/> </div>
				                            <div className="group"> <input id="check" type="checkbox" className="check" checked/> <label style={{color:"black"}} for="check"><span className="icon"></span> Keep me Signed in</label> </div>
				                            <div className="group"> <input type="submit" className="button" value="Sign In" onClick={loginUser} /> </div>
				                            <div className="hr"></div>
				                            <div className="foot"> <a href="#">Forgot Password?</a> </div>
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

export default Login