import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectSelect.css';

function ProjectSelect() {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
    <div className='project'>
        <h1> {project.name}</h1>
        <img src={project.image} alt='project example'/>
        <p>
            {project.summary}
            <b>Technologies:</b> {project.technologies}
        </p>
        <a href={project.link} target='_blank' style={{cursor: 'pointer'}} rel='noreferrer'>
            <button>Source Code</button>
        </a>
    </div>
  )
}

export default ProjectSelect