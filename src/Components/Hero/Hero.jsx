import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" width={320} height={320} />
        <h1><span>I'm Matthew Patterson,</span> web developer based in the US.</h1>
        <p>I am a web developer from St. Louis, MO with experience in Java, Javascript, and React. </p>
        <div className="hero-action">
          <div className='hero-connect'>Connect with me</div>
          <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero