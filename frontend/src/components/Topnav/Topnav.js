// import React from "react";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import admin from "../images/admin.png";
// import "./Topnav.css";
// function Topnav() {
//   return (
//     <>
//       <div className="top-nav">
//         Good <span>Morning</span>
//       </div>
//       <div className="container-nav">
//         <div className="row">
//           <div className="profiletoptext col-md-3">{/* <p>Profile</p> */}</div>
//           <div className="col-md-4">
//             {" "}
//             <input
//               type="text"
//               placeholder="Search Here"
//               className="searchbox"
//             />
//           </div>
//           <div className="col-md-4">
//             <div className="imgrole">
//               <div className="notification-icon">
//                 <IoMdNotificationsOutline /> {/* Notification icon */}
//               </div>
//               <div className="profileimg">
//                 <img
//                   src={admin}
//                   alt="admin"
//                   style={{ width: "50px", height: "50px" }}
//                 />
//               </div>

//               <div>
//                 <h6>Bhuwan Darai</h6>
//                 <p>Admin</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Topnav;

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { useState } from "react";
import "./Topnav.css";

const Topnav = () => {
  const [showDropdown, setShowDropdown] = useState(false); // Provide an initial value

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <header>
      <Navbar id="topnav" collapseOnSelect>
        <Container>
          {/* <Navbar.Brand href="/">Statements</Navbar.Brand> */}
          <div>
            {" "}
            <input
              type="text"
              placeholder="Search Here"
              className="searchbox"
            />
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav style={{ marginLeft: "85%" }}>
              <NavDropdown
                title={<BsIcons.BsBell />}
                style={{ marginRight: "20%" }}
              >
                <NavDropdown.Item>Notification 1</NavDropdown.Item>
                <NavDropdown.Item>Notification 2</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                show={showDropdown}
                onToggle={toggleDropdown}
                title={<BsIcons.BsFillPersonFill />}
                id="dropdown-menu"
              >
                <NavDropdown.Item>
                  <Link to="/Profile" id="drpbtn">Profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/" id="drpbtn">Logout</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Topnav;
