import React from 'react';
import './Contact.css';
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="Theme Pattern" />
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact me anytime.</p>   
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={mail_icon} alt="Mail Icon" /> 
                        <p>kumardevashish000@gmail.com</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={call_icon} alt="Call Icon" /> 
                        <p>+91-8986416949</p> 
                    </div>
                    <div className='contact-detail'>
                        <img src={location_icon} alt="Location Icon" /> 
                        <p>Punjab, India</p>
                    </div>
                </div>
            </div>
            <form  className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit'  className='contact-submit'>submit now</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;
