import React from 'react'
import './homepage.css'
import { Dashboard } from '../Components/dashboard';
const Homepage = (userDetails) => {
  const user = userDetails.user;
  return (
    <div >
       <Dashboard user={user}/>
    </div>
  )
}

export default Homepage