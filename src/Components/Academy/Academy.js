import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Academy.css';
import codeForces from "../../Images/CodeForces.jpg";
import uri from "../../Images/uri.png";
import uva from "../../Images/uva.png";
import hackerRank from "../../Images/HackerRank.png";
import stopStalk from "../../Images/stopstalk-logo.png";
import AcademicTimeLine from './AcademicTimeLine/AcademicTimeLine';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const academicData = [
    {
        academyType: 'School',
        degreeName: 'SSC',
        academy: 'Tejgaon Ideal School & College',
        location: 'Dhaka',
        batch: '2012-2013',
        grade: 4.88,
        gradeType: 'GPA',
    },
    {
        academyType: 'College',
        degreeName: 'HSC',
        academy: 'Dhaka Imperial College',
        location: 'Dhaka',
        batch: '2014-2015',
        grade: 4.92,
        gradeType: 'GPA',
    },
    {
        academyType: 'University',
        degreeName: 'BSc in Computer Science & Engineering',
        academy: 'East West University',
        location: 'Dhaka',
        batch: '2016-2022',
        grade: 2.63,
        gradeType: 'CGPA',
    },
]

const Academy = () => {
    return (
        <main className="academyMain">
            <SideBar />

            <section className='academySection'>
                <div className="academyHeader">
                    <h1>Academic History <span>where I learned</span></h1><hr />
                </div>
                <div className='academicContainer'>
                    <div className='academicTimeline'>
                        {
                            (academicData?.length > 0) && 
                            <div className="timeline-container">
                                {
                                    academicData.map((data, index) => <AcademicTimeLine data={data} key={index} />)
                                }
                            </div>
                        }
                    </div>
                    <div className='extraActivities'>
                        <h6>Programming State</h6>
                        <div className='programmingState'>
                            <div className='stateContainer marginRight'>
                                <div className='stateContainerImg'>
                                    <img src={codeForces} alt="codeForces" />
                                </div>
                                <div className='stateCount'>
                                    <span>151</span>
                                </div>
                            </div>
                            <div className='stateContainer'>
                                <div className='stateContainerImg'>
                                    <img src={hackerRank} alt="hackerRank" />
                                </div>
                                <div className='stateCount'>
                                    <span>34</span>
                                </div>
                            </div>
                        </div>
                        <div className='programmingState'>
                            <div className='stateContainer marginRight'>
                                <div className='stateContainerImg'>
                                    <img src={uri} alt="uri" />
                                </div>
                                <div className='stateCount'>
                                    <span>96</span>
                                </div>
                            </div>
                            <div className='stateContainer'>
                                <div className='stateContainerImg'>
                                    <img src={uva} alt="uva" />
                                </div>
                                <div className='stateCount'>
                                    <span>18</span>
                                </div>
                            </div>
                        </div>

                        <div className='stopStalk'>
                            <span>**Click On the StopStalk Logo to see updated state</span>
                            <a href='https://www.stopstalk.com/user/profile/zakir_ewu' target="_blank">
                                <img src={stopStalk} alt="stopStalk" width="35px" height="35px" />
                            </a>
                        </div>

                        <div className='hrLine'>
                            <hr />
                        </div>

                        <div>
                            <h6>Training &#38; Extra Curricular Activities</h6>

                            <div className='academicPageKeyPoint'>
                                <div className='keyPointItem'>
                                    <div className='keyPointIcon'>
                                        <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                    </div>
                                    <div className='keyPointText'>
                                        <span>I have completed a six-month course on web development</span>
                                    </div>
                                </div>
                                <div className='keyPointItem'>
                                    <div className='keyPointIcon'>
                                        <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                    </div>
                                    <div className='keyPointText'>
                                        <span>Worked with East West University Programming Club for four years</span>
                                    </div>
                                </div>
                                <div className='keyPointItem'>
                                    <div className='keyPointIcon'>
                                        <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                    </div>
                                    <div className='keyPointText'>
                                        <span>Worked with East West University Robotics Club for two years</span>
                                    </div>
                                </div>
                                <div className='keyPointItem'>
                                    <div className='keyPointIcon'>
                                        <CheckOutlinedIcon style={{"fontSize": "18px"}} />
                                    </div>
                                    <div className='keyPointText'>
                                        <span>Made some basic level robots like "Line Follower Robots"</span>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Academy;