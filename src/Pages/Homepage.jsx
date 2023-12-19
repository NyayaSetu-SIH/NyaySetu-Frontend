import React from 'react'
import Navbar from '../Components/Navbar';
import Faq from './faq';
import Chat from './Chat';
import ComplaintAss from './complaintAss';
import Sidebar from '../Components/Login/Sidebar'

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
       {/* <div>{user.name}</div>
       <div>{user.email}</div>
       <div>
          <img src={user.picture} />
       </div>
       <div>
          <button onClick={logout}>LogOut</button>
       </div> */}
       <Navbar user={user}/>
       {/* <Faq /> */}
       {/* <Chat /> */}
       {/* <compla */}
       {/* <ComplaintAss/> */}
       <Sidebar />
    </div>
  )
}

export default Homepage