import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Chat from './pages/Chat'

const App = () => {
  return (
      <Routes>

         <Route path='/' element={<Home/>} />
     <Route path="/chat/:fullName" element={<Chat />} /> 
     </Routes>
  )
}

export default App