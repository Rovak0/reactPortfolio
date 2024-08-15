//this needs list items to manage the projects

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//the list in container
//the list makes singular projects
import Container from '../components/UI/listItems';
// I think I should be using the project file
import Project from '../components/Projects/project';


//this will need seed data, 

//react for loops use map

export default function PortfolioPage(props) {
    return (
        <>
            {/* will likely need to change this class */}
            <ul className="list-group">
                {props.projects.map((item) => {
                    return (
                        <Project key={item.id}>
                            {/* I think this will loop through and that this is how you call functions in react */}
                            {item}
                        </Project>
                    )
                })}
            </ul>
        </>
    )
};