import React, { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./navbar.css";
import logo_img from "./Login/Assets/logo.png";

const Navbar = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".avatar")) {
      setIsDropdownOpen(false);
    }
  };

  const logout = () =>{
    window.open(
      `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
      "_self"
    )
  }
  return (
    <div>
      <nav className="main-nav">
        <div className="logo">
          <img src={logo_img} alt="The logo" />
        </div>
        <div className="notification">
          <IoIosNotificationsOutline className="notification-ico" />
          <div
            className="avatar-dropdown"
            onClick={toggleDropdown}
            onBlur={closeDropdown} // Added onBlur event to close dropdown on clicking outside
          >
            <div className="avatar">
              <img src={user.picture} alt="Avatar" />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <div className="navbar-logout">Settings</div>
                <div onClick={logout} className="navbar-logout">Logout</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
