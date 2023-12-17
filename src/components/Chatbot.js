// src/components/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Access the API key from environment variables
  
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
              'Authorization': `Bearer ${apiKey}`, // Use the API key from environment variables
            },
          }
        );
  
        const botReply = response.data.choices[0].message;
        setMessages([...messages, { role: 'bot', content: botReply }]);
      } catch (error) {
        console.error('Error sending message to ChatGPT:', error);
      }
    };
  
    return (
        <div>
        <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: '10px', textAlign: msg.role === 'user' ? 'right' : 'left' }}>
              <strong>{msg.role === 'user' ? 'You: ' : 'Chatbot: '}</strong>{msg.content}
            </div>
          ))}
        </div>
        <div>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  };
  
  export default Chatbot;
  