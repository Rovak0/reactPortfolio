// this will be a file that holds project data to be displayed

//projects will have name, gitHub link, live link, and later an image

// by making them objects, the variables can have names and can be referenced later
// giving the live trait multiple variables would allow for handling render taking down a site 

const Cathedral = {
    name: "Cathedral",
    gitHub: "https://github.com/Rovak0/cathedralOnline"
};

const Gold_Dive = {
    name : "Gold Dive",
    gitHub: "https://github.com/Rovak0/Gold_Dive",
    live: "https://gold-dive-r5vs.onrender.com/"
};

const projects = [
    Cathedral,
    Gold_Dive
];

export default projects;