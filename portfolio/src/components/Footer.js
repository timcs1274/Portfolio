import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/Github';
import styles from '../styles/Footer.css'

function Footer() {
  return (
  <div className='footer'>
    <div>
        <LinkedInIcon />
        <GithubIcon />
    </div>
    <p> &copy; 2022 TimSasse </p>
  </div>
  );
}

export default Footer