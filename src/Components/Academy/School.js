import React from 'react';
import './School.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool } from '@fortawesome/free-solid-svg-icons';

const School = () => {
    return (
        <section className="school-section">
            <h3><span><FontAwesomeIcon icon={faSchool} /></span> Dharkhar Government Primary School</h3>
            <ul>
                <li>Year 2003 - 2007 / Brahmanbaria</li>
            </ul>
            <h3><span><FontAwesomeIcon icon={faSchool} /></span> Community Center Adhorsho High School / <span>SSC</span></h3>
            <ul>
                <li>Year 2012 - 2013 / Dhaka</li>
                <li>GPA: 4.88</li>
            </ul>
        </section>
    );
};

export default School;