import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import "./navbar.css";
import logoo from "../Login/Assets/logo.jpg";

// import { useHistory } from 'react-router-dom';
const Navbar = ({ user }) => {
  // const history = useHistory();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".avatar")) {
      setIsDropdownOpen(false);
    }
  };
  const logout = () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, "_self");
  };
  const clickback = () => {};

  return (
    <div className="navbar-container">
      <div className="main-nav bg-sky-950">
        <div className="logo">
          <Link to="/">
            <img
              src={logoo}
              alt="The logo"
              className="nyaySetu-logo "
              onClick={clickback}
            />
          </Link>
        </div>
        <div>
          <div className="notification">
            <div>
              <IoIosNotificationsOutline className="notification-ico" />
            </div>

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
                  <div>Setting</div>
                  <div onClick={logout}>Logout</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
