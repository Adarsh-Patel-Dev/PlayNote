import React from "react";
import "./landingpage.css";
import HeroImg from "../../Assets/heroImage.svg"
import { NavLink } from "react-router-dom"

function LandingPage() {
  const encodedToken = localStorage.getItem("token")
  return (
    <div>
      <div className="main-container">
        <div className="main-container-details">
          <p className="main-container-heading"><span className="orange">Create,</span> Oraganise Your Notes with <span className="easy-text">PlayNote</span></p>

          <div className="cta-btns ">
          
         <NavLink to ="/home">
        { encodedToken ?
           <button className="main-container-btn">Get Started</button>
           : ""
           }
         </NavLink>  
         <NavLink to="/login">
          <button className="main-container-btn border">Login</button>
         </NavLink>
         </div>

        </div>
        <div className="main-container-img">
        <img src={HeroImg} />
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
