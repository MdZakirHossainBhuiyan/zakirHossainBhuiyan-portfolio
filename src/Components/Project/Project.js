import React from 'react';
import './Project.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faVideo, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Project = ({project}) => {
    return (
        <section className="project-section">
            <div className="project-properties">
                <img src={project.img} alt="" />
                <p className="project-type"><span><FontAwesomeIcon icon={faThumbtack} /></span> {project.type}</p>
                <div>
                    <h1 className="project-title">{project.title}</h1>
                    <p className="project-tools" >{project.tools}</p>
                </div>
                <div className="project-links">
                    <a href={project.demo}><button>Visit <span><FontAwesomeIcon icon={faVideo} /></span></button></a>
                    <a href={project.client}><button>Client <span><FontAwesomeIcon icon={faGithub} /></span></button></a>
                    <a href={project.server}><button>Server <span><FontAwesomeIcon icon={faGithub} /></span></button></a>
                </div>
            </div>
        </section>
    );
};

export default Project;