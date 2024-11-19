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


//react for loops use map

let tracker = 1;

export default function PortfolioPage() {

    //need a list of projects
    //then iterate over the projects
    
    // console.log(projectList);

    const [projects, setProjects] = useState([]);
    if(tracker){
        // console.log("setting");
        setProjects(projectList);
        tracker = 0;
    }

    // console.log(projects);


    

    return (
        <>
            {/* will likely need to change this class */}
            <ul className="list-group">
                {projects.map((item) => {
                    console.log(item);
                    return (
                        <Project key={item.name}>
                            {/* I think this will loop through and that this is how you call functions in react */}
                            {item}
                        </Project>
                    )
                })}
            </ul>
        </>
    )
};