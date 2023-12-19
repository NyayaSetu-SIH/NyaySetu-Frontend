import React from 'react'
import Navbar from '../Components/Sidebar';
import Faq from './faq';
import Chat from './Chat';
import ComplaintAss from './complaintAss';
import Sidebar from '../Components/Sidebar'
import './homepage.css'
import VoiceAss from '../Components/voice-assisstant/voice';

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
       {/* <Sidebar user={user}/> */}
       <VoiceAss />
    </div>
  )
}

export default Homepage