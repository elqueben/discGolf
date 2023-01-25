import { Link } from "react-router-dom";
import React, { useState } from 'react';


export function LogIn() {
  return (
    <div id="display">
      <div id="signin">
        <div>
          <h3>Sign In</h3>
        </div>
        <div>
          <input name="email" type="email" placeholder="E-mail" required></input>
        </div>
        <div>    
          <input name="password" type="password" placeholder="Password" required></input>            
        </div>          
          <Link to="/Home"><button type="submit" className="btn btn-primary">Login</button></Link>
      </div>
      <div id="signup">
        <div id="signupbanner">
          <i>Don't Have an Account? <h5>Sign Up!</h5></i>
        </div>
          <div>
            <input name="fname" type="fname" placeholder="First Name" required ></input>
          </div>
          <div>
            <input name="lname" type="lname" placeholder="Last Name" required ></input>
          </div>
          <div>
            <input name="email" type="email" placeholder="E-mail" required ></input>
          </div>
          <div>
            <input name="password" type="password" placeholder="Password" required></input>
          </div>
          <button className="btn btn-warning" disabled >Sign Up</button>
    </div>
  </div>
  );
}
