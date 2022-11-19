import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'
import TocIcon from '@mui/icons-material/Toc'

function Navbar() {
  const [bigNav, setBigNav] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setBigNav(false)
  }, [location])

  return (
    <div className='navbar' id={bigNav ? 'open' : 'close'}> 
        <div className='toggleSize'>
            <button onClick={() => {setBigNav((prev) => !prev)}}>
              <TocIcon />
            </button>
        </div>
        <div className='links'>
            <Link to='/Portfolio/'> Home </Link>
            <Link to='/projects'> Projects </Link>
            <Link to='/contact'> Contact </Link>
            <a href='https://drive.google.com/file/d/1Eq5M3yklsjk1AJoiM2YHhvmwlZrGl3HD/view?usp=sharing' target='_blank' style={{cursor: 'pointer'}} rel='noreferrer'>Resume</a>
        </div>
    </div>
  )
}

export default Navbar