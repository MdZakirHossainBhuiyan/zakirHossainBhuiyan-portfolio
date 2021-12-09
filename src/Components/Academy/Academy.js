import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import './Academy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faSchool, faUniversity, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import School from './School';
import Collage from './Collage';
import University from './University';
import Training from './Training';
import codeForces from "../../Images/CodeForces.jpg";
import uri from "../../Images/uri.png";
import uva from "../../Images/uva.png";
import hackerRank from "../../Images/HackerRank.png";
import stopStalk from "../../Images/stopstalk-logo.png";

const Academy = () => {
    const [school, setSchool] = useState(true);
    const [collage, setCollage] = useState(false);
    const [university, setUniversity] = useState(false);
    const [training, setTraining] = useState(false);

    const handleBlogOne = () => {
        setSchool(true);
        setCollage(false);
        setUniversity(false);
        setTraining(false);
    }

    const handleBlogTwo = () => {
        setSchool(false);
        setCollage(true);
        setUniversity(false);
        setTraining(false);
    }

    const handleBlogThree = () => {
        setSchool(false);
        setCollage(false);
        setUniversity(true);
        setTraining(false);
    }

    const handleBlogFour = () => {
        setSchool(false);
        setCollage(false);
        setUniversity(false);
        setTraining(true);
    }

    return (
        <main className="academy-main">
            <div className="sideBar-academy-component">
                <SideBar />
            </div>
            <div className="academy-container">
                <div className="academy-heading">
                    <h1>Academic History</h1>
                    <div className="academy-properties">
                        <div className="academy-titles">
                            <button onClick={handleBlogOne}><span className="academy-title-icon"><FontAwesomeIcon icon={faSchool} /></span>School</button>

                            {school && <School />}

                            <button onClick={handleBlogTwo}><span className="academy-title-icon"><FontAwesomeIcon icon={faUniversity} /></span>Collage</button>

                            {collage && <Collage />}

                            <button onClick={handleBlogThree}><span className="academy-title-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>University</button>

                            {university && <University />}
                            
                            <button onClick={handleBlogFour}><span className="academy-title-icon"><FontAwesomeIcon icon={faCheckDouble} /></span>Training & Extra Curricular Activities</button>

                            {training && <Training />}
                        </div>
                        {
                            training && 
                            <div className="programming-profile">
                                <div className="online-judges">
                                    <div className="judge-site">
                                        <img src={codeForces} alt="" />
                                        <p className="codeForce-Value"></p>
                                    </div>
                                    <div className="judge-site">
                                        <img src={uri} alt="" />
                                        <p className="uri-Value"></p>
                                    </div>
                                    <div className="judge-site">
                                        <img src={uva} alt="" />
                                        <p className="uva-Value"></p>
                                    </div>
                                    <div className="judge-site">
                                        <img src={hackerRank} alt="" />
                                        <p className="hackerRank-Value"></p>
                                    </div>
                                </div>
                                <div className="stopStalk">
                                    <img src={stopStalk} alt="" />
                                    <p className="stopStalk-Value"></p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Academy;