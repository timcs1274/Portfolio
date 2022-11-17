import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/Footer.css'

function Footer() {
  return (
  <div className='footer'>
    <div className='footerIcons'>
        <a href='https://www.linkedin.com/in/timsasse/' target='_blank' style={{cursor: 'pointer'}} rel='noreferrer'><LinkedInIcon /></a>
        <a href='https://github.com/timcs1274' target='_blank' style={{cursor: 'pointer'}} rel='noreferrer'><GitHubIcon /></a>
    </div>
    <p> &copy; 2022 TimSasse </p>
  </div>
  );
}

export default Footer