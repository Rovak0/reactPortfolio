// this will be a file that holds project data to be displayed

//projects will have name, gitHub link, live link, and later an image

// by making them objects, the variables can have names and can be referenced later
// giving the live trait multiple variables would allow for handling render taking down a site 

import pythonChessImg from "./projectImages/chessPython.png";
import onlineChessImg from "./projectImages/chessOnline.png";


const Cathedral = {
    name: "Cathedral",
    image: onlineChessImg,
    gitHub: "https://github.com/Rovak0/cathedralOnline",
    notes: "Cathedral is an online chess game that can host 2 players.  It is built with JavaScript and uses an express server communicating with a postgres SQL database through sequelize library." 
    };

const Gold_Dive = {
    name : "Gold Dive",
    gitHub: "https://github.com/Rovak0/Gold_Dive",
    live: "https://gold-dive-r5vs.onrender.com/",
    notes: "Gold Dive is hosted on Render and has a database hosted on MongoDB.  The Render page, if not accessed recently, will shut down to save server space.  "
    + "It may take a moment for Render to relaunch the webpage.  The MongoDB database fully shuts down if unused and the site will not work if that is the case."
};

const pythonChess = {
    name: "Chess (Python)",
    gitHub: "https://github.com/Rovak0/Chess-python",
    image: pythonChessImg,
    notes: "This is a version of chess built in python using the Pygame library."
};

const projects = [
    Cathedral,
    Gold_Dive,
    pythonChess
];

export default projects;