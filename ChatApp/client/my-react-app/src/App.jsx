import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import LogIn from './LogIn'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/login' element={<LogIn />} />
        <Route
          path="/users"
          element={<PrivateRoute><Users /></PrivateRoute>}
        />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
