// import React, { useState } from "react";
// import { HiMenu } from "react-icons/hi";
// import { FaSearch } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa";

// import { FaRegArrowAltCircleDown } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex  bg-gray-200">
//       <div
//         className={`${
//           isOpen ? "block" : "hidden"
//         } bg-gray-900 text-white w-56 min-h-screen p-4`}
//       >
//         <ul>
//           <li className="py-2">Dashboard</li>
//           <li className="py-2">KYR Chat</li>
//           <li className="py-2">Comaplain Assistant</li>
//           <li className="py-2">Legal Check</li>
//           <li className="py-2">Blogs and Articles</li>
//           <li className="py-2">FAQ</li>
//         </ul>
//       </div>
//       <div className="flex flex-col flex-1 overflow-hidden">
//         <div className="flex justify-between items-center bg-gray-800 p-4">
//           <button onClick={toggleSidebar}>
//             <HiMenu className="text-white w-6 h-6" />
//           </button>
//           <div>
//             <h1 className="text-white text-2xl">Hi Mayank</h1>
//             <p className=" text-white">What would you like to know?</p>
//           </div>
//         </div>

//         <div className="mainCard">
//           <h4 className=" text-2xl font-semibold">Get Started</h4>

//           <div className="dbuttons">
//             <div className="dropdown top-5">
//               <button onclick="myFunction()" class="dropbtn">
//                 Chat-Bot Language
//               </button>
//             </div>
//             <br></br>
//             <div className="dropdown top-4">
//               <button onclick="myFunction()" class="dropbtn">
//                 Explore Legal Check
//               </button>
//             </div>
//             <br></br>
//             <div className="dropdown top-3">
//               <button onclick="myFunction()" class="dropbtn">
//                 Assistance
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="textM">
//           <p>Tell me what's on your mind</p>
//         </div>

//         <div className="cards">
//           <div className="card1 top-3 h-10">
//             <div className="logos">
//               <FaSearch />
//               <FaRegStar />
//             </div>
//             <div className="head">
//               <h4 className=" font-semibold text-lg py-3">Research Law </h4>
//               <p>
//                 Ask questions about laws in a country or jurisdiction and
//                 receive summary report{" "}
//               </p>
//             </div>
//           </div>

//           <div className="card1 top-3">
//             <div className="logos">
//               <FaSearch />
//               <FaRegStar />
//             </div>
//             <div className="head">
//               <h4 className="font-semibold text-lg py-3">Case Law Finder </h4>
//               <p>
//                 Locate legal precedents that align with the presented factual
//                 scenario and correspondingly demonstrate their applicability in
//                 similar contexts. facts{" "}
//               </p>
//             </div>
//           </div>

//           <div className="card1 top-3 h-10 pb-4 bottom-4">
//             <div className="logos">
//               <FaSearch />
//               <FaRegStar />
//             </div>
//             <div className="head">
//               <h4 className="font-semibold text-lg py-3">
//                 Legal Brief Drafting{" "}
//               </h4>
//               <p>
//               Draft a killer legal brief with issue, facts and reasoning .
//               </p>
//             </div>
//           </div>
//         </div>
//         <main className="flex-1 overflow-y-auto p-4">
//           {/* Your main content goes here */}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
