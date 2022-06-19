import React from "react";
import "./landingpage.css";
import HeroImg from "../../Assets/heroImage.svg"
import { NavLink } from "react-router-dom"

function LandingPage() {
  return (
    <div>
      <div className="main-container">
        <div className="main-container-details">
          <h1 className="main-container-heading">PlayNote</h1>
          <div className="main-container-detail">
            <p>Meet your Modern Note Taking App</p>
          </div>
          <div className="main-container-description">
            Manage your daily tasks and workflow in a modern way and boost your
            efficiency without any efforts.
          </div>
         <NavLink to ="/home">
         <button className="main-container-btn">Get Started</button>
         </NavLink>  
         <NavLink to="/login">
          <p className="main-container-login-msg">Already Have an Account?</p>
         </NavLink>
        </div>
        <div className="main-container-img">
        <img src={HeroImg} />
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
