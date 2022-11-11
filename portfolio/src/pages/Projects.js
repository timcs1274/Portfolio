import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { projectList } from '../helpers/ProjectList';
import '../styles/Projects.css'


function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {projectList.map(() => {
          return <ProjectItem name ={projectList.name} image={projectList.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects