"use client";

import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import ChatBox from "../../components/ChatBox";

//const socket = io("http://localhost:3000");
//const socket = io("http://192.168.100.166:3000");
const socket = io("http://192.168.150.183:3000");



export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prev) => [...prev, { sender: "Other", text: message }]);
    });

    return () => socket.disconnect();
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      socket.emit("message", input);
      setMessages([...messages, { sender: "You", text: input }]);
      setInput("");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen p-4">
      <h2 className="text-3xl font-bold mb-4">Chat Room</h2>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <ChatBox messages={messages} />
        <div className="flex mt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
