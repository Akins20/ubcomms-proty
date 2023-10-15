'use client'

import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

const RealTimeChat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Define a GraphQL query to fetch messages
  const getMessages = /* GraphQL */ `
    query GetMessages {
      listMessages {
        items {
          id
          content
          sender
          timestamp
        }
      }
    }
  `;

  // Define a GraphQL mutation to create a message
  const createMessage = /* GraphQL */ `
    mutation CreateMessage($content: String!, $sender: String!) {
      createMessage(input: { content: $content, sender: $sender }) {
        id
        content
        sender
        timestamp
      }
    }
  `;

  // Replace with your GraphQL API endpoint
  const API_NAME = 'ubcomms';

  useEffect(() => {
    // Fetch and display chat messages using the 'getMessages' query
    const fetchMessages = async () => {
      try {
        const response = await API.graphql(graphqlOperation(getMessages));
        const messageData = response.data.listMessages.items;
        setMessages(messageData);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchMessages();
  }, []);

  const sendMessage = async () => {
    try {
      // Send chat messages using the 'createMessage' mutation
      const input = { content: message, sender: 'YourUserID' };
      await API.graphql(graphqlOperation(createMessage, input));
      setMessage(''); // Clear the input field after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="container">
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className="message">
              <div className="message-sender">{msg.sender}</div>
              <div className="message-content">{msg.content}</div>
            </div>
          ))}
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeChat;
