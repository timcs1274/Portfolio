import React from 'react'
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
  <div className='footer'>
    <div className='footerIcons'>
        <Link to={{ pathname: "https://www.linkedin.com/in/timsasse/" }} target="_blank"><LinkedInIcon /></Link>
        <Link to={{ pathname: "https://github.com/timcs1274" }} target="_blank"><GitHubIcon /></Link>
    </div>
    <p> &copy; 2022 TimSasse </p>
  </div>
  );
}

export default Footer