import React from 'react';
import SideBar from '../SideBar/SideBar';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDownload, faKey } from '@fortawesome/free-solid-svg-icons';

const AboutMe = () => {
    return (
        <main className="aboutMe-main">
            <SideBar />
            <section className="aboutMe-section">
                <div className="aboutMe-header">
                    <div className="aboutMe-pageIcon">
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="aboutMe-pageTitle">
                        <h1>About Me</h1>
                    </div>
                </div>
                <div className="aboutMe-Info">
                    <div className="personal-info">
                        <h5>Personal info</h5>
                        <table>
                            <tr>
                                <td><span className="info-title">Name:</span> Md Zakir Hossain Bhuiyan</td>
                                <td><span className="info-title">Freelance:</span> Available</td>
                            </tr>
                            <tr>
                                <td><span className="info-title">Age:</span> 24 years</td>
                                <td><span className="info-title">Skills:</span> MERN Developer</td>
                            </tr>
                            <tr>
                                <td><span className="info-title">Email:</span> zakirhossaintuhin@gmail.com</td>
                                <td><span className="info-title">Experience:</span> Fresher</td>
                            </tr>
                            <tr>
                                <td><span className="info-title">Address:</span> Banasree, Dhaka-1219</td>
                                <td><span className="info-title">Language:</span> Bangla, English</td>
                            </tr>
                            <tr>
                                <td><span className="info-title">Phone:</span> +880 1675-026895</td>
                                <td><span className="info-title">Interest:</span> Traveling, Reading, Swimming</td>
                            </tr>
                        </table>
                        
                        <a href="https://drive.google.com/file/d/1kKUsluP6ya84wOoz7xGNAeASzuBJ_KI7/view?usp=sharing"><button>Download CV <span className="download-icon"><FontAwesomeIcon icon={faDownload} /></span></button></a>
                    </div>
                    <div className="career-objective">
                        <h5>Professional Goal</h5>
                        <p>To work as a software engineer in your progressive organization that allows me the scope to update my knowledge to the latest trends and be part of a diverse and dynamic team that adds to both my personal and professional growth.</p>

                        <ul type="none">
                            <li><FontAwesomeIcon icon={faKey} /><span className="key-point">Knowledge of the full-stack</span></li>
                            <li><FontAwesomeIcon icon={faKey} /><span className="key-point">Ability to learn, adapt and grow</span></li>
                            <li><FontAwesomeIcon icon={faKey} /><span className="key-point">Time management</span></li>
                            <li><FontAwesomeIcon icon={faKey} /><span className="key-point">Interpersonal skills</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMe;