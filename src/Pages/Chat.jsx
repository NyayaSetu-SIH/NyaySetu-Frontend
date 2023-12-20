import React, { useState,useEffect } from 'react';
import useClipboard from "react-use-clipboard";
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import tts from 'tts-js';
const Chat = ({ user }) => {
  const [userInput, setUserInput] = useState('');
   const [userOut, setUserOut] = useState('');
  const [queryPairs, setQueryPairs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [querySent, setQuerySent] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Can you explain legal liability?", type: 'user' },
    { id: 2, text: "How does intellectual property work?", type: 'user' },
    { id: 3, text: "What are the steps to file a patent?", type: 'user' },
  ]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
    console.log('here');
  };

  const handleDivClick = (query) => {
    setUserInput(query);
  };

  const handleNewChat = () => {
    setQuerySent(false);
    setQueryPairs([]);
  }
   const handleSpeak = () => {
    // console.log(userInp);
    // tts.speak({ text: userOut });
    window.responsiveVoice.speak(userOut);
    //  const utterance = new SpeechSynthesisUtterance(userInp);
    //  console.log(utterance);
    //  speechSynthesis.speak(utterance.text);
  };

  const handleSend = async () => {
      let content = userInput.trim();

    if ((voiceText && voiceText.trim() !== '') || (transcript && transcript.trim() !== '')) {
      content = (voiceText || transcript).trim();
    }
    if (content === '') {
      return;
    }

    try {
      setLoading(true); 

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.REACT_APP_OPEN_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": content},
          ],
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Update state with the generated text
        setQueryPairs((prevPairs) => [
          ...prevPairs,
          { query: userInput, generatedText: result.choices[0].message.content }
        ]);
        // window.responsiveVoice.speak(result.choices[0].message.content);
      setUserOut(result.choices[0].message.content)
      } else {
        // Handle error response
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      setLoading(false); 
    }

    // Add user's query to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { id: prevHistory.length + 1, text: userInput, type: 'user' },
    ]);

    // Clear user input
    setUserInput('');
    setQuerySent(true);
  };

  const renderDiv = (query, index) => (
    <div
      key={index}
      className={`px-4 py-4 rounded-lg my-2 text-xs cursor-pointer ${
        userInput === query ? 'bg-blue-300 text-black' : 'bg-blue-200 text-blue-900'
      }`}
      onClick={() => handleDivClick(query)}
    >
      {query}
    </div>
  );

  const renderQueryPair = (pair, index) => (
    <div key={index} className="flex flex-col gap-2 overflow-y-auto">
      <div className='flex gap-3 p-2'>
        <div className="rounded-full bg-purple-600 text-white py-1 px-2.5">
          {user?.name ? user.name.charAt(0).toUpperCase() : 'C'}
        </div>
        <div className="flex-1 text-white mx-2">
          {pair.query}
        </div>
      </div>

      <div className='flex gap-3 bg-blue-200 text-black rounded-xl px-4 py-3 shadow-xl relative mb-4'>
        <div className="rounded-full bg-green-600 text-white m-auto px-2 py-1 absolute top-4 left-2">
          AI
        </div>
        <div className="flex-1 text-black px-4">
          {pair.generatedText}
        </div>
      </div>
    </div>
  );
  const [isMicOpen,SetisMicOpen] = useState('off');

  // const [isCopied, setCopied] = useClipboard(copyTxt);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-In' });
  
   const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  const [voiceText,setVoiceText] = useState('');
   useEffect(() => {
    if (transcript) {
      setVoiceText(transcript);
      // You can perform any other operations with transcriptText here
    }
  }, [transcript]);
 

  const stopSpeak = () =>{
    
     console.log(voiceText);
  }

  return (
    <div className="flex h-screen bg-blue-700 text-white">
      {/* Left Section - Chat History */}
      <div className="w-1/4 p-4 overflow-y-auto bg-blue-300 rounded-lg m-3 shadow-2xl">
        <div className="text-lg font-bold mb-6 text-black ">NyaySetu Chat</div>
        {chatHistory.map((message) => (
          <div
            key={message.id}
            className={`bg-white text-black px-2 py-2 rounded-lg my-2 text-xs ${
              message.type === 'bot' ? 'text-blue-300' : ''
            }`}
          >
            {message.text}
          </div>
        ))}
        <div className="flex items-center bg-blue-600 rounded-lg shadow-xl cursor-pointer" onClick={handleNewChat}>
          <div className="mx-auto my-2 text-white">+</div>
        </div>
      </div>

      {/* Right Section - User Input and Chat Interface */}
      <div className="w-3/4 p-4 flex flex-col flex-grow justify-between">
        <div className="flex flex-col gap-2 overflow-y-auto flex-grow">
            {querySent === false ? (
            <div className="flex flex-col items-center justify-center">
                <div className="text-lg font-bold mb-4">Welcome to NyaySetu Chat</div>
                <div className="grid grid-cols-2 gap-2">
                {renderDiv("Know your rights as an Indian citizen.", 0)}
                {renderDiv("Can I refuse a search of my vehicle or belongings?", 1)}
                {renderDiv("What are my rights if I'm stopped by the police?", 2)}
                {renderDiv("My rights in case of legal issues.", 3)}
                </div>
            </div>
            ) : (
            <div>
                {queryPairs.map((pair, index) => renderQueryPair(pair, index))}
            </div>
            )}
        </div>

        <div className="flex items-center gap-2">
        <div>
           <button onClick={startListening}>Click me</button>
           <button onClick={stopListening}>To stop</button>
        </div>
            <input
            type="text"
            value={voiceText || transcript}
            onChange={handleInputChange}
            className="flex-1 p-2 bg-blue-800 text-white rounded-lg"
            placeholder="Type your query..."
            />
            <button onClick={handleSend} className="py-2 px-4 bg-blue-600 rounded-lg">
              {loading ? 'Generating...' : 'Send'}
            </button>
            <button onClick={() => handleSpeak()}>Speak the ans</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
