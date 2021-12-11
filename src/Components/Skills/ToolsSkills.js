import React from 'react';
import './ToolsSkills.css';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ToolsSkills = () => {
    return (
        <div className='toolsSkills-list'>
            <div>
                <table>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Vs Code</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Git</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Bracket</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Chrome Dev Tools</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Code Blocks</td>
                    </tr>
                </table>
            </div>
            <div>
                <table>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Netlify</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Heroku</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Figma</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Xampp</td>
                    </tr>
                    <tr>
                        <td className='toolsSkills-list-td'><span><FontAwesomeIcon icon={faTools} /></span> Anaconda</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default ToolsSkills;