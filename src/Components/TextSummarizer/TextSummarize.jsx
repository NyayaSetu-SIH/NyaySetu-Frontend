import React, { useState } from 'react';
import axios from 'axios';

const TextSummarize = () => {
  const [text, setText] = useState('');
  const [minLength, setMinLength] = useState(5); 
  const [maxLength, setMaxLength] = useState(100);
  const [summary, setSummary] = useState('');
  const [fileSummary,setfileSummary] = useState('')
  const [isGenerating, setIsGenerating] = useState(false);
  const [fileGenerating,setFileGenerating] = useState(false);
  const [file, setFile] = useState(null);
  const API_KEY = 'mqUodwawpAFxPhiioYQIRWXSFmAFnvLPGItfgTZLwDHdRiafLj';
  const handleSummarize = async () => {

    try {
        setIsGenerating(true);
      const requestData = {
        language: 'auto',
        text: text,
        min_length: minLength, // Use the user-provided minimum length
        max_length: maxLength, // Use the user-provided maximum length
      };

      const response = await axios.post('http://localhost:8000/api/summarize', requestData, {
        headers: {
          'X-API-KEY': API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      setSummary(response.data.result); 
      setIsGenerating(false);// Update the state with the summary received from the backend
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error
      setIsGenerating(false);
    }
  };



  const handleFileUpload = async () => {
    setFileGenerating(true);
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:8000/api/converter', formData, {
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(response.data);
    const { name, pageCount, text } = response.data;
    const summaryData = {
      name: name,
      pageCount: pageCount,
      text: text,
    };
    setfileSummary(summaryData);
    setFileGenerating(false);
  } catch (error) {
    console.error('Error uploading and converting file:', error);
     setFileGenerating(false);
  }
};


  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
   <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '32px', textAlign: 'center', marginBottom: '20px' }}>Text Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to summarize"
        rows={10}
        style={{ width: '100%', marginBottom: '10px', padding: '10px' }}
      />
      <div className='flex justify-between'>
       <input
        type="file"
        accept=".txt, .pdf"
        onChange={handleFileChange}
        style={{ marginBottom: '10px' }}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
        onClick={handleFileUpload}
        disabled={fileGenerating} 
       >
         {fileGenerating ? 'Generating' : 'Upload and Summarize'}
      </button>
      </div>
      <label>
        Minimum Length:
        <input
          type="number"
          value={minLength}
          onChange={(e) => setMinLength(Number(e.target.value))}
          style={{ marginLeft: '5px', padding: '5px' }}
        />
      </label>
      <br />
      <label>
        Maximum Length:
        <input
          type="number"
          value={maxLength}
          onChange={(e) => setMaxLength(Number(e.target.value))}
          style={{ marginLeft: '5px', padding: '5px' }}
        />
      </label>
      <br />
       <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleSummarize}
        disabled={isGenerating} 
      >
        {isGenerating ? 'Generating...' : 'Summarize'}
      </button>
      {fileSummary && (
        <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
          <h2>File Summary:</h2>
          <p>Name: {fileSummary.name}</p>
          <p>Page Count: {fileSummary.pageCount}</p>
          <p>Text: {fileSummary.text}</p>
        </div>
      )}
      {summary && (
        <div style={{ marginTop: '20px', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '5px' }}>
          <h2>Summary:</h2>
          <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default TextSummarize;
