import React from "react";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-200 border-b border-gray-300">
      <div className="text-lg font-medium truncate">9935958921</div>
      <div className="flex space-x-2 md:space-x-4">
        <button className="text-gray-500 hover:text-gray-700 md:text-lg">
          🔍
        </button>
        <button className="text-gray-500 hover:text-gray-700 md:text-lg">
          📞
        </button>
        <button className="text-gray-500 hover:text-gray-700 md:text-lg">
          ⋮
        </button>
        <button className="text-gray-500 hover:text-gray-700 md:text-lg">
          👤
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
