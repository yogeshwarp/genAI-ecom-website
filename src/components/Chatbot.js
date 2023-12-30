// src/components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

import './Chatbot.css';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessage = async () => {
    // Capture the user's input before updating the messages state
    const userMessage = { role: 'user', content: input };
    
    // Update the messages state with the user's input
    setMessages([...messages, userMessage]);
    
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'text-davinci-003', 
          messages: [...messages, userMessage], // Include the user's input in the API request
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
          },
        }
      );

      const botReply = response.data.choices[0].message;
      setMessages([...messages, { role: 'bot', content: botReply }]);
    } catch (error) {
      console.error('Error sending message to ChatGPT:', error);
    }
  };

  const handleChatIconClick = () => {
    setShowChat(!showChat);
  };

  const handleChatClose = () => {
    setShowChat(false);
  };

  return (
    <div className={`chat-container ${showChat ? 'expanded' : ''}`}>
      <div className={`chat-icon ${showChat ? 'hidden' : ''}`} onClick={handleChatIconClick}>
        Chat
      </div>
      {showChat && (
        <div className="chat-content">
          <div className="chat-close" onClick={handleChatClose}>
            &times;
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role}>
                <strong>{msg.role === 'user' ? 'You: ' : 'Chatbot: '}</strong>{msg.content}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
