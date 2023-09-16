import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  return (
    <div className="signup-container">
      <form>
        <h3>Sign Up Here</h3>
        <div className="filldetails">
          <div>
            <input
              type="text"
              placeholder="Your First Name"
              className="Fname"
            />
          </div>
          <div>
            <input type="text" placeholder="Your Last Name" className="Lname" />
          </div>
          <div>
            <input type="email" placeholder="Your Emali" className="Uemail" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="Upwd" />
          </div>
          <div>
            <input
              type="Password"
              placeholder="Confirm Password"
              className="UpwdConfirm"
            />
          </div>
          <div>
            <input type="checkbox" />
            <label htmlFor="">I agree the terms of use </label>
          </div>
        </div>
        <div className="submitbtn">
          <button>Submit</button>
        </div>
        <Link to="/Login" className="backtologin">
          Back to Login
        </Link>
      </form>
    </div>
  );
}

export default Signup;
