import React from 'react';
import './BackendSkills.css';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackendSkills = () => {
    return (
        <div className='backendSkills-list'>
            <div>
                <table>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> Node.js</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> Express.js</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> PHP</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> MySQL</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> MongoDB</td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> OOP</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> Data Structure</td>
                    </tr>
                    <tr>
                        <td className='backendSkills-list-td'><span><FontAwesomeIcon icon={faDatabase} /></span> Algorithms</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default BackendSkills;