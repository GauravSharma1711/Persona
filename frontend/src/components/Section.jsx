import React from 'react';
import { useNavigate } from 'react-router-dom';
import useMessageStore from '../store/messageStore';
const Section = () => {
  const navigate = useNavigate();

  const {clear} = useMessageStore();

  const handleChatClick = (e, fullName) => {
    e.preventDefault();
    clear()
    navigate(`/chat/${fullName}`);
  };

  const cardData = [
    {
      fullName: 'HiteshChoudhary',
      bio: 'Renowned educator and full-stack developer with a passion for teaching modern web technologies.',
    },
    {
      fullName: 'PiyushGarg',
      bio: 'Experienced developer specializing in front-end frameworks and building scalable, user-friendly applications.',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      
      {/* Top-centered heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 tracking-wide">Your AI Chatbot</h1>
        <p className="text-xl text-gray-500 dark:text-gray-400">Conversations, Your Way</p>
      </div>

      {/* Cards container */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
        {cardData.map((person) => (
          <div
            key={person.fullName}
            className="w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center p-6">
              <img
                src={`/${person.fullName}.png`}
                alt={person.fullName}
                className="h-40 w-40 rounded-full object-cover border-4 border-blue-500 shadow-md"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">{person.fullName}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {person.bio}
              </p>
              <button
                onClick={(e) => handleChatClick(e, person.fullName)}
                className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-full shadow-md transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Chat with {person.fullName}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;