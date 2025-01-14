//this needs list items to manage the projects

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//the list in container
//the list makes singular projects
import Container from '../components/UI/listItems';
// I think I should be using the project file
import Project from '../components/Projects/project';

//this will need seed data, 
//import the projectsList
import projectList from "../assets/projectSeed";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//react for loops use map

let tracker = 1;

export default function PortfolioPage() {

    //need a list of projects
    //then iterate over the projects
    
    // console.log(projectList);

    const [projects, setProjects] = useState([]);
    // console.log()
    if(!tracker && projects.length == 0){
        // console.log("no tracker no projects");
        setProjects(projectList);
    }

    if(tracker){
        // console.log("setting")
        // console.log(projects);
        // if(projects.length == 0){
        //     console.log("stuff exists in the void");
        // }
        setProjects(projectList);
        tracker = 0;
    }


    //could make it responsive and scale the number of items based off of screen
        //may do this later
    // function responsive(size) {
    //     desktop: {
    //         breakPoint: { max: 4000, min:3000}
    //     }
    // }

    const responsive = {
        tablet: {
          breakpoint: { max: 4000, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <>
            {/* will likely need to change this class */}
            {/* <ul className="projectList">
                {projects.map((item) => {
                    return (
                        <Project key={item.name}>
                            {item}
                        </Project>
                    )
                })}
            </ul> */}

            {/* will likely need to change this class */}
            {/* <div className='portfolio'> */}
                <Carousel responsive={responsive} className='portfolio'>
                    {projects.map((item) => {
                        return (
                            <Project key={item.name}>
                                {/* I think this will loop through and that this is how you call functions in react */}
                                {item}
                            </Project>
                        )
                    })}
                </Carousel>
            {/* </div> */}
        </>
    )
};