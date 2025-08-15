import React from 'react';

const Message = ({ answer, myQuestion, fullName, isLoadingMessage }) => {
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
        className={`max-w-xs md:max-w-md rounded-lg ${
          myQuestion
            ? 'bg-blue-300 text-white rounded-br-none'
            : 'bg-gray-300 text-black rounded-bl-none'
        }`}
      >
        {isLoadingMessage ? (
          <div className="flex justify-center items-center h-10 px-4">
            <span className="loading loading-dots text-black  loading-lg"></span>
          </div>
        ) : (
          <p className="px-8 py-3">{answer}</p>
        )}
      </div>
    </div>
  );
};

export default Message;
