import React, { useState } from 'react';

const Chat = ({ user }) => {
  const [userInput, setUserInput] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);
  const [generatedText, setGeneratedText] = useState('Our AI is generating...');
  const [querySent, setQuerySent] = useState(false);
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
    setSelectedQuery(null);
  }

  const handleSend = async () => {
    if (userInput.trim() === '') return;

    try {
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
              {"role": "user", "content": userInput},
            ],
          }),
        });
  
        if (response.ok) {
          const result = await response.json();
          // Update state with the generated text
          setGeneratedText(result.choices[0].message.content);
        } else {
          // Handle error response
          console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }

    // Add user's query to chat history
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { id: prevHistory.length + 1, text: userInput, type: 'user' },
    ]);

    // Clear user input and selected query
    setUserInput('');
    setSelectedQuery(userInput);
    setQuerySent(true);
  };

  const renderDiv = (query) => (
    <div
      key={query}
      className={`px-4 py-4 rounded-lg my-2 text-xs cursor-pointer ${
        userInput === query ? 'bg-blue-300 text-black' : 'bg-blue-200 text-blue-900'
      }`}
      onClick={() => handleDivClick(query)}
    >
      {query}
    </div>
  );

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
        {querySent === false ? (
            <div className="flex flex-col items-center justify-center overflow-y-auto">
                <div className="text-lg font-bold mb-4">Welcome to NyaySetu Chat</div>
                <div className="grid grid-cols-2 gap-2">
                    {renderDiv("Know your rights as an Indian citizen.")}
                    {renderDiv("Can I refuse a search of my vehicle or belongings?")}
                    {renderDiv("What are my rights if I'm stopped by the police?")}
                    {renderDiv("My rights in case of legal issues.")}
                </div>
            </div>
        ) : (
            <div className="flex flex-col gap-2 overflow-y-auto">
                <div className='flex gap-3 p-2'>
                    <div className="rounded-full bg-purple-600 text-white py-1 px-2.5">
                      {user?.name ? user.name.charAt(0).toUpperCase() : 'C'}
                    </div>
                    <div className="flex-1 text-white mx-2">
                        {selectedQuery}
                    </div>
                </div>
                
                <div className='flex gap-3 bg-blue-200 text-black rounded-xl px-4 py-3 shadow-xl relative mb-4'>
                    <div className="rounded-full bg-green-600 text-white m-auto px-2 py-1 absolute top-4 left-2">
                      AI
                    </div>
                    <div className="flex-1 text-black px-4">
                        {generatedText}
                    </div>
                </div>
            </div>
        )}

        <div className="flex items-center mt-2">
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            className="flex-1 p-2 bg-blue-800 text-white rounded-l"
            placeholder="Type your query..."
          />
          <button onClick={handleSend} className="p-2 bg-blue-600 rounded-r">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
