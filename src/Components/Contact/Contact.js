import React from 'react';
import SideBar from '../SideBar/SideBar';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <main className="contactMain">
            <SideBar />
            <section className='contactSection'>
                <div className="contactHeader">
                    <h1>Contact <span>Get in touch!</span></h1><hr />
                </div>
                <div className='contactContainer'>
                    <div className='contactItem'>
                        <div className="contact-info">
                            <p className='textMessage'><span>Hello Sir,</span><br />For all enquiries, please don't be hesitate to contact me.</p>
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
                                    <a href="https://www.linkedin.com/in/md-zakir-hossain-bhuiyan-7a7271203/" target="_blank">
                                        <FontAwesomeIcon className="icon-style" icon={faLinkedin} />
                                    </a>

                                    <a href="https://github.com/MdZakirHossainBhuiyan" target="_blank">
                                        <FontAwesomeIcon className="icon-style" icon={faGithub} />
                                    </a>

                                    <a href="https://www.facebook.com/zakir.hossain065/" target="_blank">
                                        <FontAwesomeIcon className="icon-style" icon={faFacebook} />
                                    </a>

                                    <a href="#" target="_blank">
                                        <FontAwesomeIcon className="icon-style" icon={faInstagram} />
                                    </a>
                                    <a href="#" target="_blank">
                                        <FontAwesomeIcon className="icon-style" icon={faTwitter} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contactForm'>
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
            </section>

            {/* <div className="contact-container">
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
            </div> */}
        </main>
    );
};

export default Contact;