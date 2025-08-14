import React from 'react';

const Message = ({ text, isSender }) => {
  return (
    <div
      className={`max-w-xs md:max-w-md px-4 py-4 my-6 ml-4 mr-4 rounded-lg mb-2 ${
        isSender
          ? 'bg-blue-300 text-white self-end rounded-br-none'
          :
           'bg-gray-300 text-black self-start rounded-bl-none'
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default Message;
