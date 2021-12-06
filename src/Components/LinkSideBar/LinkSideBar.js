import React from 'react';
import { Link } from 'react-router-dom';
import './LinkSideBar.css';

const LinkSideBar = () => {
    return (
        <section className="linkSideBar-section">
            <div className="linkSideBar-link">
                <Link to="/">Home</Link>
            </div>
            <div className="linkSideBar-link">
                <Link to="/about">About Me</Link>
            </div>
            <div className="linkSideBar-link">
                <Link to="/skills">Skills</Link>
            </div>
            <div className="linkSideBar-link">
                <Link to="/projects">Projects</Link>
            </div>
            <div className="linkSideBar-link">
                <Link to="/academic">Academic History</Link>
            </div>
            <div className="linkSideBar-link">
                <Link to="/blogs">Blogs</Link>
            </div>
            {/* <div className="linkSideBar-link">
                <Link to="/training-extra-activities">Training/Extra Activities</Link>
            </div> */}
            <div className="linkSideBar-link">
                <Link to="/contact">Contact</Link>
            </div>
        </section>
    );
};

export default LinkSideBar;