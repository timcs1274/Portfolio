import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'
import TocIcon from '@mui/icons-material/Toc'

function Navbar() {
  const [bigNav, setBigNav] = useState(false);

  return (
    <div className='navbar' id={bigNav ? 'open' : 'close'}> 
        <div className='toggleSize'>
            <button onClick={() => {setBigNav((prev) => !prev)}}>
              <TocIcon />
            </button>
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