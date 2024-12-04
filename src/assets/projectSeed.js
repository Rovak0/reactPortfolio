// this will be a file that holds project data to be displayed

//projects will have name, gitHub link, live link, and later an image

// by making them objects, the variables can have names and can be referenced later
// giving the live trait multiple variables would allow for handling render taking down a site 

const Cathedral = {
    name: "Cathedral",
    gitHub: "https://github.com/Rovak0/cathedralOnline",
    notes: "Cathedral is an online chess game that can host 2 players."
};

const Gold_Dive = {
    name : "Gold Dive",
    gitHub: "https://github.com/Rovak0/Gold_Dive",
    live: "https://gold-dive-r5vs.onrender.com/",
    notes: "Gold Dive is hosted on Render and has a database hosted on MongoDB.  The Render page, if not accessed recently, will shut down to save server space.  It may take a moment for Render to relaunch the webpage.  The MongoDB database fully shuts down if unused and the site will not work if that is the case."
};

const projects = [
    Cathedral,
    Gold_Dive
];

export default projects;