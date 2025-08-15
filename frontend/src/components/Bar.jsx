import React from 'react';
import useMessageStore from '../store/messageStore.js';
import { MdOutlineCleaningServices } from 'react-icons/md';

const Bar = ({ fullName }) => {
  const { clear } = useMessageStore();

  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 rounded-t-lg">
      <div className="flex items-center space-x-3">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
           <img
          src={`/${fullName}.png`}
          alt={fullName}
          className="h-10 w-10 rounded-full object-cover border-2 border-blue-500"
        /> 
        </div>
        </div>
      
        <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">{fullName}</span>
      </div>
      <div className="flex-none">
        <button
          onClick={clear}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:text-red-600 transition-colors duration-200"
          aria-label="Clear chat history"
        >
          <MdOutlineCleaningServices className="h-5 w-5" />
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
};

export default Bar;