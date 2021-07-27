import React, { useEffect} from 'react'
import picture2 from '../images/profile-pic1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory} from 'react-router-dom';
import '../App.css';

     

    const About=()=>{

        const history= useHistory();

        const callAboutPage=async () =>{
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

        <section className="about-section section" id="about">
                <div className="container">
                    <div className="row1">
                        <div className="section-title">
                            <h2 data-heading="main info">About Me</h2>
                        </div>
                    </div>
                <form method="GET" id="about_page">  
                <div className="row1">
                    <div className="about-img">
                        <div className="img-box inner-shadow">
                            <img src={picture2} className="outer-shadow" alt="profile-pic"/>
                        </div>
                        
                    </div>
                    <div className="about-info">
                            <p><span>HI!</span> 
                                <br/>Proficient in EM simulation tools like ANSYS HFSS | MATLAB |
                                <br/>Programming Languages: C|C++
                                <br/>Web Technologies: HTML,CSS,Javascript,Angular
                                <br/>Passionate and fast learner.
                                <br/>I enjoy management responsibilities too and have enjoyed my Teaching Assistant role at IIIT Gwalior.
                                <br/>Personal Side :
                                <br/>I am very much a kid at heart, love to play badminton, watch cricket, and travel whenever I'm awarded the opportunity.
                            </p>
                            
                            <a href="cv.pdf" className="btn-1 outer-shadow hover-in-shadow">Download CV</a>
                            <a href="#contact" className="link-item btn-1 outer-shadow hover-in-shadow">Hire Me</a>
                    </div>
                </div>
                </form>  
                </div>
                
                        
            </section>
        </>
    )
}

export default About