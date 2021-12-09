import React from 'react';
import './Home.css';
import profile from '../../Images/img-2.jpg';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';

const steps = [
    'Software Engineer', 4000,
    'MERN Developer', 4000,
  ];

const Home = () => {
    return (
        <main className="home-main">
            <SideBar />
            <section className="home-section">
                <div class="page-wrapper">
                    <div class="circle-wrapper">
                        <div class="error circle"></div>
                        <div class="icon home-img-div">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="home-img-div">
                    <img src={profile} alt="" />
                </div> */}
                <div className="home-info-div">
                    <h1><span>Hi, I am</span><br />Md Zakir Hossain Bhuiyan</h1>
                    <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} />
                    <p>I'm about to graduate in computer science and Engineering, and with this, I have completed a six-month course on web development.</p>
                    <Link to="/contact" style={{ textDecoration: 'none' }}><button><span>Hire Me</span> <FontAwesomeIcon icon={faUser} /> </button></Link>
                </div>
            </section>

            
        </main>
    );
};

export default Home;