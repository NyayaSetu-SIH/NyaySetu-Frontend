import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } bg-gray-900 text-white w-56 min-h-screen p-4`}
      >
        <ul>
          <li className="py-2"><a href="/dashr">Dashboard</a></li>
          <li className="py-2"><a href="/chat">KYR Chat</a></li>
          <li className="py-2"><a href="/ComplaintAss">Comaplain Assistant</a></li>
          <li className="py-2">Legal Check</li>
          <li className="py-2">Blogs and Articles</li>
          <li className="py-2"><a href="/faq">FAQ </a></li>
        </ul>
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex justify-between items-center bg-gray-800 p-4">
          <button onClick={toggleSidebar}>
            <HiMenu className="text-white w-6 h-6" />
          </button>
          <div>
          <h1 className="text-white text-2xl">Hi Mayank</h1>
          <p className=' text-white'>What would you like to know?</p>
          </div>

          
          
        </div>

        <div className='mainCard'>
          <h4>Get Started</h4>

          <div className="dbuttons">
          <div className="dropdown">
            <button onclick="myFunction()" class="dropbtn">
              Chat-Bot Language
            </button>
          </div>
          <br></br>
          <div className="dropdown">
            <button onclick="myFunction()" class="dropbtn">
              Explore Legal Check
            </button>
          </div>
          <br></br>
          <div className="dropdown">
            <button onclick="myFunction()" class="dropbtn">
              Assistance
            </button>
          </div>
        </div>

       

        </div>

        <div className="textM">
        <p>Tell me what's on your mind</p>
      </div>

      
        <main className="flex-1 overflow-y-auto p-4">{/* Your main content goes here */}</main>
      </div>
    </div>
  );
};

export default Navbar;
