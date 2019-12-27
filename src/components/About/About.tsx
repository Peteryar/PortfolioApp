import React from 'react';
import './about.css'
export default function About() {
    return (
        <div id="about-con">
            <div id="profile-pic-con">
                <img id="profile-pic" src="./image.jpg" />
            </div>
            <div id="about-description-con">
                <p id="about-title">About Me</p>
                <p id="about-intro">A Passionate Software Engineer (Mobile and Web developer)</p>
                <br></br>
                <p id="about-description">I am a final Year Student of Petroleum
                    Engineering, Niger Delta University Wilberforce Island,
                    who is Passionate about Technology.
                        <br></br><br></br>
                    A pixel-perfect Front-end engineer
                     who builds scalable and responsive
                     web and Mobile applications with technologies
                     such as HTML, Bootstrap, CSS, JavaScript,
                      React and ReactNative. Can manage Applications
                      state with Redux, Solve Problems and makes application
                      Scale with optimized JavaScript codes.
                          <br></br><br></br>
                    Ex-intern @genesystechhub as a frontend engineer,
                    volunteer ReactNative developer @cyberLifer.
                     Madly in Love with JavaScript!
                    </p>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fas fa-share-alt"></i>
                <div>
                    <button>Hire Me</button>
                    <button>Download Resume</button>
                </div>
            </div>
        </div>
    );
}
