import React from "react";
import { Link } from "react-router-dom";
import "../Accountant/Accountant.css";
function CreateAccountant() {
  return (
    <>
      {/*..............Rest of the code...........*/}
      <div className="createAcc-container">
        <p className="backtoAcc">
          <Link to="/Accountant">Back</Link>
        </p>
        <h5>Enter the details of the Accountant</h5>
        <center>
          <div className="row">
            <form action="" className="accountantForm">
              <div className="createAcc-details-container">
               <div>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder="Enter Name" className="create-AccName" />
               </div>
               <div>
                <label htmlFor="">Address :</label>
                <input type="text" className="create-AccAddress" />
               </div>
               <div>
                <label htmlFor="">Gender :</label>
                <input type="text" className="create-AccGender" />
               </div>
               <div>
                <label htmlFor="">Email :</label>
                <input type="Email" placeholder="Enter Email" className="create-AccEmail"/>
               </div>
               <div>
                <label htmlFor="">Contacts :</label>
                <input type="number" className="create-AccContact"/>
               </div>
               <div>
                <button className="createAcc">Create</button>
               </div>
              </div>
            </form>
          </div>
        </center>
      </div>
    </>
  );
}

export default CreateAccountant;
