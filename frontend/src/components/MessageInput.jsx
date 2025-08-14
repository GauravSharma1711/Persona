import React, { useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import useMessageStore from '../store/messageStore.js';

const MessageInput = ({ fullName }) => {
  const [question, setQuestion] = useState('');
  const { getAnswer } = useMessageStore();

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    getAnswer(question, fullName);
    setQuestion('');
  };

  const isQuestionEmpty = !question.trim();

  return (
    <form onSubmit={handleMessageSubmit} className="w-full flex items-center p-2 rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md">
      <input
        type="text"
        placeholder="Type a message..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-grow bg-transparent outline-none border-none text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2"
      />
      <button
        type="submit"
        disabled={isQuestionEmpty}
        className={`ml-2 p-3 rounded-full transition-colors duration-200 ${
          isQuestionEmpty
            ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        }`}
        aria-label="Send message"
      >
        <IoIosSend className="text-xl" />
      </button>
    </form>
  );
};

export default MessageInput;