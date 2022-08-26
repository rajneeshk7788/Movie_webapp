import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import LogIn from './LogIn'
import SignIn from './SignIn'
import SingleMovie from './SingleMovie'

const AllRotuer = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/contact' element={<Contact/>} ></Route>
            <Route path='/login' element={<LogIn/>}></Route>
            <Route path='signin' element={<SignIn/>} ></Route>
            <Route path='/movie/:id' element={<SingleMovie/>} ></Route>

        </Routes>
    </div>
  )
}

export default AllRotuer