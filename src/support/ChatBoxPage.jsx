import React, { useState } from 'react';
import './Support.css';

const ChatBoxPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSend = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h2>Customer Support Chat</h2>
      </div>
      <div className="chatbox-messages">
        {messages.map((message, index) => (
          <div key={index} className="chatbox-message">
            {message}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleMessageSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBoxPage;