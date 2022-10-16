import React from 'react';
import './pages.css';
import { AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import{ FaSpotify, FaDiscord, FaTiktok } from 'react-icons/fa';
 
function Contact() {
    return (
        <div className="content-footer">
            <h1 className="content-header" id='contact'>Contact Us</h1>
            <div className="media">
            <AiOutlineInstagram size = {'80px'} />
                <AiOutlineLinkedin size = {'80px'}/>
                <FaSpotify size = {'80px'}/>
                <FaDiscord size = {'80px'}/>
                <FaTiktok size = {'80px'} />
            </div>
        </div>

    );
}

export default Contact;