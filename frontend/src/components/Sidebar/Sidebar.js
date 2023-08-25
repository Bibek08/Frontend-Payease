import React from "react";
import "../Sidebar/Sidebar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { NavLink ,Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <AiIcons.AiFillHome />,
    },
    {
      path: "/Students",
      name: "Students",
      icon: <FaIcons.FaUserGraduate />,
    },
    {
      path: "/accountant",
      name: "Accountant",
      icon: <FaIcons.FaCommentsDollar />,
    },
    {
      path: "/feeStructure",
      name: "Fee Structure",
      icon: <AiIcons.AiOutlineTable />,
    },

    {
      path: "/notification",
      name: "Notification",
      icon: <IoIcons.IoMdNotifications />,
    },
    {
      path: "/",
      name: "Logout",
      icon: <FaIcons.FaPowerOff />,
    },
  ];

  return (
    <div className="container-sidebar">
      <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
        <div className="top_section">
       <Link to="Dashboard" className="logo-name">
       <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            PayEase
          </h1>
       </Link>
      
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {/*.....................for scrollable ...........*/}
        <div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
