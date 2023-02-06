import React, { useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faChalkboardTeacher, faStar, faGraduationCap, faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import proPic from '../../Images/Image.jpg';
import LinkSideBar from '../LinkSideBar/LinkSideBar';
import { Link } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';

// icon
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import HouseSidingOutlinedIcon from '@mui/icons-material/HouseSidingOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ScreenshotMonitorOutlinedIcon from '@mui/icons-material/ScreenshotMonitorOutlined';
import AssuredWorkloadOutlinedIcon from '@mui/icons-material/AssuredWorkloadOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';

const SideBar = () => {
    return (
        <section className="sidebarSection">
            <div className='profileTitle'>
                <h4>Zakir<span>portfolio.</span></h4>
            </div>
            <div className="sidebarButtonArea">
                <div className="sidebarContent">
                    <div className='topClickIcon'>
                        <PanToolAltIcon
                            style={{
                                "color": "#fff",
                                "fontSize": "18px",
                            }} />
                    </div>
                    <div className='linkContent'>
                        <Tooltip title="Home" placement="right">
                            <IconButton>
                                <Link to="/home">
                                    <HouseSidingOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="About" placement="right">
                            <IconButton>
                                <Link to="/about">
                                    <AssignmentIndOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Skills" placement="right">
                            <IconButton>
                                <Link to="/skills">
                                    <LightbulbOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Projects" placement="right">
                            <IconButton>
                                <Link to="/projects">
                                    <ScreenshotMonitorOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Academy" placement="right">
                            <IconButton>
                                <Link to="/academy">
                                    <AssuredWorkloadOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Contact" placement="right">
                            <IconButton>
                                <Link to="/contact">
                                    <ContactPhoneOutlinedIcon style={{"color": "#fff"}} />
                                </Link>
                            </IconButton>
                        </Tooltip>
                    </div>
                    
                    {/* <Link to="/home"><button><abbr title="Home"><FontAwesomeIcon icon={faHome} /></abbr></button></Link>
                    
                    <Link to="/about"><button><abbr title="About"><FontAwesomeIcon icon={faUser} /></abbr></button></Link>

                    <Link to="/skills"><button><abbr title="Skills"><FontAwesomeIcon icon={faChalkboardTeacher} /></abbr></button></Link>

                    <Link to="/projects"><button><abbr title="Projects"><FontAwesomeIcon icon={faStar} /></abbr></button></Link>

                    <Link to="/academy"><button><abbr title="Academic History"><FontAwesomeIcon icon={faGraduationCap} /></abbr></button></Link>

                    <Link to="/blogs"><button><abbr title="Blogs"><FontAwesomeIcon icon={faPenNib} /></abbr></button></Link>

                    <Link to="/contact"><button><abbr title="Contact"><FontAwesomeIcon icon={faEnvelope} /></abbr></button></Link> */}
                </div>
            </div>
        </section>
    );
};

export default SideBar;