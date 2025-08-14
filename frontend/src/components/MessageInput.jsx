import React from 'react'
import { IoIosSend } from "react-icons/io";

const MessageInput = () => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full pr-10 px-4" 
      />
      <button
        className=" cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-200 hover:text-white"
      >
        <IoIosSend />
      </button>
    </div>
  );
};

export default MessageInput;
