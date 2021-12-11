import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const handleSubmit = e => {

    }

    return (
        <main className="contact-main">
            <div className="sideBar-contact-component">
                <SideBar />
            </div>
            <div className="contact-container">
                <div className="contact-heading">
                    <h1>Contact <span className='contact-title-span'>Get in touch!</span></h1>
                    <div className="contact-properties">
                        <div className="contact-info">
                            <p><span>Hello Sir,<br /></span>For all enquiries, please don't be hesitate to contact me.</p>
                            <div className="contact-item">
                                <p className="contact-icon"><FontAwesomeIcon icon={faEnvelope} /></p>
                                <p><span>Email:</span><br />zakirhossaintuhin@gmail.com</p>
                            </div>
                            <div className="contact-item">
                                <p className="contact-icon"><FontAwesomeIcon icon={faPhoneAlt} /></p>
                                <p><span>Phone:</span><br />+880 1675-026895</p>
                            </div>
                            <div className="contact-social-media">
                                <p>Follow me on</p>
                                <div className="contact-social-icon">
                                    <FontAwesomeIcon className="icon-style" icon={faLinkedin} />
                                    <FontAwesomeIcon className="icon-style" icon={faGithub} />
                                    <FontAwesomeIcon className="icon-style" icon={faFacebook} />
                                    <FontAwesomeIcon className="icon-style" icon={faInstagram} />
                                    <FontAwesomeIcon className="icon-style" icon={faTwitter} />
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h1>Send message</h1>
                            <form className="form-body" onSubmit={handleSubmit}>
                                <div className="flex-input">
                                    <div className="form-group name-field">
                                        <input type="name" className="form-control"  placeholder="Name" />
                                    </div>
                                    <div className="form-group email-field">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="subject" className="form-control" placeholder="Subject" />
                                    </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Message" />
                                </div>
                                
                                <div className="form-button">
                                    <button type="submit" className="btn">Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;