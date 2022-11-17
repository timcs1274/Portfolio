import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';

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
        <button>Source Code{project.link}</button>
    </div>
  )
}

export default ProjectSelect