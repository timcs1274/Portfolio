import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'> 
        <div className='toggleSize'>
            <button></button>
        </div>
        <div className='links'>
            <Link to='/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/contact'> Contact </Link>
        </div>
    </div>
  )
}

export default Navbar