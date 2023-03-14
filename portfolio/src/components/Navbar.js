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
            <div className='homeLink animate animate--infinite bounce'><Link to='/Portfolio/'> Home </Link></div>
            <div className='projLink animate animate--infinite bounce'><Link to='/projects'> Projects </Link></div>
            {/* <Link to='/contact'> Contact </Link> */}
            <a className="resumeLink animate animate--infinite bounce" href='https://drive.google.com/file/d/1X-YK0frI7HKZEAEc4BBLO6wwtzTznp4D/view?usp=sharing' target='_blank' style={{cursor: 'pointer'}} rel='noreferrer'>Resume</a>
        </div>
    </div>
  )
}

export default Navbar