import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Skills.css';
import { faCode, faPaintBrush, faDatabase, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProgrammingSkills from './ProgrammingSkills';
import ToolsSkills from './ToolsSkills';
import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';

const Skills = () => {
    return (
        <main className="skills-main">
            <div className="sideBar-skills-component">
                <SideBar />
            </div>
            <section className="skills-section">
                <h1>Skills <span className='skills-title'>what I know</span></h1>
                <div className="skills-container">
                    <div className="skills-area">
                        <h5><span><FontAwesomeIcon icon={faCode} /></span> Programming Language</h5>
                        <ProgrammingSkills />
                    </div>
                    <div className="skills-area g">
                        <h5><span><FontAwesomeIcon icon={faPaintBrush} /></span> Frontend Technology</h5>
                        <FrontendSkills />
                    </div>
                    <div className="skills-area b">
                        <h5><span><FontAwesomeIcon icon={faDatabase} /></span> Backend Technology</h5>
                        <BackendSkills />
                    </div>
                    <div className="skills-area m">
                        <h5><span><FontAwesomeIcon icon={faTools} /></span> Tools</h5>
                        <ToolsSkills />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Skills;