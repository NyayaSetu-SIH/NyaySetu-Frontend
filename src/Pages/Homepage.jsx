import React from 'react'
import Navbar from '../Components/Sidebar';
import Faq from './faq';
import Chat from './Chat';
import ComplaintAss from './complaintAss';
import Sidebar from '../Components/Sidebar'
import './homepage.css'

const Homepage = (userDetails) => {
  const user = userDetails.user;
  const logout = () =>{
    window.open(
      `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
      "_self"
    )
  }
  return (
    <div>
       <Sidebar user={user}/>
       <div className='main-homepage'>
           
       </div>
    </div>
  )
}

export default Homepage