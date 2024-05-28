import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_images.png';

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile" width={100}/>
      <h1><span>I'm Kumar Devashish,</span> blockchain developer based in India.</h1>
      <p>I am a blockchain developer from Bihar, India with 3 years of experience in multiple companies like Microsoft, Google, and Amazon.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
