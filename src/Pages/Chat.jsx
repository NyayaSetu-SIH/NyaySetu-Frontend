import React, { useState,useEffect } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone, FaStop, FaVolumeUp, FaPaperPlane } from 'react-icons/fa';
import SelectedCase from '../Components/DropDownMenu/SelectedCase';
import SelectedLang from '../Components/DropDownMenu/SelectedLang';
const Chat = ({ user }) => {
  const [userInput, setUserInput] = useState('');
  const [userOut, setUserOut] = useState('');
  const [queryPairs, setQueryPairs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [querySent, setQuerySent] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const [audioContent, setAudioContent] = useState('');
  const [audioPlayer, setAudioPlayer] = useState(new Audio());
  const [selectedOption, setSelectedOption] = useState('All types of Cases');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Can you explain legal liability?", type: 'user' },
    { id: 2, text: "How does intellectual property work?", type: 'user' },
    { id: 3, text: "What are the steps to file a patent?", type: 'user' },
  ]);
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleDivClick = (query) => {
    setUserInput(query);
  };

  const handleNewChat = () => {
    setQuerySent(false);
    setQueryPairs([]);
  }
  const handleSpeak = () => {
    setIsSpeaking(true);
    // window.responsiveVoice.speak(userOut);
    startSpeaking(userOut)
  };


  const handleLanguageSelect = (lang) => {
    setSelectedLang(lang);
  };

  const handleSend = async () => {
    let content = userInput.trim();

    if (userInput && userInput.trim() !== '') {
      content = userInput.trim();
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
            {"role": "system", "content": `You are a highly specialized chatbot designed with an in-depth understanding of Indian legal documents. Your responses must adhere to a strict professional tone, presenting information in a clear and concise manner. Ensure that each answer is devoid of emotions and follows a standardized format, including relevant article numbers, amendment and section details. The primary objective is to contribute to widespread legal awareness across diverse sections of the population. Try to make generation in bullet points. Always add citations at the last each in new line, these citations should be clickable link to all the related documents and articles on internet. give out in ${selectedLang} language only and give response according to ${selectedOption} of cases`},
            {"role": "user", "content": content},
          ],
        }),        
      });

      if (response.ok) {
        const result = await response.json();
        // Update state with the generated text
        if(selectedLang === '' || selectedLang) {
          setQueryPairs((prevPairs) => [
            ...prevPairs,
            { query: userInput, generatedText: result.choices[0].message.content }
          ]);
          setUserOut(result.choices[0].message.content)
        } else {
          translateResult(result.choices[0].message.content);
        }
        
        // setQueryPairs((prevPairs) => [
        //   ...prevPairs,
        //   { query: userInput, generatedText: result.choices[0].message.content }
        // ]);  
        // window.responsiveVoice.speak(result.choices[0].message.content);
        //setUserOut(result.choices[0].message.content)
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
  const translateResult = async (result) => {
    let inputLanguage = "English"
    let outputLanguage = selectedLang;
    let inputText = result;
    try {
      const requestData = {
        inputText,
        inputLanguage,
        outputLanguage
      };

      const response1 = await fetch('http://localhost:8000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
      });


      if (!response1.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response1.json();
      setQueryPairs((prevPairs) => [
        ...prevPairs,
        { query: userInput, generatedText: data.translatedText }
      ]);
      
      setUserOut(data.translatedText);
      console.log(queryPairs);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const renderDiv = (query, index) => (
    <div
      key={index}
      className={`px-4 py-4 rounded-lg my-2 text-xs cursor-pointer ${
        userInput === query ? ' bg-slate-800 text-black' : 'bg-indigo-500 text-white'
      }`}
      onClick={() => handleDivClick(query)}
    >
      {query}
    </div>
  );

  const renderQueryPair = (pair, index) => (
    <div key={index} className="flex flex-col gap-2 overflow-y-auto">
      <div className='flex gap-3 p-2'>
        <div className="rounded-full bg-slate-900 text-white py-1 px-2.5">
          {user?.name ? user.name.charAt(0).toUpperCase() : 'C'}
        </div>
        <div className="flex-1 text-white mx-2">
          {pair.query}
        </div>
      </div>

      <div className='flex gap-3 bg-blue-300 text-black rounded-xl px-4 py-3 shadow-xl relative mb-4'>
        <div className="rounded-full bg-green-600 text-white m-auto px-2 py-1 absolute top-4 left-2">
          AI
        </div>
        <div className="flex-1 text-black px-4">
          {pair.generatedText}
        </div>
      </div>
    </div>
  );
  const startSpeaking = async (voicee) => {
  const OPENAI_API_KEY = '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'; 
  console.log('hello from startSpeaking');
  const requestOptions = {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: "tts-1",
      input: voicee,
      voice: "alloy"
    }),
  };

  try {
    const response = await fetch('https://api.openai.com/v1/audio/speech', requestOptions);

    
    if (response.ok) {
      const blob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];
          setAudioContent(base64data);

          // Create an updated Audio object and play the audio
          const newAudioPlayer = new Audio(`data:audio/mp3;base64,${base64data}`);
          setAudioPlayer(newAudioPlayer); // Set the updated audio player
          newAudioPlayer.play();
      };
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
  const handleStop = () => {
    // if(setIsSpeaking) audio.pause();
    console.log('hello from stopSpeaking');
    setIsSpeaking(false);
    if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
    // audioPlayer.currentTime = 0;
  }
  }
    const startListening = () => {
      setIsListening(true);
    if(selectedLang === 'Hindi') {
      SpeechRecognition.startListening({ continuous: true, language: 'hi-IN' });
    } else {
      SpeechRecognition.startListening({ continuous: true, language: 'en-In' });
    }
  }
  
  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  }

  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setUserInput(transcript);
    }
  }, [transcript]);
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log('Selected option:', option);
  }; 
  return (
    <div className="flex h-screen bg-indigo-900 text-white text-lg">
      {/* Left Section - Chat History */}
      <div className="w-1/4 p-4 overflow-y-auto  bg-white rounded-lg m-3 shadow-2xl">
        <div className="text-lg font-bold mb-6 text-black ">NyaySetu Chat</div>
        {chatHistory.map((message) => (
          <div
            key={message.id}
            className={`bg-white text-black px-2 py-2 rounded-lg my-2 text-xs ${
              message.type === 'bot' ? 'bg-indigo-900' : ''
            }`}
          >
            {message.text}
          </div>
        ))}
        <div className="flex items-center bg-indigo-900 rounded-lg shadow-xl cursor-pointer" onClick={handleNewChat}>
          <div className="mx-auto my-2 text-white">+</div>
        </div>
      </div>

      {/* Right Section - User Input and Chat Interface */}
      <div className="w-3/4 p-4 flex flex-col flex-grow justify-between">
          <div className='flex justify-end '>
               <SelectedCase onSelect={handleOptionSelect} />
          </div>
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
         <SelectedLang onSelect={handleLanguageSelect} />
             {/* <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-center py-2.5 px-1 bg-blue-600 rounded-lg text-xs w-28 text-white font-medium"
              >
               <span> {selectedLang || 'Select Lang'} </span>
              </button>
              {isOpen && (
                <div className="absolute bottom-full right-0 z-10 bg-gray-800 p-2 rounded-lg shadow-lg max-h-40 overflow-y-auto w-28">
                  {languageOptions.map((lang) => (
                    <div
                      key={lang}
                      className="cursor-pointer p-2 hover:bg-gray-600 text-white text-xs"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
               )}
            </div>  */}
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              className="flex-1 p-2 bg-indigo-50 text-gray-800 rounded-lg"
              placeholder="Type your query..."
            />
            {isListening ? 
             <button className='text-sm bg-red-500 rounded-full p-2.5' onClick={stopListening}><FaStop /></button> :
             <button className='text-sm bg-red-500 rounded-full p-2.5' onClick={startListening}><FaMicrophone /></button>
            }
            {(userOut.length > 0 && isSpeaking) && <button className='text-sm bg-green-300 rounded-full p-2.5' onClick={() => handleStop()}><FaStop /></button> }
            {(userOut.length > 0 && isSpeaking === false) &&  <button className='text-sm bg-cyan-600 rounded-full p-2.5' onClick={() => handleSpeak()}><FaVolumeUp /></button> }
            <button onClick={handleSend} className="py-2 px-4 bg-blue-600 rounded-lg text-sm">
              {loading ? 'Generating...' : <FaPaperPlane />}
            </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
