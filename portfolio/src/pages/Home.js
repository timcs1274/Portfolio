import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Tim</h2>
        <div className='summary'>
          <p>I like coding</p>
        </div>
      </div>
      <div className='skills'>
        <h1>My Skills</h1>
        <ol className='skillList'>
          <li className='skillContent'>
            <h2>Front-End</h2>
            <p>React</p>
          </li>
          <li className='skillContent'>
            <h2>Back-End</h2>
            <p>Node.JS</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home