import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" width={100} />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Innovative blockchain developer with expertise in crafting secure
              decentralized applications and smart contracts on Ethereum and
              Hyperledger.
            </p>
            <p>
              Passionate about enhancing transaction transparency and efficiency
              through robust blockchain protocols.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"><p>React JS</p> <hr style={{ width: "70%" }} /> </div>
            <div className="about-skill"> <p>Java</p> <hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>30+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>HAPPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
