import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Projects.css';
import meghbary from '../../Images/luxury-resorts.jpg';
import dental from '../../Images/dental.jpg';
import mess from '../../Images/mess.jpg';
import travelBlog from '../../Images/travel-blog.jpg';
import madrasha from '../../Images/madrasha.jpg';
import dhakaMetro from '../../Images/metro.jpg';
import Project from '../Project/Project';

const projectsData = [
    {
        "title": "Gurigram Madrasha",
        "img": madrasha,
        "client": "https://github.com/MdZakirHossainBhuiyan/Bangladesh-Tour-and-travel-community",
        "server": "",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here users can write and read travel blogs.",
        "tools": "React.js, React-Bootstrap, firebase Authentication(google login)",
        "type": "Client Project",
    },
    {
        "title": "Meghbary Luxury Vacation",
        "img": meghbary,
        "client": "https://github.com/MdZakirHossainBhuiyan/meghbari-vacation-client",
        "server": "https://github.com/MdZakirHossainBhuiyan/meghbari-vacation-server",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here Client can book any travel packages",
        "tools": "React.js, Node.js(express), MongoDB, firebase Authentication(google login)",
        "type": "Personal Project",
    },
    {
        "title": "Dental Calls",
        "img": dental,
        "client": "https://github.com/MdZakirHossainBhuiyan/doctors-portal-home-page",
        "server": "https://github.com/MdZakirHossainBhuiyan/doctors-portal-server",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here Client can book any appointment packages",
        "tools": "React.js, Node.js(express), MongoDB, firebase Authentication(google login)",
        "type": "Personal Project",
    },
    {
        "title": "My Mess - Mess Management System",
        "img": mess,
        "client": "https://github.com/MdZakirHossainBhuiyan/my-mess",
        "server": "",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here users can be managed their all accounts-related stuff.",
        "tools": "HTML, CSS, Bootstrap, PHP, MySQL",
        "type": "Personal Project",
    },
    {
        "title": "Travel Book",
        "img": travelBlog,
        "client": "https://github.com/MdZakirHossainBhuiyan/Bangladesh-Tour-and-travel-community",
        "server": "",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here users can write and read travel blogs.",
        "tools": "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
        "type": "Team Project",
    },
    {
        "title": "Dhaka Metro - ticket",
        "img": dhakaMetro,
        "client": "https://github.com/MdZakirHossainBhuiyan/Bangladesh-Tour-and-travel-community",
        "server": "",
        "demo": "https://github.com/MdZakirHossainBhuiyan",
        "description": "Here users can write and read travel blogs.",
        "tools": "React.js, React-Bootstrap, firebase Authentication(google login)",
        "type": "Personal Project",
    }
]

const Projects = () => {
    return (
        <main className="projects-main">
            <div className="sideBar-component">
                <SideBar />
            </div>
            <section className="projects-section">
                <div className="projects-heading">
                    <h1>Projects <span>which I have completed</span></h1>
                </div>
                <div className="projects-contain">
                    {
                        projectsData.map(project => <Project project={project} />)
                    }
                </div>
            </section>
        </main>
    );
};

export default Projects;