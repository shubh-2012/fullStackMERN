import React from 'react';
import picture2 from '../images/profile-pic1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import '../App.css';
const Home=()=>{
    return (
        <>
            <section className="home-section section " id="home">
                <div className="effect-wrap">
                    <div className="effect effect-1">
                    </div>
                    <div className="effect effect-2">
                        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                        
                    </div>
                    <div className="effect effect-3"></div>
                </div>
                <div className="container">
                    <div className="row1 full-screen align-items-center">
                        <div className="home-text">
                        <p>Hello</p>
                        <h2>I'm Shubham</h2>
                        <h1>Senior Analyst<br/>Web Development/Software Development</h1>
                        <NavLink to="About" className="link-item btn-1 outer-shadow hover-in-shadow">More About Me</NavLink>
                        </div>
                    <div className="home-img">
                        <div className="img-box inner-shadow">
                            <img src={picture2} className="outer-shadow" alt="profile-pic"/>
                        </div>
                    </div>
                </div>
                </div>	
            </section>
        </>
    )
}

export default Home