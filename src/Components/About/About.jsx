import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.png";
const About = () => {
  return (
    <div id='about' className="about">
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
            Passionate full stack developer with a knack for creating seamless user experiences and responsive web designs. 
            </p>
            <p>
            Skilled in HTML, CSS, JavaScript, and modern frameworks like React, committed to bringing innovative ideas to life on the web.
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
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>MAJOR PROJECTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
