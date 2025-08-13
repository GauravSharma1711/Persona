import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home.JSX'
import Chat from './components/Chat'

const App = () => {
  return (
      <Routes>

         <Route path='/' element={<Home/>} />
      <Route path='/chat' element={<Chat/>} />
     </Routes>
  )
}

export default App