// this will be a file that holds project data to be displayed

//projects will have name, gitHub link, live link, and later an image

// by making them objects, the variables can have names and can be referenced later
// giving the live trait multiple variables would allow for handling render taking down a site 

import pythonChessImg from "./projectImages/chessPython.png";
import onlineChessImg from "./projectImages/chessOnline.png";
import orbitsVideo from "./projectImages/orbits.mp4";


const Cathedral = {
    name: "Cathedral",
    image: onlineChessImg,
    live: "https://cathedralonline.onrender.com/",
    gitHub: "https://github.com/Rovak0/cathedralOnline",
    notes: "Cathedral is an online chess game that can host 2 players.  It is built with JavaScript and uses an express server communicating with a postgres SQL database through sequelize library.  The SQL database is hosted using Render's free service, so it goes down every month.  " 
    };

const Gold_Dive = {
    name : "Gold Dive",
    gitHub: "https://github.com/Rovak0/Gold_Dive",
    // live: "https://gold-dive-r5vs.onrender.com/",
    notes: "Gold Dive was hosted on Render and had a front end built using React.  The back end was hosted on an Appollo server and used graphQL to perform operations on the mongoDB database.  "
};

const pythonChess = {
    name: "Chess (Python)",
    gitHub: "https://github.com/Rovak0/Chess-python",
    image: pythonChessImg,
    notes: "This is a version of chess built in python using the Pygame library.",
    noLive: true
};

const orbits = {
    name: "Orbits",
    gitHub: "https://github.com/Rovak0/orbits",
    notes: "This is a python program that simulates the effects of gravity on orbs.  Built using Pygame.",
    video: orbitsVideo,
    noLive: true
};


const projects = [
    Cathedral,
    pythonChess,
    Gold_Dive,
    orbits
];

export default projects;
