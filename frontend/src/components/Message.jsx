import React from 'react';

const Message = ({ answer, myQuestion, fullName }) => {
  return (
    <div
      className={`flex items-end my-4 mx-2 ${
        myQuestion ? 'justify-end' : 'justify-start'
      }`}
    >
      
      {!myQuestion && (
        <img
          src={`/${fullName}.png`}
          alt={fullName}
          className="h-8 w-8 rounded-full mr-2"
        />
      )}

      <div
        className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${
          myQuestion
            ? 'bg-blue-300 text-white rounded-br-none'
            : 'bg-gray-300 text-black rounded-bl-none'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Message;
