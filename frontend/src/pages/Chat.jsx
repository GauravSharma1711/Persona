import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Bar from '../components/Bar';
import Conversation from '../components/Conversation';
import MessageInput from '../components/MessageInput';
import { IoMdArrowRoundBack } from "react-icons/io";

const Chat = () => {
  const { fullName } = useParams();
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate(-1); 
  };

  return (
    <div className='flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <div className='p-4 flex items-center gap-4'> 
        <button 
          onClick={handleBackClick}
          className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors'
          aria-label="Go back"
        >
          <IoMdArrowRoundBack size={24} />
        </button>
        <h1 className='text-xl font-bold'>Chat with {fullName}</h1>
      </div>

    
      <div className='flex-grow flex flex-col items-center justify-center p-4 overflow-hidden'>
        <div className='w-full max-w-2xl h-full flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-gray-800'>
          
        
          <Bar fullName={fullName} />
          
        
          <div className='flex-grow overflow-y-auto p-4'>
            <Conversation fullName={fullName} />
          </div>
          
         
          <div className='p-4 border-t border-gray-200 dark:border-gray-700'>
            <MessageInput fullName={fullName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;