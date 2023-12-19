import React ,{useEffect} from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'


// component import
import Login from './Components/Login/login'
import Homepage from './Pages/Homepage';
import Chat from './Pages/Chat';
import Signup from './Components/Login/signup';


const App = () => {

  const [User,setUser] = useState(null);

  const getUser = async () =>{
    
    try {
      const url = 'http://localhost:8000/auth/login/success'
      const {data} =  await axios.get(url ,{withCredentials:true});
      setUser(data.user._json)
      
    } catch (error) {
      console.log(error); 
    }
  };

  useEffect( () =>{
    getUser();
  },[])
  
  return (
    <BrowserRouter>
      <>
      <Routes >
        <Route 
          exact
          path='/'
          element={User ? <Homepage user = {User} /> : <Navigate to="/login" />}
         />
         <Route 
          exact
          path='/chat'
          element={<Chat user = {User} />}
         />
         <Route 
           exact
           path='/login'
           element = {User ? <Navigate to="/" /> : <Login />} />

          <Route 
           path='/signup'
           element={User ? <Navigate to="/" /> : <Signup />} /> 
       </Routes>
       </>
    </BrowserRouter>
  )
}

export default App
