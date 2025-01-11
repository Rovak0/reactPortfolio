import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import photo from "../assets/selfPhoto.jpeg"

//portfolio (currently placeHolder0) will be a function that recieves a list
import Portfolio from "./portfolio";
import AboutMe from './aboutMe';
import ContactPage from './contactMe';
//import the list
// import projectsList from '../assets/projectSeed';

export default function HomePage() {
    //I don't need to fetch any data for the home page
    //I do need to pull in the image though
    //It just returns the about me info


    return (
        <div className='mainBody'>
            {/* react needs to return exactly 1 component, make it a big one with small parts inside */}
            {/* <div className="container pt-4 aboutMe"> */}
                {/* I want a left side with text and a right side with image */}
                {/* gave it a class called aboutMe to use later */}
                {/* to split the 2 sides, I will need 2 divs */}
                {/* <div className="leftSide">
                    <h1>About Me</h1>
                    <p>I started coding early 2024 with python.  More stuff will be put here later.</p>
                </div>
                <div className="rightSide">
                    <img className="w-8" src={photo}></img>
                </div>
            </div> */}
            <AboutMe/>

            {/* 2 placeholders to jump to */}
            {/* <div className="container pt-4 placeHolder0">
                <img className="w-8" src={photo}></img>
            </div> */}

            {/* call portfolio */}
            {/* <Portfolio/>  */}

            {/* call contact me */}
            {/* <ContactPage /> */}

{/* 
            <div className="container pt-4 placeHolder1">
                <img className="w-8" src={photo}></img>
            </div> */}
        </div>
    )
}