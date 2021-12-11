import React from 'react';
import './FrontendSkills.css';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FrontendSkills = () => {
    return (
        <div className='FrontendSkills-list'>
            <div>
                <table>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> HTML</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> CSS</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> ES6</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> JavaScript</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> React.js</td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> TypeScript</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> Bootstrap</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> Tailwind CSS</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> Material UI</td>
                    </tr>
                    <tr>
                        <td className='FrontendSkills-list-td'><span><FontAwesomeIcon icon={faPaintBrush} /></span> Firebase Authentication</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default FrontendSkills;