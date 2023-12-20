import React, { useState } from 'react';
import { MdFileUpload } from "react-icons/md";
import '../Components/Login/Style/complaintAss.css'

const ComplaintAss = () => {
  const [selectedComplaintIndex, setSelectedComplaintIndex] = useState(null);
  const [customComplaint, setCustomComplaint] = useState('');
  const complaintsData = [
    {
      title: "Unfair Trade Practice",
      description: "Details of complaint related to unfair trade practices.",
      linkUrl: "https://consumerhelpline.gov.in/user/signup.php",
      requiredDocuments: ["Document1", "Document2"],
    },
    {
      title: "Defect",
      description: "Details of the complaint related to a product defect.",
      linkUrl: "https://consumerhelpline.gov.in/user/signup.php",
      requiredDocuments: ["Product receipt", "Defect evidence"],
    },
    {
      title: "Deficiency in Service",
      description: "Details of complaint related to deficiency in services provided.",
      linkUrl: "https://consumerhelpline.gov.in/user/signup.php",
      requiredDocuments: ["Service contract", "Communication records"],
    },
    {
      title: "Theft",
      description: "Details of the complaint related to theft.",
      linkUrl: "https://www.efiling.ecourts.gov.in/",
      requiredDocuments: ["Police report", "Evidence"],
    },
    {
      title: "Murder",
      description: "Details of the complaint related to a murder case.",
      linkUrl: "https://www.efiling.ecourts.gov.in/",
      requiredDocuments: ["Legal documents", "Witness statements"],
    },
    {
      title: "Robbery",
      description: "Details of the complaint related to a robbery.",
      linkUrl: "https://www.efiling.ecourts.gov.in/",
      requiredDocuments: ["Police report", "Evidence"],
    },
    {
      title: "Sexual Harassment",
      description: "Details of the complaint related to sexual harassment.",
      linkUrl: "https://example.com/redressal/sexual-harassment",
      requiredDocuments: ["Complaint form", "Witness statements"],
    },
    {
      title: "Workplace Harassment",
      description: "Details of complaint related to workplace harassment.",
      linkUrl: "https://labour.gov.in/lodge-your-complaint",
      requiredDocuments: ["HR complaint form", "Communication records"],
    },
    {
      title: "Unpaid Salary",
      description: "Details of the complaint related to unpaid salary.",
      linkUrl: "https://labour.gov.in/lodge-your-complaint",
      requiredDocuments: ["Salary records", "Employment contract"],
    },
    // {
    //   title: "Salary Not Paid",
    //   description: "Details of the complaint related to salary not being paid.",
    //   linkUrl: "https://labour.gov.in/lodge-your-complaint",
    //   requiredDocuments: ["Salary records", "Employment contract"],
    // },
  ];

  const handleComplaintClick = (index) => {
    setSelectedComplaintIndex(index);
  };
  const handleCustomComplaintUpload = () => {
    console.log('Custom complaint uploaded:', customComplaint);
  };

  const handleCustomComplaintChange = (event) => {
    setCustomComplaint(event.target.value);
    console.log(customComplaint);
  };

  const selectedComplaint = complaintsData[selectedComplaintIndex];

  return (
    <>
    <div className='complAss_container'>
      {!selectedComplaint && complaintsData.map((complaint, index) => (
        <div className="complAss_card" key={index} onClick={() => handleComplaintClick(index)}>
          <h2>{complaint.title}</h2>
          <p>{complaint.description}</p>
        </div>
      ))}

{selectedComplaint && (
          <>
            <div className="selected-response-container pb-15">
            <div className="card selected-card">
              <h2>{selectedComplaint.title}</h2>
              <p>{selectedComplaint.description}</p>
            </div>
            <div className="response-card">
              <h2>Redressal Information</h2>
              <p>Link URL: {selectedComplaint.linkUrl}</p>
              <p>Required Documents: {selectedComplaint.requiredDocuments.join(', ')}</p>
            </div>
          </div>
          </>
        )}
      
      </div>
      <div className="text-input-container flex justify-evenly ">
        <input
          type="text"
          placeholder="Type your custom complaint here..."
          value={customComplaint}
          onChange={handleCustomComplaintChange}
        />
        {/* <MdFileUpload
            onClick={handleCustomComplaintUpload}
            style={{ cursor: 'pointer', marginLeft: '5px', color: '#333', height: '50px' }}
          /> */}
      </div>
    </>
  );
};

export default ComplaintAss;
