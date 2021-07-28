import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink, useHistory} from 'react-router-dom';
import picture1 from '../images/picture1.jpg';
import '../App.css';
const Signup = () =>{

	const history= useHistory();
	const[user,setUser]=useState({
		name:"",email:"",phone:"",work:"",password:"",cpassword:""
	});
	let name,value;
	const handleInputs = (e) => {
		console.log(e);
		name=e.target.name;
		value=e.target.value;

		setUser({...user,[name]:value});
	}

	const PostData = async (e)=>{
		e.preventDefault();

		const {name,email,phone,work,password,cpassword}= user;

		const res= await fetch("/register",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify({
				name,email,phone,work,password,cpassword
			})
		});

		const data= await res.json();
		if(res.status=== 422 || !data){
			window.alert("Invalid Registration");
			console.log("Invalid Registration");
		}
		else{
			window.alert("Successfull Registration");
			console.log("successfull registration");
			//console.log(res.status);
			history.push("/Login");
		}
	}

    return (
        <>
        
            <section id="signup">
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
				                        
				                        <form method="POST" className="sign-up-form" id="register-form">
				                            <div className="group"> <label for="user" className="label">Username</label> <input name="name" id="user" type="text" className="input"
											value={user.name}
											onChange={handleInputs}
											 placeholder="Create your Username"/> </div>
											<div className="group"> <label for="user" className="label">Email</label> <input name="email" id="user" type="text" className="input"
											value={user.email}
											onChange={handleInputs}
											 placeholder="Create your Username"/> </div>
											 <div className="group"> <label for="user" className="label">Phone</label> <input name="phone" id="user" type="text" className="input"
											value={user.phone}
											onChange={handleInputs}
											 placeholder="Create your Username"/> </div>
											<div className="group"> <label for="pass" className="label">Work</label> <input name="work" id="pass" type="text" className="input"
											value={user.work}
											onChange={handleInputs}
											 placeholder="Enter your email address"/> </div>
				                            <div className="group"> <label for="pass" className="label">Password</label> <input name="password" id="pass" type="password" className="input" data-type="password"
											value={user.password}
											onChange={handleInputs}
											 placeholder="Create your password"/> </div>
				                            <div className="group"> <label for="pass" className="label">Repeat Password</label> <input name="cpassword" id="pass" type="password" className="input" data-type="password"
											value={user.cpassword}
											onChange={handleInputs}
											 placeholder="Repeat your password"/> </div>
				                            
				                            <div className="group"> <input type="submit" name="signup" className="button" value="register"  onClick={PostData}/></div>
				                            <div className="hr"></div>
				                            <div className="foot"> <NavLink to="Login">Already Registered?</NavLink> </div>
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

export default Signup