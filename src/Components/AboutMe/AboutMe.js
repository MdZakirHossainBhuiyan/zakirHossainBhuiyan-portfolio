import React from 'react';
import SideBar from '../SideBar/SideBar';
import './AboutMe.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDownload, faKey } from '@fortawesome/free-solid-svg-icons';

// material icon
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import DownloadForOfflineOutlinedIcon from '@mui/icons-material/DownloadForOfflineOutlined';

const AboutMe = () => {
    return (
        <main className="aboutMeMain">
            <SideBar />
            <section className="aboutSection">
                <div className="aboutHeader">
                    <h1>About Me <span>I am a Full-Stack Web developer</span></h1><hr />
                </div>
                <div className="aboutContent">
                    <div className="personalInfo">
                        <div className='divTitle'>
                            <h5>Personal info</h5> <hr />
                        </div>
                        <div className='nameDiv'>
                            <div className='nameIcon'>
                                <BadgeOutlinedIcon />
                            </div>
                            <div className='name'>
                                <h1>Md. Zakir Hossain Bhuiyan</h1>
                            </div>
                        </div>
                        <div className='contactDiv'>
                            <div className='contactContent divMargin'>
                                <div className='nameIcon'>
                                    <LocationOnOutlinedIcon />
                                </div>
                                <div className='name'>
                                    <h6>Banasree, Dhaka-1219</h6>
                                </div>
                            </div>
                            <div className='contactContent'>
                                <div className='nameIcon'>
                                    <AddIcCallOutlinedIcon />
                                </div>
                                <div className='name'>
                                    <h6>+880 1675-026895</h6>
                                </div>
                            </div>
                        </div>
                        <div className='nameDiv'>
                            <div className='nameIcon'>
                                <AlternateEmailOutlinedIcon />
                            </div>
                            <div className='name'>
                                <h6>zakirhossaintuhin@gmail.com</h6>
                            </div>
                        </div>
                        <div className='contactDiv'>
                            <div className='topDiv divMargin'>
                                <h6><hr /> Skill </h6>
                                <p>MERN Developer</p>
                            </div>
                            <div className='topDiv'>
                                <h6><hr /> Experience </h6>
                                <p>Fresher</p>
                            </div>
                        </div>
                        <div className='contactDiv'>
                            <div className='bottomDiv divMargin'>
                                <h6><hr /> Age </h6>
                                <p>25 years</p>
                            </div>
                            <div className='bottomDiv responsiveMargin'>
                                <h6><hr /> Freelance </h6>
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                    <div className="careerObjective">
                        <div className='divTitle'>
                            <h5>Professional Goal</h5> <hr />
                        </div>
                        <p>To work as a software engineer in your progressive organization that allows me the scope to update my knowledge to the latest trends and be part of a diverse and dynamic team that adds to both my personal and professional growth.</p>

                        <div className='keyPoint'>
                            <div className='keyPointItem'>
                                <div className='keyPointIcon'>
                                    <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                </div>
                                <div className='keyPointText'>
                                    <span>Knowledge of the full-stack</span>
                                </div>
                            </div>
                            <div className='keyPointItem'>
                                <div className='keyPointIcon'>
                                    <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                </div>
                                <div className='keyPointText'>
                                    <span>Ability to learn, adapt and grow</span>
                                </div>
                            </div>
                            <div className='keyPointItem'>
                                <div className='keyPointIcon'>
                                    <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                </div>
                                <div className='keyPointText'>
                                    <span>Time management</span>
                                </div>
                            </div>
                            <div className='keyPointItem'>
                                <div className='keyPointIcon'>
                                    <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                </div>
                                <div className='keyPointText'>
                                    <span>Interpersonal skills</span>
                                </div>
                            </div>
                        </div>

                        
                        <button className='downloadButton'>
                            <a href="https://drive.google.com/file/d/1FJYKRIxPMeWGeMD60KtM0x3N7aEbEbyQ/view" target="_blank">
                                Download CV
                                <span className="downloadIcon">
                                    <DownloadForOfflineOutlinedIcon style={{"fontSize": "30px"}} />
                                </span>
                            </a>
                        </button>
                        
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AboutMe;