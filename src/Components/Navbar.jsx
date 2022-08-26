import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main-nav'>
        <div className='nav-item'>
            <Link to="/">Home</Link>
        </div>
        {/* <div className='nav-item'>
            <Link to="/contact">Contact</Link>
        </div> */}
        <div className='nav-item'>
            <Link to="/login">LogIn</Link>
        </div>
        <div className='nav-item'>
            <Link to="/signin">SignUp</Link>
        </div>
        {/* <div className='nav-item'>
            <Link to="/movie">Movie</Link>
        </div> */}
    </div>
  )
}

export default Navbar