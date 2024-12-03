import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import photo from "../assets/selfPhoto.jpeg";

import './styles.css';

export default function AboutMe() {

    return (
        <div className='aboutMe'>
            {/* react needs to return exactly 1 component, make it a big one with small parts inside */}
            {/* <div className="container pt-4 aboutMeSub"> */}
                {/* I want a left side with text and a right side with image */}
                {/* gave it a class called aboutMe to use later */}
                {/* to split the 2 sides, I will need 2 divs */}
                <div className="aboutMeText">
                    <h1>About Me</h1>
                    <p>I started coding early 2024 with python.  I learned HTML, CSS, and Javascript through a coding bootcamp with
                        UNC Charlotte over the summer of 2024.  I am currently learing C++.</p>
                    <p>I love the logic behind coding, specifically the logic of backends.</p>
                </div>
                <div className="aboutMePhoto">
                    <img className="photoOfMe" src={photo}></img>
                </div>
            {/* </div> */}

        </div>
    )
};