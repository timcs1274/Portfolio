import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='nav'> 
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