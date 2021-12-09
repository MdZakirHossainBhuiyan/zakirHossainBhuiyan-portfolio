import React, { useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faChalkboardTeacher, faStar, faGraduationCap, faPenNib, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import proPic from '../../Images/img-2.jpg';
import LinkSideBar from '../LinkSideBar/LinkSideBar';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setProfileClick] = useState(false);
    const handleProfileClick = () => setProfileClick(!profileClick);

    return (
        <section className="sidebar-section">
            <div className="sidebar-menu-btn">
                {
                    click ? <button onClick={handleClick}><FontAwesomeIcon icon={faTimes} /></button>:<button onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
                }
            </div>
            <div className="sidebar-flex">
                <div className="sidebar-slice-bar">
                    
                    <Link to="/home"><button><abbr title="Home"><FontAwesomeIcon icon={faHome} /></abbr></button></Link>
                    
                    <Link to="/about"><button><abbr title="About"><FontAwesomeIcon icon={faUser} /></abbr></button></Link>

                    <Link to="/skills"><button><abbr title="Skills"><FontAwesomeIcon icon={faChalkboardTeacher} /></abbr></button></Link>

                    <Link to="/projects"><button><abbr title="Projects"><FontAwesomeIcon icon={faStar} /></abbr></button></Link>

                    <Link to="/academy"><button><abbr title="Academic History"><FontAwesomeIcon icon={faGraduationCap} /></abbr></button></Link>

                    <Link to="/blogs"><button><abbr title="Blogs"><FontAwesomeIcon icon={faPenNib} /></abbr></button></Link>

                    <Link to="/contact"><button><abbr title="Contact"><FontAwesomeIcon icon={faEnvelope} /></abbr></button></Link>

                    <div className="sidebar-profile-img">
                        <img onClick={handleProfileClick} src={proPic} alt="" />
                    </div>
                </div>
                <div>
                   {
                       click &&  <LinkSideBar/>
                   }
                </div>
            </div>
            
        </section>
    );
};

export default SideBar;