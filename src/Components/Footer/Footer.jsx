import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={logo} alt="" />
                <p>I am a web developer from St. Louis, MO with experience in Java, Javascript, and React.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email'/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">&copy; 2025 Matthew Patterson. All rights reserved.</p>
                <div className="footer-bottom-right"></div>
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    
  )
}

export default Footer