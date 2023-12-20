// import React, { useState, useEffect } from 'react';
// import '../styles/legalChatbot.css';

// const DecisionNode = ({ question, options, handleOptionClick }) => {
//   const isLeaf = !options;

//   return (
//     <div className="decision-node">
//       <p>{question}</p>
//       {!isLeaf && (
//         <div className="options">
//           {options.map((option, index) => (
//             <button key={index} onClick={() => handleOptionClick(option.action)}>
//               {option.label}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const LegalChatDecisionTree = () => {
//   const [currentNode, setCurrentNode] = useState(initialDecisionTree);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleOptionClick = (action) => {
//     setIsLoading(true);

//     // Simulate a 3-second delay before changing the node
//     setTimeout(() => {
//       const nextNode = action();
//       setCurrentNode(nextNode);
//       setIsLoading(false);
//     }, 2000);
//   };

//   useEffect(() => {
//     setIsLoading(false);
//   }, []);

//   return (
//     <div className="legal-chat-decision-tree">
//       <DecisionNode {...currentNode} handleOptionClick={handleOptionClick} />
//       {isLoading && <div className="loading">Loading...</div>}
//     </div>
//   );
// };

// const initialDecisionTree = {
//   question: "Which kind of loss?",
//   options: [
//     {
//       label: "Physical",
//       action: () => ({
//         question: "Which type of injury happened?",
//         options: [
//           {
//             label: "Accidental",
//             action: () => ({
//               question: "Where did the accident happen?",
//               options: [
//                 {
//                   label: "At workplace",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"suffered cut ,bruces,slips ,strains",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                           label:"workplace safety violations",
//                           action:()=>({
//                               question:"according to your choices we found out this info",
//                               options:null
//                           })
//                       },
//                         {
//                             label:"fractured a body part",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"suffered with serious respiratory issues,hearing issues,eye injury",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//                 {
//                   label: "At home",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"suffered a serious fall,cuts,bruces",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"severe electric shock,insect bites,stings",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"stress related issues",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//                 {
//                   label: "While traveling",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"Suffered food poisning",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"minor injuries",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"suffered severe accidents",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//               ],
//             }),
//           },
//           {
//             label: "Deliberate",
//             action: () => ({
//               question: "Where did the deliberate injury happen?",
//               options: [
//                 {
//                   label: "At workplace",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"criminal offense",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"Harrasment,discrimination,wage and hour issues",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"retaliation or wrongful termination",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//                 {
//                   label: "At home",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"example1",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"example2",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"example3",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//                 {
//                   label: "While traveling",
//                   action: () => ({
//                     question: "select the most matching example",
//                     options: [
//                         {
//                             label:"example1",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"example2",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         },
//                         {
//                             label:"example3",
//                             action:()=>({
//                                 question:"according to your choices we found out this info",
//                                 options:null
//                             })
//                         }
//                     ]
//                   }),
//                 },
//               ],
//             }),
//           },
//         ],
//       }),
//     },
//     {
//       label: "Financial",
//       action: () => ({
//         question: "What type of financial loss?",
//         options: [
//           {
//             label: "Business disputes",
//             action: () => ({
//                 question: "select the most matching example",
//                 options: [
//                     {
//                         label:"Breach of contract or emplyment issues",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"partnership shareholders,intellectual property disputes ",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"consumer fraud/insurance disputes",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     }
//                 ]
//               }),
//           },
//           {
//             label: "Land disputes",
//             action: () => ({
//                 question: "select the most matching example",
//                 options: [
//                     {
//                         label:"family disagreement",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"wrongful acquistion disputes",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"encroachment issues",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     }
//                 ]
//               }),
//           },
//           {
//             label: "Fraud",
//             action: () => ({
//                 question: "select the most matching example",
//                 options: [
//                     {
//                         label:"Consumer fraud",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"online fraud",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     },
//                     {
//                         label:"charity fraud or tax fraud",
//                         action:()=>({
//                             question:"according to your choices we found out this info",
//                             options:null
//                         })
//                     }
//                 ]
//               }),
//           },
//         ],
//       }),
//     },
//   ],
// };

// export default LegalChatDecisionTree;
