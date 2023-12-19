import React ,{useState} from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import "./navbar.css";
import logoo from '../Login/Assets/logo.png'
// import { useHistory } from 'react-router-dom';
const Navbar = ({user}) => {
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
  const logout = () =>{
    window.open(
      `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
      "_self"
    )
  }
  const clickback = () =>{

  }

  return (
    <div>
      <div className="main-nav">
         <div className="logo">
           <img src={logoo} alt='The logo' className='nyaySetu-logo' onClick={clickback}/>
         </div>
        <div >
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
                <div>Settings</div>
                <div onClick={logout}>Logout</div>
              </div>
            )}
          </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Navbar