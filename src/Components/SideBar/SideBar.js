import React, { useState } from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faUser, faChalkboardTeacher, faStar, faGraduationCap, faPenNib, faSkating, faEnvelope } from '@fortawesome/free-solid-svg-icons';
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
                    <Link to="/home"><button><FontAwesomeIcon icon={faHome} /></button></Link>
                    <Link to="/about"><button><FontAwesomeIcon icon={faUser} /></button></Link>
                    <Link to="/skills"><button><FontAwesomeIcon icon={faChalkboardTeacher} /></button></Link>
                    <Link to="/projects"><button><FontAwesomeIcon icon={faStar} /></button></Link>
                    <button><FontAwesomeIcon icon={faGraduationCap} /></button>
                    <button><FontAwesomeIcon icon={faPenNib} /></button>
                    {/* <button><FontAwesomeIcon icon={faSkating} /></button> */}
                    <button><FontAwesomeIcon icon={faEnvelope} /></button>

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