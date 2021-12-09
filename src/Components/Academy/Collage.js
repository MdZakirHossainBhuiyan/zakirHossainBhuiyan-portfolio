import React from 'react';
import './Collage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

const Collage = () => {
    return (
        <section className="collage-section">
            <h3><span><FontAwesomeIcon icon={faUniversity} /></span> Dhaka Imperial Collage / <span>HSC</span></h3>
            <ul>
                <li>Year 20014 - 2015 / Dhaka</li>
                <li>GPA: 4.92</li>
            </ul>
        </section>
    );
};

export default Collage;