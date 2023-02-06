import React from 'react';
import './AcademicTimeLine.css';

const AcademicTimeLine = ({data}) => {
    return (
        <div className="timeline-item">
            <div className="timeline-item-content">
                <h6 className='contentTitle'>
                    {data?.academy}
                        {
                            data?.academyType!=="University" && <span> / {data?.degreeName}</span>
                        }
                </h6>
                {
                    data?.academyType==="University" && <small>{data?.degreeName}</small>
                }
                <br />
                <small>{data?.batch} / {data?.location}</small>
                <small>{data?.gradeType} : {data?.grade}</small>
                <span className="circle" />
            </div>
        </div>
    );
};

export default AcademicTimeLine;