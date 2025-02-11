import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home,CoursesList,CourseDetails,MyEnrollments,Player} from './pages/student';
import {Loading,Navbar} from "./components/student";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>
        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
      </Routes>
    </div>
  )
}

export default App