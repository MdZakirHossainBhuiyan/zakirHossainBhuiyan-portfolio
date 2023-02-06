import React from 'react';
import './Home.css';
import profile from '../../Images/Image.jpg';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

// icon
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';

const steps = [
    'Software Engineer', 4000,
    'MERN Developer', 4000,
  ];

const Home = () => {
    const [showAvailableText, setShowAvailableText] = useState(false);

    const handleMouseOver = () => {
        showAvailableText?setShowAvailableText(false):setShowAvailableText(true);
    }

    return (
        <main className="homeMain">
            <SideBar />
            <section className="homeSection">
                <div className="homeImg">
                    <img src={profile} alt="" />
                </div>
                <div className="homeContent">
                    <h2><span>Hi, I am</span><br />Md Zakir Hossain Bhuiyan</h2>

                    <Typical wrapper="span" steps={steps} loop={Infinity} className={'expertiseTitle'} />
                    
                    <p>I'm about to graduate in computer science and Engineering, and with this, I have completed a six-month course on web development.</p>

                    <Link to="/contact" style={{ textDecoration: 'none' }}><button onMouseOver={handleMouseOver}>Hire Me <span><AssignmentTurnedInOutlinedIcon /></span> </button></Link>

                </div>
            </section>
        </main>
    );
};

export default Home;