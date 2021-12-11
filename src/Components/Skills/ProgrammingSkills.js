import React from 'react';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProgrammingSkills.css';

const ProgrammingSkills = () => {
    return (
        <div className='ProgrammingSkills-list'>
            <table>
                <tr>
                    <td className='ProgrammingSkills-list-td'><span><FontAwesomeIcon icon={faCode} /></span> C</td>
                </tr>
                <tr>
                    <td className='ProgrammingSkills-list-td'><span><FontAwesomeIcon icon={faCode} /></span> C++</td>
                </tr>
                <tr>
                    <td className='ProgrammingSkills-list-td'><span><FontAwesomeIcon icon={faCode} /></span> JavaScript</td>
                </tr>
                <tr>
                    <td className='ProgrammingSkills-list-td'><span><FontAwesomeIcon icon={faCode} /></span> PHP</td>
                </tr>
                <tr>
                    <td className='ProgrammingSkills-list-td'><span><FontAwesomeIcon icon={faCode} /></span> Python</td>
                </tr>
             </table>
        </div>
    );
};

export default ProgrammingSkills;