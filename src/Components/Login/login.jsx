import React from 'react'
import { Link } from 'react-router-dom'

import './Style/login.css'
import logo from './Assets/logo.png'
import login_img from './Assets/login-img.svg'
import gLogo from './Assets/google-logo.png'
const login = () => {
 
  const googleAuth = () =>{
    window.open(
      'http://localhost:8000/auth/google',
      "_self"
    );
  }

  return (
        <div className='container-fluid main-div'>
        <div style={{color:'#244065' , marginBottom:'30px'}}>hello</div>
          <div className='primary-div'>
              <div className='logo-header'>
                 <img src={logo} alt='logo' style={{width:'280px' ,height:'80px'}}/>
              </div>
              <div className='contianer secondary-div'>
                 <div className='row d-flex justify-content-center flex-row'>
                   <div className='col col-7 '>
                     <img src={login_img} alt='court-img' />
                   </div>
                   
                   <div className='col col-5 d-flex justify-content-center flex-column'>
                   <div className='d-flex justify-content-center'>
                      <div className='d-flex justify-content-center secondary-div-content'>
                      {/* <Link > */}
                        <div className='d-flex justify-content-center secondary-div-text'
                          onClick={googleAuth}
                        >
                          {/* <img src={gLogo} alt='glogo' style={{ width: '40px', height: '40px' , marginTop:'auto' , marginBottom:'auto'}}/> */}
                          <p className=''>Continue with Gmail</p>
                        </div>
                      {/* </Link> */}
                      </div>
                      </div>

                      <div className='secondary-div-or'>OR</div>
                      <div className='d-flex justify-content-center'>
                      <div className='d-flex justify-content-center flex-col secondary-div-content'>
                         <div className='sec-div-text'>
                            <Link to="/signup">Continue with Email</Link>
                         </div>
                      </div>
                      </div>

                      <div className='sec-text'>
                        <p> We'll send a unique login link to your email to ensure a hassle-free sign-in without compromising security.</p>
                      </div>
                   </div>    
                 </div>
              </div>
              <p className='d-flex justify-content-center p-4'>By continuing, you agree to our terms and acknowledge reading our terms & conditions.</p>
          </div>
        </div>
  )
  
}
export default login