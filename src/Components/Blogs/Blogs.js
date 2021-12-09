import React, { useState } from 'react';
import './Blogs.css';
import SideBar from '../SideBar/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import BlogsComponentsOne from './BlogsComponents/BlogsComponentsOne/BlogsComponentsOne';

const Blogs = () => {
    const [blogOne, setBlogOne] = useState(false);
    const [blogTwo, setBlogTwo] = useState(false);
    const [blogThree, setBlogThree] = useState(false);
    const [blogFour, setBlogFour] = useState(false);

    const handleBlogOne = () => {
        setBlogOne(true);
        setBlogTwo(false);
        setBlogThree(false);
        setBlogFour(false);
    }

    const handleBlogTwo = () => {
        setBlogOne(false);
        setBlogTwo(true);
        setBlogThree(false);
        setBlogFour(false);
    }

    const handleBlogThree = () => {
        setBlogOne(false);
        setBlogTwo(false);
        setBlogThree(true);
        setBlogFour(false);
    }

    const handleBlogFour = () => {
        setBlogOne(false);
        setBlogTwo(false);
        setBlogThree(false);
        setBlogFour(true);
    }

    return (
        <main className="blogs-main">
            <div className="sideBar-blogs-component">
                <SideBar />
            </div>
            <div className="blogs-container">
                <div className="blogs-heading">
                    <h1>Blogs <span>you can read</span></h1>
                    <div className="blogs-properties">
                        <div className="blogs-titles">
                            <button onClick={handleBlogOne}><span className="blogs-title-icon"><FontAwesomeIcon icon={faCheckDouble} /></span>লিনাক্স কি? লিনাক্স ভিত্তিক অপারেটিং সিস্টেমের সুবিধা কি?</button>
                            <button onClick={handleBlogTwo}><span className="blogs-title-icon"><FontAwesomeIcon icon={faCheckDouble} /></span>এনক্রিপশন কী? এটা কী কাজে লাগে?</button>
                            <button onClick={handleBlogThree}><span className="blogs-title-icon"><FontAwesomeIcon icon={faCheckDouble} /></span>লিংকডইনের মাধ্যমে চাকরি পেতে দারুণ কিছু টিপস</button>
                            <button onClick={handleBlogFour}><span className="blogs-title-icon"><FontAwesomeIcon icon={faCheckDouble} /></span>স্পাম ইমেইল কি? ক্ষতিকর স্প্যাম থেকে নিরাপদ থাকার উপায়</button>
                        </div>
                        <div className="blogs-components">
                            {blogOne && <BlogsComponentsOne />}
                            {blogTwo && <BlogsComponentsOne />}
                            {blogThree && <BlogsComponentsOne />}
                            {blogFour && <BlogsComponentsOne />}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Blogs;