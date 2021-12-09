import React from 'react';
import './Training.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

const Training = () => {
    return (
        <section className="training-section">
            <h3><span><FontAwesomeIcon icon={faCheckDouble} /></span> Solved 150+ Problem on different online judges</h3>
            <h3><span><FontAwesomeIcon icon={faCheckDouble} /></span> I have completed a six-month course on web development</h3>
            <h3><span><FontAwesomeIcon icon={faCheckDouble} /></span> Worked with East West University Robotics Club for two years</h3>
            <h3><span><FontAwesomeIcon icon={faCheckDouble} /></span> Made some basic level robots like "Line Follower Robots"</h3>
        </section>
    );
};

export default Training;