import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'

const Conversation = () => {
  return (
    <div className=' flex flex-col'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <MessageInput/>
    </div>
  )
}

export default Conversation