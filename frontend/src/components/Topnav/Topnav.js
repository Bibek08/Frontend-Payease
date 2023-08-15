import React from "react";
import admin from "../images/admin.png";
import "./Topnav.css";
function Topnav() {
  return (
    <>
      <div className="top-nav">
        Good <span>Morning</span>
      </div>
      <div className="container-nav">
        <div className="row">
          <div className="profiletoptext col-md-3">{/* <p>Profile</p> */}</div>
          <div className="col-md-4">
            {" "}
            <input
              type="text"
              placeholder="Search Here"
              className="searchbox"
            />
          </div>
          <div className="col-md-4">
            <div className="imgrole">
              <div className="profileimg">
                <img
                  src={admin}
                  alt="admin"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
              <div>
                <h6>Bhuwan Darai</h6>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topnav;
