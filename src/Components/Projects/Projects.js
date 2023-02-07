import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Projects.css';
import dentalCall from '../../Images/dentalCall.PNG';
import meghbariImage from '../../Images/meghbari.PNG';
import featurePro from '../../Images/health-Medical-website-template.jpg';
import { faReact,  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ComplainBoxImg from "../../Images/complainBox.PNG";

const Projects = () => {
    return (
        <main className="projectsMain">
                <SideBar />

                <section className="projectSection">
                    <div className="projectHeader">
                        <h1>Projects <span>which I have completed</span></h1><hr />
                    </div>
                    <div className='projectContainer'>
                        <div className='topProject'>
                            <div className='topProjectContent'>
                                <small>Working on...</small>
                                <h2>Digital Health Service</h2>
                                <p>A digital health service website is an online platform that provides health-related services, information and resources to users through the internet. This website aims to make healthcare more accessible, convenient and efficient by offering features such as telemedicine consultations, appointment booking, health records management, and educational resources. It provides a centralized hub for all health-related needs and offers a seamless, user-friendly experience for patients, healthcare providers and other stakeholders.</p>
                                <div className='technology'>
                                    <p>Technologies that I am trying to use</p>
                                    <span>React</span>
                                    <span className='reduxColor'>Redux</span>
                                    <span className='expressColor'>Express</span>
                                    <span className='mongoColor'>Mongo DB</span>
                                    <span className='muiColor'>Material UI</span>
                                    <span className='firebaseColor'>Firebase Auth</span>
                                    <span className='muiColor'>Material Icon</span>
                                    <span className='cssColor'>CSS</span>
                                </div>
                            </div>
                            <div className='topProjectImg'>
                                <img src={featurePro} alt="health" />
                            </div>
                        </div>
                        <br />
                        <div className='topProject'>
                            <div className='topProjectImg'>
                                <img src={ComplainBoxImg} alt="ComplainBoxImg" />
                            </div>
                            <div className='topProjectContent'>
                                <small>Exercise Project</small>
                                <h2>
                                    Complain Box Application - 
                                    <span className='githubLinks'> <button>Client Site</button> || <button>Server Site</button> || <button>Preview</button></span>
                                </h2>
                                <p>A Complain Box Application is a platform where citizens can voice their grievances and complaints regarding their local area. It serves as a channel of communication between the local government and the public, allowing citizens to raise issues such as broken roads, lack of basic amenities, and other problems in their community. The website provides an easy-to-use interface for users to submit complaints, track the progress of their complaints, and receive updates from the local authorities. It aims to enhance accountability and transparency in local governance, and ensure that citizens' voices are heard and acted upon by the responsible parties.</p>
                                <div className='technology'>
                                    <p>Stacks : </p>
                                    <span>React</span>
                                    <span className='expressColor'>Express</span>
                                    <span className='mongoColor'>Mongo DB</span>
                                    <span className='muiColor'>Material UI</span>
                                    <span className='firebaseColor'>Firebase Auth</span>
                                    <span className='muiColor'>Material Icon</span>
                                    <span className='cssColor'>CSS</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='topProject'>
                            <div className='topProjectContent'>
                                <small>Exercise Project</small>
                                <h2>
                                    Meghbari Luxury Vacation - 
                                    <span className='githubLinks'> <button>Client Site</button> || <button>Server Site</button> || <button>Preview</button>
                                    </span>
                                </h2>
                                <p>Meghbari Luxury Vacation is a website that offers a one-stop solution for booking local and international tours. It caters to travelers looking for luxury travel experiences, offering a wide range of travel packages to various destinations around the world. The website features an intuitive and user-friendly interface, making it easy for users to browse and book their dream vacations. It includes detailed information about each destination, including attractions, accommodation options, and travel itineraries. With a focus on providing high-end travel services, Meghbari Luxury Vacation is the perfect choice for those looking to take their travels to the next level.</p>
                                <div className='technology'>
                                    <p>Stacks : </p>
                                    <span>React</span>
                                    <span className='expressColor'>Express</span>
                                    <span className='mongoColor'>Mongo DB</span>
                                    <span className='muiColor'>Material UI</span>
                                    <span className='firebaseColor'>Firebase Auth</span>
                                    <span className='muiColor'>Material Icon</span>
                                    <span className='cssColor'>CSS</span>
                                </div>
                            </div>
                            <div className='topProjectImg'>
                                <img src={meghbariImage} alt="meghbariImage" />
                            </div>
                        </div>
                        <br />
                        <div className='topProject'>
                            <div className='topProjectImg'>
                                <img src={dentalCall} alt="dentalCall" />
                            </div>
                            <div className='topProjectContent'>
                                <small>Learning Project</small>
                                <h2>
                                    Chat Application - 
                                    <span className='githubLinks'> <button>Client Site</button> || <button>Server Site</button> || <button>Preview</button>
                                    </span>
                                </h2>
                                <p>My chat application allows users to communicate with each other in real-time through the exchange of text messages. It provides an easy and convenient platform for users to connect and stay in touch with their friends, family, or colleagues. With its user-friendly interface, users can quickly and easily send and receive messages, making it an ideal solution for personal or business communication needs.</p>
                                <div className='technology'>
                                    <p>Stacks : </p>
                                    <span>React</span>
                                    <span className='reduxColor'>Redux Toolkit</span>
                                    <span className='cssColor'>RTK Query</span>
                                    <span className='mongoColor'>JSON Server</span>
                                    <span className='muiColor'>Tailwind CSS</span>
                                    <span className='firebaseColor'>JSON Auth</span>
                                    <span className='muiColor'>Material Icon</span>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className='topProject'>
                            
                            <div className='topProjectContent'>
                                <small>Learning Project</small>
                                <h2>
                                    Dental Call - 
                                    <span className='githubLinks'> <button>Client Site</button> || <button>Server Site</button> || <button>Preview</button>
                                    </span>
                                </h2>
                                <p>A dental service website is an online platform that provides comprehensive dental care services and information to users. The website allows users to book appointments with dental professionals, view their medical records, and access educational resources about dental health. It is designed to make dental care more accessible and convenient for patients, offering a user-friendly interface and seamless experience. Whether seeking routine check-ups or specialized dental services, a dental service website is a valuable resource for all your dental needs.</p>
                                <div className='technology'>
                                    <p>Stacks : </p>
                                    <span>React</span>
                                    <span className='expressColor'>Express</span>
                                    <span className='mongoColor'>Mongo DB</span>
                                    <span className='muiColor'>Material UI</span>
                                    <span className='firebaseColor'>Firebase Auth</span>
                                    <span className='muiColor'>Material Icon</span>
                                    <span className='cssColor'>CSS</span>
                                </div>
                            </div>
                            <div className='topProjectImg'>
                                <img src={dentalCall} alt="dentalCall" />
                            </div>
                        </div>
                        
                    </div>
                </section>
        </main>
    );
};

export default Projects;