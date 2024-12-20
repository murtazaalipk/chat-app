export default function ChatBox({ messages }) {
    return (
      <div className="h-64 overflow-y-auto border border-gray-300 rounded-lg p-2">
        {messages.length === 0 ? (
          <p className="text-gray-500 text-center">No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <p
              key={index}
              className={`mb-2 ${
                msg.sender === "You" ? "text-right text-blue-500" : "text-left"
              }`}
            >
              <span className="font-bold">{msg.sender}:</span> {msg.text}
            </p>
          ))
        )}
      </div>
    );
  }
  