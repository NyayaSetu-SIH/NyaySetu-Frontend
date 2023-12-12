import React from 'react'

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
       <div>{user.name}</div>
       <div>{user.email}</div>
       <div>
          <img src={user.picture} />
       </div>
       <div>
          <button onClick={logout}>LogOut</button>
       </div>
    </div>
  )
}

export default Homepage