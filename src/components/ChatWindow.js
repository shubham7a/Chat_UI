import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import ChatHeader from "./ChatHeader";

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { msg: "hello", sender: "me", type: "text" },
    { msg: "hi", sender: "you", type: "text" },
    { msg: "Check this out!", sender: "me", type: "text" },
    { msg: "https://example.com", sender: "you", type: "link" },
    { msg: "😂", sender: "me", type: "emoji" },
    { msg: "How are you?", sender: "you", type: "text" },
    { msg: "Here's a picture", sender: "me", type: "text" },
    { msg: "Let's meet tomorrow", sender: "me", type: "text" },
    { msg: "Sure, what time?", sender: "you", type: "text" },
    { msg: "8 PM works?", sender: "me", type: "text" },
    { msg: "Perfect!", sender: "you", type: "text" },
    { msg: "🔥🔥🔥", sender: "me", type: "emoji" },
    { msg: "Can't wait!", sender: "you", type: "text" },
    { msg: "See you then!", sender: "me", type: "text" },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const onEmojiClick = (emojiObject) => {
    setNewMessage((prev) => prev + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="w-full flex flex-col h-screen">
      <ChatHeader />
      <div className="flex-grow p-4 overflow-y-auto bg-gray-100 h-[calc(100vh-120px)]">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded shadow ${
              message.sender === "me"
                ? "ml-auto bg-green-400 text-white"
                : "mr-auto bg-white text-black"
            }`}
            style={{ width: "fit-content" }}
          >
            {message.type === "text" && message.msg}
            {message.type === "link" && (
              <a
                href={message.msg}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {message.msg}
              </a>
            )}
            {message.type === "emoji" && message.msg}
          </div>
        ))}
      </div>

      <div className="p-4 bg-gray-200 flex items-center space-x-2 sm:space-x-4">
        <input
          type="text"
          placeholder="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none sm:w-3/4 lg:w-4/5"
        />
        <button
          onClick={() => setShowEmojiPicker((prev) => !prev)}
          className="bg-gray-300 p-2 rounded sm:w-10 lg:w-12"
        >
          😊
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded sm:px-6 lg:px-8">
          Send
        </button>
      </div>

      {showEmojiPicker && (
        <div className="absolute bottom-20 right-4 sm:right-10">
          <EmojiPicker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
