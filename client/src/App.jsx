import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home.jsx';
import Navbar from './components/student/Navbar.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App