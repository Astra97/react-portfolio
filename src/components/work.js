import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import info from '../information';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Projects</Fade></h1>
        <div className='work-content'>
                {info.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;