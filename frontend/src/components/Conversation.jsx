import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useMessageStore from '../store/messageStore.js';

const Conversation = ({fullName}) => {
  const { messages } = useMessageStore();
  const containerRef = useRef(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col h-80 overflow-y-auto"
    >
      {messages.map((element, i) => (
        <Message
          key={i}
          answer={element.answer}
          myQuestion={element.myQuestion}
          fullName={fullName}
        />
      ))}



    </div>
  );
};

export default Conversation;
