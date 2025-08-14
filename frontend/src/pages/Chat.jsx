import React from 'react';
import { useParams } from 'react-router-dom';
import Bar from '../components/Bar';
import Conversation from '../components/Conversation';
import MessageInput from '../components/MessageInput';

const Chat = () => {
  const { fullName } = useParams();

  return (
    <div className='flex flex-col h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      
      {/* Main chat container */}
      <div className='flex-grow flex flex-col items-center justify-center p-4 overflow-hidden'>
        <div className='w-full max-w-2xl h-full flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg bg-white dark:bg-gray-800'>
          
          {/* Chat Header */}
          <Bar fullName={fullName} />
          
          {/* Conversation Area */}
          <div className='flex-grow overflow-y-auto p-4'>
            <Conversation fullName={fullName} />
          </div>
          
          {/* Message Input Area */}
          <div className='p-4 border-t border-gray-200 dark:border-gray-700'>
            <MessageInput fullName={fullName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;