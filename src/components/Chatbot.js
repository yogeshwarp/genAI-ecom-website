// src/components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

import './Chatbot.css'; // Import the CSS file for styling

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [showChat, setShowChat] = useState(false);

  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

  const sendMessage = async () => {
    setMessages([...messages, { role: 'user', content: input }]);
    setInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          messages: messages.map((msg) => ({ role: msg.role, content: msg.content })),
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

  return (
    <div className={`chat-container ${showChat ? 'expanded' : ''}`}>
      {showChat && (
        <div className="chat-content">
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
      <div className={`chat-icon ${showChat ? 'hidden' : ''}`} onClick={handleChatIconClick}>
        { 'Chat' } {/* Display 'Chat' if user is authenticated, otherwise, 'Login' */}
      </div>
    </div>
  );
};

export default Chatbot;
