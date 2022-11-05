import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
  <div className='footer'>
    <div className='footerIcons'>
        <LinkedInIcon />
        <GitHubIcon />
    </div>
    <p> &copy; 2022 TimSasse </p>
  </div>
  );
}

export default Footer