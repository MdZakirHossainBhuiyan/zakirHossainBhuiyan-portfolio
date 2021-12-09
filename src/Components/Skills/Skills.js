import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Skills.css';

const Skills = () => {
    return (
        <main className="skills-main">
            <div className="sideBar-skills-component">
                <SideBar />
            </div>
            <section className="skills-section">
                <h1>Skills <span>what I know</span></h1>
                <div></div>
            </section>
        </main>
    );
};

export default Skills;