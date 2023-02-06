import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Skills.css';

const Skills = () => {
    return (
        <main className="skillsMain">
            <SideBar />
            <section className="skillsSection">
                <div className="skillHeader">
                    <h1>Skills <span>what I know</span></h1><hr />
                </div>
                <div className='skillContainer'>
                    <div className='skillContent'>
                        <h6>Comfortable</h6>
                        <div className='skillItemArea'>
                            <div className='skillCard'>
                                <span>JavaScript</span>
                            </div>
                            <div className='skillCard'>
                                <span>React.js</span>
                            </div>
                            <div className='skillCard'>
                                <span>Express.js</span>
                            </div>
                            <div className='skillCard'>
                                <span>CSS3</span>
                            </div>
                            <div className='skillCard'>
                                <span>HTML5</span>
                            </div>
                            <div className='skillCard'>
                                <span>MongoDB</span>
                            </div>
                            <div className='skillCard'>
                                <span>React-Bootstrap</span>
                            </div>
                            <div className='skillCard'>
                                <span>C/C++</span>
                            </div>
                            <div className='skillCard'>
                                <span>Typescript</span>
                            </div>
                            <div className='skillCard'>
                                <span>Material UI</span>
                            </div>
                        </div>
                    </div>
                    <div className='skillContent'>
                        <h6>Familiar</h6>
                        <div className='skillItemArea'>
                            <div className='skillCard'>
                                <span>Next.js</span>
                            </div>
                            <div className='skillCard'>
                                <span>Redux</span>
                            </div>
                            <div className='skillCard'>
                                <span>SASS</span>
                            </div>
                            <div className='skillCard'>
                                <span>Tailwind CSS</span>
                            </div>
                            <div className='skillCard'>
                                <span>MySQL</span>
                            </div>
                            <div className='skillCard'>
                                <span>JEST Unit Test</span>
                            </div>
                            <div className='skillCard'>
                                <span>React-Bootstrap</span>
                            </div>
                            <div className='skillCard'>
                                <span>Python</span>
                            </div>
                            <div className='skillCard'>
                                <span>OOP</span>
                            </div>
                            <div className='skillCard'>
                                <span>Data Structure</span>
                            </div>
                        </div>
                        <div className='skillItemArea'>
                            <div className='skillCard'>
                                <span>Algorithms</span>
                            </div>
                            <div className='skillCard'>
                                <span>Firebase Authentication</span>
                            </div>
                        </div>
                    </div>
                    <div className='skillContent'>
                        <h6>Tools</h6>
                        <div className='skillItemArea'>
                            <div className='skillCard'>
                                <span>Visual Studio Code</span>
                            </div>
                            <div className='skillCard'>
                                <span>Git</span>
                            </div>
                            <div className='skillCard'>
                                <span>Brackets</span>
                            </div>
                            <div className='skillCard'>
                                <span>Code Blocks</span>
                            </div>
                            <div className='skillCard'>
                                <span>Chrome Dev Tool</span>
                            </div>
                            <div className='skillCard'>
                                <span>Netlify</span>
                            </div>
                            <div className='skillCard'>
                                <span>Heroku</span>
                            </div>
                            <div className='skillCard'>
                                <span>Figma</span>
                            </div>
                        </div>
                    </div>
                </div>





                {/* <h1>Skills <span className='skills-title'>what I know</span></h1> */}
                {/* <div className="skills-container"> */}
                    {/* <div className="skills-area">
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
                    </div> */}
                {/* </div> */}
            </section>
        </main>
    );
};

export default Skills;