import React from 'react'
import { useParams } from "react-router-dom";
import Bar from '../components/Bar';
import Conversation from '../components/Conversation';

const Chat = () => {
  
  const { username } = useParams();

  return (
    <div className=' w-full min-h-screen flex flex-col gap-8' >
        <div className=' flex items-center justify-center'>
              <p className=' text-2xl font-bold p-8' > Lets chat with {username}</p>
        </div>

        <div className='border border-white ml-44 mr-44' >
          <Bar username={username}/>
          <Conversation/>
          
        </div>

    </div>
  )
}

export default Chat