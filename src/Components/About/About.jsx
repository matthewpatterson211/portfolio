import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.png'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am a detail-oriented and motivated entry-level Web Developer with a strong passion for frontend development. While I’m early in my professional journey, I bring a solid foundation in web technologies, a commitment to writing clean and responsive code, and a genuine enthusiasm for creating engaging user experiences.</p>
                    <p>I'm eager to contribute to dynamic teams, continue learning, and grow within the ever-evolving world of web development.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
                    <div className="about-skill"><p>React</p><hr style={{width: "70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "60%"}}/></div>
                    <div className="about-skill"><p>MySql</p><hr style={{width: "50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>100%</h1>
                <p>COMMITTED TO LEARNING</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>5+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>∞</h1>
                <p>ROOM TO GROW</p>
            </div>
        </div>
    </div>
  )
}

export default About