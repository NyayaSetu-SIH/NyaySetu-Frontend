import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
// import logo_nyaySetu from '../Components/Login/Assets/' 

const Sidebar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/Chat",
      name: "Chat",
      icon: <FaTh />,
    },
    {
      path: "/ComplaintAss",
      name: "Comaplain Assistant",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/Legal Check",
      name: "Legal Check",
      icon: <FaCommentAlt />,
    },
    {
      path: "/Blogs and Articles",
      name: "Blogs and Articles",
      icon: <FaShoppingBag />,
    },
    {
      path: "/faq",
      name: "Faq",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
             NyaySetu
          </h1>
          <div
            style={{ marginLeft: isOpen ? "100px" : "0px" }}
            className="bars"
          >
            <FaBars onClick={toggle} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="sidebar-childs">
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
        <div className="sidebar-username" style={{ display: isOpen ? "block" : "none" }}>Hi {user.name}</div>
        </div>
      </div>
      <main>

      </main>
    </div>
  );
};

export default Sidebar;
