import React from 'react';
import './University.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const University = () => {
    return (
        <section className="university-section">
            <h3><span><FontAwesomeIcon icon={faGraduationCap} /></span> East West University</h3>
            <h2>BSc in Computer Science and Engineering</h2>
            <ul>
                <li>Year 2016 - 2021 / Dhaka</li>
                <li>CGPA: 2.63</li>
            </ul>
        </section>
    );
};

export default University;