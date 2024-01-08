import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ComplainForm = () => {
 const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [complaintType, setComplaintType] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch('https://formcarry.com/s/-r17nW7rFSl', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message, complaintType })
    })
    .then(response => response.json())
    .then(response => {
      if (response.code === 200) {
        alert('We received your submission, thank you!');
      } else if (response.code === 422) {
        
        setError(response.message);
      } else {
       
        setError(response.message);
      }
    })
    .catch(error => {
     
      setError(error.message ? error.message : error);
    });
  }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 pt-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Complain Form
          </p>
          <p className="py-6">Submit the form below to File Complaint</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Full Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <select
          name="options"
          value={complaintType}
          onChange={(e) => setComplaintType(e.target.value)} 
          className="mt-2 mb-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
        >
          <option value="" className='text-white'>Select complaint type</option>
          <option value="Enquiry" className='text-black'>Enquiry</option>
          <option value="Complaint" className='text-black'>Complaint</option>
          <option value="Suggestion" className='text-black'>Suggestion</option>
          <option value="Compliment" className='text-black'>Compliment</option>
        </select>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              rows="2"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Submit
            </button>
              {error && <p className="text-red-500">{error}</p>} 
          </form>
        </div>
        <footer className="mt-auto text-center text-gray-400 text-sm">
          <p>Developed by Mayank Johari</p>
          <a href="mailto:mayankjohari877@gmail.com" className="flex items-center justify-center text-white text-sm mt-2">
            <FaEnvelope className="mr-2" />
            Connect via Email
          </a>
        </footer>
      </div>
    </div>
  );
}

export default ComplainForm;
