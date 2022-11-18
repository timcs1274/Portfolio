import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <h2>Tim Sasse</h2>
        <div className='summary'>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
      <div className='skills'>
        <ol className='skillsList'>
          <li className='skillContent'>
            <h2>Front-End</h2>
            <p>HTML, CSS, JavaScript, React.js, jQuery </p>
          </li>
          <li className='skillContent'>
            <h2>Back-End</h2>
            <p>Node.JS, MongoDB, Mongoose, MySQL, Express, GraphQL</p>
          </li>
          <li className='skillContent'>
            <h2>Other Skills</h2>
            <p>GraphQL, Jest, PWAs, OOP, JWT, Git, CMD, Wordpress</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home