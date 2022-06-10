import React from "react";
import "./landingpage.css";
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
         <button className="main-container-btn">Join Now</button>
         </NavLink>  
          <p className="main-container-login-msg">Already Have an Account?</p>
        </div>
        <div className="main-container-img">
        <img src="https://i.pinimg.com/originals/dc/bf/01/dcbf010c2319a0820e5e70acd061f553.png" />
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
