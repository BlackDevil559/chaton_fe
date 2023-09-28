import React, { useState } from "react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const addMessage = (text, isUser = false) => {
    const newMessage = { text, isUser };
    setMessages([...messages, newMessage]);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      addMessage(input, true);
      // You can handle bot responses here and add them to messages
      setInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? "user" : "bot"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={handleInput}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
