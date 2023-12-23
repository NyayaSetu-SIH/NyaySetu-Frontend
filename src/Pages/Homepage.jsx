import React from 'react'
import Navbar from '../Components/Sidebar';
import Faq from './faq';
import Chat from './Chat';
import ComplaintAss from './complaintAss';
import Sidebar from '../Components/Sidebar'
import './homepage.css'
import VoiceAss from '../Components/voice-assisstant/voice';
import { Dashboard } from '../Components/dashboard';
const Homepage = (userDetails) => {
  const user = userDetails.user;
  const logout = () =>{
    window.open(
      `${process.env.REACT_APP_BACKEND_URL}/auth/logout`,
      "_self"
    )
  }
  return (
    <div >
       <Dashboard user={user}/>
    </div>
  )
}

export default Homepage