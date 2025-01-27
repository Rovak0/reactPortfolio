import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import photo from "../assets/photoOfMe.jpg";


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
                    {/* <p>I started coding early 2024 with python.  I learned HTML, CSS, and Javascript through a coding bootcamp with
                        UNC Charlotte over the summer of 2024.  I am currently learing C++.</p> */}
                    <p>I started coding in early 2024 with Python.  I was taught HTML, CSS, and Javascript through University of North Carolina at Charlotte 
                        over the summer of 2024 (<a href="https://www.credly.com/badges/bc7e1fec-64cb-426b-b3b0-a68965c4911a/public_url">
                        the certificate from the class</a>).  I am currently learning C++.  
                    </p>
                    <p>I love the logic and methodology behind coding.  </p>
                </div>
                <div className="aboutMePhoto">
                    <img className="photoOfMe" src={photo}></img>
                </div>
            {/* </div> */}

        </div>
    )
};