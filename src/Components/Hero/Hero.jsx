import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_images.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" width={100}/>
      <h1><span>I'm Kumar Devashish,</span> blockchain developer based in India.</h1>
      <p>I am a blockchain developer from Bihar, India with 3 years of experience in multiple companies like Microsoft, Google, and Amazon.</p>
      <div className='hero-action'>
      <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
}

export default Hero;
